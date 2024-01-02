import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  zLocation,
  zLocationFormFields,
  zLocationType,
} from '../config/schemas/Map';
import {
  createTrpcRouter,
  protectedProcedure,
  publicProcedure,
} from '../config/trpc';

export const mapRouter = createTrpcRouter({
  all: publicProcedure()
    .input(
      z.object({
        typeFilter: z.array(zLocationType()).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      // TODO later : improve with only loading part of the locations
      const where = {
        type: {
          hasEvery: input.typeFilter,
        },
      } satisfies Prisma.LocationWhereInput;

      return {
        locations: await ctx.db.location.findMany({
          where,
        }),
      };
    }),

  create: protectedProcedure()
    .input(zLocationFormFields)
    .mutation(async ({ ctx, input }) => {
      if (!input.name.length) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Please provide a name to this spot',
        });
      }

      if (!input.type.length) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Please provide a type to this spot',
        });
      }

      const result = await ctx.db.location.create({
        data: input,
      });

      if (!result) throw new TRPCError({ code: 'BAD_REQUEST' });

      return {
        status: 201,
        message: 'Location created successfully',
        result: result.name,
      };
    }),
});
