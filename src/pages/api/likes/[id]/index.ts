import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { likeValidationSchema } from 'validationSchema/likes';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.like
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getLikeById();
    case 'PUT':
      return updateLikeById();
    case 'DELETE':
      return deleteLikeById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLikeById() {
    const data = await prisma.like.findFirst(convertQueryToPrismaUtil(req.query, 'like'));
    return res.status(200).json(data);
  }

  async function updateLikeById() {
    await likeValidationSchema.validate(req.body);
    const data = await prisma.like.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteLikeById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.like.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
