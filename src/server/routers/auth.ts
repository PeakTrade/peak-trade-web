import { TRPCError } from '@trpc/server';
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { z } from 'zod';

import { env } from '@/env.mjs';
import {
  zLoginFormFields,
  zRegisterFormFields,
} from '@/server/config/schemas/Users';

import { AUTH_COOKIE, isValidPassword } from '../config/auth';
import { createTrpcRouter, publicProcedure } from '../config/trpc';

export const authRouter = createTrpcRouter({
  checkAuthenticated: publicProcedure()
    .input(z.void())
    .query(async ({ ctx }) => {
      // // remove
      // throw new TRPCError({ code: 'FORBIDDEN', message: ctx.user?.email });
      return {
        isAuthenticated: !!ctx.user,
      };
    }),

  register: publicProcedure()
    .input(zRegisterFormFields)
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;

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
          name,
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

  login: publicProcedure()
    .input(zLoginFormFields)
    .mutation(async ({ ctx, input }) => {
      const { email, password } = input;
      const user = await ctx.db.user.findUnique({
        where: {
          email,
        },
      });

      if (!user)
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid credentials',
        });

      if (!(await isValidPassword(password, user.password))) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid password',
        });
      }

      const authToken = jwt.sign({ id: user.id }, env.AUTH_SECRET);
      cookies().set({
        name: AUTH_COOKIE,
        value: authToken,
        httpOnly: true,
      });

      return {
        authToken,
      };
    }),

  logout: publicProcedure()
    .input(z.void())
    .mutation(async ({ ctx }) => {
      ctx.user = null;
      cookies().delete(AUTH_COOKIE);
    }),
});
