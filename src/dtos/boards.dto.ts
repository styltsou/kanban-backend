import { z } from 'zod';

export const CreateBoardDTO = z.object({
  name: z.string(),
});

export const UpdateBoardDTO = z.object({
  name: z.string(),
});
