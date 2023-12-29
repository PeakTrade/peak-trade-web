import { TRPCError } from '@trpc/server';
import { hash } from 'bcrypt';

import { RegisterFormFields, zRegisterFormFields } from '@/lib/schemas/user';

import { createTrpcRouter, publicProcedure } from '../config/trpc';

export const authRouter = createTrpcRouter({
  register: publicProcedure()
    .input(zRegisterFormFields)
    .mutation(async ({ ctx, input }) => {
      const { email, password } = input;

      const isEmailTaken = await ctx.db.user.findFirst({ where: { email } });

      if (isEmailTaken) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'Email already taken',
        });
      }

      const hashedPassword = await hash(password, 12);

      const result = await ctx.db.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      return {
        status: 201,
        message: 'Account created successfully',
        result: result.email,
      };
    }),
});
