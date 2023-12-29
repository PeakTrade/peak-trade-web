import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

import { db } from './db';

const t = initTRPC.context<typeof createTrpcContext>().create();
export const createTrpcRouter = t.router;

export const createTrpcContext = async ({
  req,
}: FetchCreateContextFnOptions) => {
  // TODO : Populate context

  return { req, db };
};

export type AppContext = inferAsyncReturnType<typeof createTrpcContext>;

export const publicProcedure = () => t.procedure;
