import { TRPCError, inferAsyncReturnType, initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import superjson from 'superjson';

import { getServerSideUser } from './auth';
import { db } from './db';

const t = initTRPC.context<typeof createTrpcContext>().create({
  transformer: superjson,
});
export const createTrpcRouter = t.router;

export const createTrpcContext = async ({
  req,
}: FetchCreateContextFnOptions) => {
  const user = await getServerSideUser();

  return { req, user, db };
};

export type AppContext = inferAsyncReturnType<typeof createTrpcContext>;

export const publicProcedure = () => t.procedure;

export const protectedProcedure = () =>
  publicProcedure().use(
    t.middleware(({ ctx, next }) => {
      const user = ctx.user;

      if (!user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }

      return next({
        ctx: {
          user,
        },
      });
    })
  );
