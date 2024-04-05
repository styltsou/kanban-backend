import '@config';
import { createServer } from 'http';
import { App } from '@/app';
import { UserRoute } from '@routes/users.route';
import { WebhooksRoute } from '@/routes/webhooks.route';
import { BoardRoute } from '@/routes/boards.route';
import { logger } from '@/utils/logger';
import { Server } from 'socket.io';

const app = new App([new UserRoute(), new BoardRoute(), new WebhooksRoute()]);

const server = createServer(app.getServer());

const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
    credentials: Boolean(process.env.CREDENTIALS),
  },
});

io.on('connection', socket => {
  logger.info('A client connected to the socket');
  socket.on('ws:mount', () => console.log('Client emited a mount event'));
});

server.listen(app.port, () => {
  logger.info(`=================================`);
  logger.info(`======= ENV: ${app.env} =======`);
  logger.info(`🚀 App listening on port ${app.port}`);
  logger.info(`=================================`);
});
