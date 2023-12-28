import { createTrpcRouter } from './config/trpc';

export const appRouter = createTrpcRouter({});

export type AppRouter = typeof appRouter;
