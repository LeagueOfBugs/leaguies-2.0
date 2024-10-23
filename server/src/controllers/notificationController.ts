import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getNotifications = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {};

export const createNotification = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { message, receiverId, entityType, entityId } = request.body as {
    message: string;
    receiverId: number;
    entityType: string;
    entityId: number;
  };

  try {
    const notification = await prisma.notification.create({
      data: {
        message,
        receiverId,
        entityType,
        entityId,
      },
    });

    switch (entityType) {
      case "Team":
        await prisma.teamNotification.create({
          data: {
            team: {
              connect: { id: entityId },
            },
            notification: {
              connect: { id: notification.id },
            },
          },
        });
        break;
      case "League":
        await prisma.leagueNotification.create({
          data: {
            league: {
              connect: { id: entityId },
            },
            notification: {
              connect: { id: notification.id },
            },
          },
        });
        break;
      case "Player":
        await prisma.playerNotification.create({
          data: {
            player: {
              connect: { id: entityId },
            },
            notification: {
              connect: { id: notification.id },
            },
          },
        });
        break;
    }

    reply.send(notification);
  } catch (error) {
    console.log(error);
    return reply.status(500).send({
      error: "An error occurred while creating the notification.",
    });
  }
};
