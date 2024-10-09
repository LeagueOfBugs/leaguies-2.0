import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export const assocciationPlayerToPosition = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { playerId, positionId, subPositionId } = request.body as {
    playerId: number;
    positionId: number;
    subPositionId?: number; // Make subPositionId optional
  };

  try {
    const playerPosition = await prisma.playerPosition.create({
      data: {
        player: {
          connect: { id: playerId },
        },
        position: {
          connect: { id: positionId },
        },
        subPosition: subPositionId
          ? {
              connect: { id: subPositionId },
            }
          : undefined,
      },
    });
    reply.send(playerPosition);
  } catch (error) {
    console.error("Error associating player to position:", error);
    return reply.status(500).send({
      error: "An error occurred while associating the player to the position.",
    });
  }
};

export const deletePlayerToPositionAssociation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { playerId, positionId } = request.params as {
    playerId: string;
    positionId: string;
  };
  try {
    const playerPosition = await prisma.playerPosition.deleteMany({
      where: {
        playerId: parseInt(playerId),
        positionId: parseInt(positionId),
        subPositionId: null,
      },
    });
    reply.send({
      message: `${playerPosition.count} association(s) deleted.`,
    });
  } catch (error) {
    return reply.status(500).send({
      error:
        "An error occurred while deleting the player to position association.",
    });
  }
};
