import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { accountFields, avatarFields } from '@/server/config/schemas/Account';

import {
  createTrpcRouter,
  protectedProcedure,
  publicProcedure,
} from '../config/trpc';

export const accountRouter = createTrpcRouter({
  getAvatar: publicProcedure()
    .input(z.void())
    .query(async ({ ctx }) => {
      const { user: ctxUser, db } = ctx;
      if (!ctxUser) {
        return null;
      }
      const account = await db.user.findUnique({
        where: {
          id: ctxUser.id,
        },
        select: avatarFields,
      });

      if (!account) {
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }

      return account;
    }),
  get: protectedProcedure()
    .input(z.void())
    .query(async ({ ctx }) => {
      const { user: ctxUser, db } = ctx;

      const account = await db.user.findUnique({
        where: {
          id: ctxUser?.id,
        },
        select: accountFields,
      });

      if (!account) {
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }

      return account;
    }),
});
