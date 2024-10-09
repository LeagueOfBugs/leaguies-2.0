import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();
export const associationPlayerToLeague = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { playerId, leagueId } = request.body as {
    playerId: number;
    leagueId: number;
  };
  try {
    const playerLeague = await prisma.playerLeague.create({
      data: {
        player: {
          connect: { id: playerId },
        },
        league: {
          connect: { id: leagueId },
        },
      },
    });
    return reply.send(playerLeague);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while associating the player to the league.",
    });
  }
};

export const deletePlayerToLeagueAssociation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { playerId, leagueId } = request.params as {
    playerId: string;
    leagueId: string;
  };
  try {
    const playerLeague = await prisma.playerLeague.deleteMany({
      where: {
        playerId: parseInt(playerId),
        leagueId: parseInt(leagueId),
      },
    });
    return reply.send({
      message: `Player to league association deleted successfully. ${playerLeague}`,
    });
  } catch (error) {
    return reply.status(500).send({
      error:
        "An error occurred while deleting the player to league association.",
    });
  }
};
