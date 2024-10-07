import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export async function associatePlayerToTeam(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { playerId, teamId } = request.body as {
    playerId: number;
    teamId: number;
  };
  try {
    const playerTeam = await prisma.playerTeam.create({
      data: {
        player: {
          connect: { id: playerId },
        },
        team: {
          connect: { id: teamId },
        },
      },
    });
    reply.send(playerTeam);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while associating the player to the team.",
    });
  }
}

export async function deletePlayerTeamAssociation(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { playerId, teamId } = request.params as {
    playerId: string;
    teamId: string;
  };

  try {
    const playerTeam = await prisma.playerTeam.deleteMany({
      where: {
        playerId: parseInt(playerId),
        teamId: parseInt(teamId),
      },
    });

    reply.send({
      message: `${playerTeam.count} association(s) deleted.`,
    });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the player team association.",
    });
  }
}
