import { z } from 'zod';

import { zUser } from './user';

export const zPostStatus = () =>
  z.enum(['PENDING', 'APPROVED', 'DENIED']).catch('PENDING');
export const zPost = () =>
  z.object({
    id: z.string(),
    title: z.string(),
    content: z.string().nullable(),
    status: zPostStatus(),
    authorId: z.string().nullable(),
  });

export type Post = z.infer<ReturnType<typeof zPost>>;
