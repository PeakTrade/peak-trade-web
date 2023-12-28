import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { createTrpcContext } from '@/server/config/trpc';
import { appRouter } from '@/server/router';

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/truc',
    req,
    router: appRouter,
    createContext: createTrpcContext,
  });
};

export { handler as GET, handler as POST };
