import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function associationPlayerToStats(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { playerId, sportId } = request.body as {
    playerId: number;
    sportId: number;
  };

  console.log(`index: ${playerId}, ${sportId}`);

  const statsPerSport = await prisma.statType.findMany({
    where: {
      sportId: sportId,
    },
  });

  if (statsPerSport.length === 0) {
    return reply.status(404).send({
      error: "No stats found for the specified sport.",
    });
  }

  try {
    const createPlayerStatsPromises = statsPerSport.map((stats) => {
      console.log(`stats: ${stats.name}`);
      return prisma.playerStats.create({
        data: {
          player: {
            connect: { id: playerId },
          },
          statType: {
            connect: { id: stats.id },
          },
          value: 0,
        },
      });
    });

    await Promise.all(createPlayerStatsPromises);

    reply.send("Stats added to player successfully.");
  } catch (error) {
    console.error("Error associating player to stats:", error);
    return reply.status(500).send({
      error: "An error occurred while associating the player to the stat.",
    });
  }
}

export async function deletePlayerToStatsAssociation(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { playerId, statTypeId } = request.body as {
    playerId: number;
    statTypeId: number;
  };

  try {
    const playerStat = await prisma.playerStats.deleteMany({
      where: {
        playerId: playerId,
        statTypeId: statTypeId,
      },
    });
    reply.send(playerStat);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the player to stat association.",
    });
  }
}
