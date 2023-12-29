import { createTrpcRouter } from './config/trpc';
import { authRouter } from './routers/auth';

export const appRouter = createTrpcRouter({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
