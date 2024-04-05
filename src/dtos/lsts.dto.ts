import { z } from 'zod';

export const CreateListDTO = z.object({
  name: z.string(),
  color: z.string(),
});
