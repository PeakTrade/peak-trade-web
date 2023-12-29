import { TRPCError } from '@trpc/server';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

import { env } from '@/env.mjs';
import { accountFields, zAccount } from '@/lib/schemas/account';

import { db } from './db';

export const AUTH_COOKIE = 'auth-token';

export const getServerSideUser = async () => {
  const authToken = cookies().get(AUTH_COOKIE)?.value;

  if (!authToken) return null;

  const jwtUser = jwtDecode(authToken);

  if (!jwtUser?.id) {
    return null;
  }
  const user = await db.user.findUnique({
    where: {
      id: jwtUser.id,
    },
    select: accountFields,
  });

  if (!user) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'There was a problem during your authentication',
    });
  }

  return zAccount().parse(user);
};

export const jwtDecode = (authToken: string) => {
  try {
    const jwtUser = jwt.verify(authToken, env.AUTH_SECRET);
    if (!jwtUser || typeof jwtUser !== 'object' || !('id' in jwtUser)) {
      return null;
    }

    return jwtUser;
  } catch {
    return null;
  }
};

export const isValidPassword = async (
  password: string,
  userPassword: string
) => {
  return await compare(password, userPassword);
};
