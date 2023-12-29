import { z } from 'zod';

export const RegisterCredentials = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});
export type RegisterFormFields = z.infer<typeof RegisterCredentials>;
export const LoginCredentials = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
