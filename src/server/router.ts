import { createTrpcRouter } from './config/trpc';
import { accountRouter } from './routers/account';
import { authRouter } from './routers/auth';

export const appRouter = createTrpcRouter({
  auth: authRouter,
  account: accountRouter,
});

export type AppRouter = typeof appRouter;
