import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { HttpException } from '@exceptions/httpException';

/**
 * @name ValidationMiddleware
 * @description Allows use of ZodSchema based validation
 * @param schema dto
 */

export const ValidationMiddleware = (schema: z.ZodSchema<object>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto = schema.parse(req.body);
      req.body = dto;
      next();
    } catch (error) {
      next(new HttpException(400, error.errors));
    }
  };
};
