import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export const associationPlayerToSport = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { playerId, sportId } = request.body as {
    playerId: number;
    sportId: number;
  };

  try {
    await prisma.playerSport.create({
      data: {
        player: {
          connect: { id: playerId },
        },
        sport: {
          connect: { id: sportId },
        },
      },
    });
    return reply
      .status(200)
      .send({ message: "Player associated with sport successfully" });
  } catch (error) {
    console.error("Error associating player to sport:", error);
    return reply.status(500).send({
      error: "An error occurred while associating the player to the sport.",
    });
  }
};

export const deletePlayerToSportAssociation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { playerId, sportId } = request.params as {
    playerId: string;
    sportId: string;
  };
  try {
    const playerSport = await prisma.playerSport.deleteMany({
      where: {
        playerId: parseInt(playerId),
        sportId: parseInt(sportId),
      },
    });

    reply.send({
      message: `${playerSport.count} association(s) deleted.`,
    });
  } catch (error) {
    return reply.status(500).send({
      error:
        "An error occurred while deleting the player to sport association.",
    });
  }
};
