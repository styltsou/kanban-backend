import { z } from 'zod';

export const CreateUserDto = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  avatarUrl: z.string(),
});

export const UpdateUserDto = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
});
