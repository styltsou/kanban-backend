import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import { UserController } from '@/controllers/users.controller';
import { WebhookVerificationMiddleware } from '@/middlewares/webhookVerification.middleware';

export class WebhooksRoute implements Routes {
  public path = '/webhooks';
  public router: Router = Router();
  public userController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}/user-created`,
      WebhookVerificationMiddleware(process.env.CLERK_USER_CREATED_WEBHOOK_SECRET),
      this.userController.createUser,
    );
  }
}
