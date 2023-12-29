import { z } from 'zod';

import { zUser } from './user';

export const zPostStatus = () => z.enum(['PENDING', 'APPROVED', 'DENIED']);
export const zPost = () =>
  z.object({
    title: z.string(),
    content: z.string().optional(),
    status: zPostStatus(),
  });
