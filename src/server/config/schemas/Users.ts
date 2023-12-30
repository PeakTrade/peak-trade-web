import { z } from 'zod';

import { zPost } from './Posts';

export const zUser = () =>
  z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    posts: z.array(zPost()),
    creationDate: z.date(),
  });
export type User = z.infer<ReturnType<typeof zUser>>;

export const zRegisterFormFields = zUser().pick({
  name: true,
  email: true,
  password: true,
});
export type RegisterFormFields = z.infer<typeof zRegisterFormFields>;

export const zLoginFormFields = zRegisterFormFields.pick({
  email: true,
  password: true,
});
export type LoginFormFields = z.infer<typeof zLoginFormFields>;
