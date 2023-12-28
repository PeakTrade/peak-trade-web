import { initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

const t = initTRPC.context<typeof createTrpcContext>().create();

export const createTrpcRouter = t.router;

export const createTrpcContext = async ({
  req,
}: FetchCreateContextFnOptions) => {
  // TODO : Populate context

  return { req };
};

export type AppContext = Awaited<ReturnType<typeof createTrpcContext>>;
