import { z } from 'zod';

import { zUser } from '@/lib/schemas/user';

export const accountFields = {
  id: true,
  name: true,
  email: true,
  posts: true,
} as const;

export const avatarFields = {
  name: true,
  email: true,
} as const;

export const zAccount = () => zUser().pick(accountFields);

export type Account = z.infer<ReturnType<typeof zAccount>>;
