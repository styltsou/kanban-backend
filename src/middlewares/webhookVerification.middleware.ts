import { NextFunction, Request, Response } from 'express';
import { Webhook } from 'svix';
import { HttpException } from '@exceptions/httpException';

/**
 * @name WebhookVerificationMiddleware
 * @description Signature verfication of Clerk webhooks using Svix
 * @param secret verfication secret
 */

export const WebhookVerificationMiddleware = (secret: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const payload = JSON.stringify(req.body);

    const svix_id = headers['svix-id'] as string;
    const svix_timestamp = headers['svix-timestamp'] as string;
    const svix_signature = headers['svix-signature'] as string;

    if (!svix_id || !svix_timestamp || !svix_signature) {
      next(new HttpException(400, 'Error occured -- no svix headers'));
    }

    const wh = new Webhook(secret);

    try {
      wh.verify(payload, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      });

      next();
    } catch (error: any) {
      next(new HttpException(400, `Webhook failed to verify. Error: ${error.message}`));
    }

    try {
      next();
    } catch (error) {
      next(new HttpException(400, error.errors));
    }
  };
};
