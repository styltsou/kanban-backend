import type { Config } from 'drizzle-kit';
import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export default {
  schema: './src/database/schema/*',
  out: './src/database/migrations',
  driver: 'pg',
  dbCredentials: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    user: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD || 'pass123',
    database: process.env.POSTGRES_DB || 'postgres_container',
  },
} satisfies Config;
