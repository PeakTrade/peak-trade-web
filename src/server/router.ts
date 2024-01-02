import { createTrpcRouter } from './config/trpc';
import { accountRouter } from './routers/account';
import { authRouter } from './routers/auth';
import { mapRouter } from './routers/map';

export const appRouter = createTrpcRouter({
  auth: authRouter,
  account: accountRouter,
  map: mapRouter,
});

export type AppRouter = typeof appRouter;
