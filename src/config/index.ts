/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV}.local` });

import { z } from 'zod';
import { StrictAuthProp } from '@clerk/clerk-sdk-node';

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.string().default('5000'),
  CLERK_SECRET_KEY: z.string(),
  CLERK_USER_CREATED_WEBHOOK_SECRET: z.string(),
  CLERK_USER_UPDATED_WEBHOOK_SECRET: z.string(),
  CLERK_USER_DELETED_WEBHOOK_SECRET: z.string(),
  LOG_FORMAT: z.string().default('dev'),
  LOG_DIR: z.string(),
  ORIGIN: z.string(),
  CREDENTIALS: z.string().default('true'),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.string().default('5432'),
  POSTGRES_DB: z.string(),
});

const parsedSchema = environmentSchema.safeParse(process.env);

if (!parsedSchema) {
  throw new Error('Invalid environment variables');
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof environmentSchema> {}
  }

  namespace Express {
    interface Request extends StrictAuthProp {}
  }
}
