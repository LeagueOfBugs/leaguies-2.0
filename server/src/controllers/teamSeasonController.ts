import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();
export const associationTeamToSeason = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { teamId, seasonId } = request.body as {
    teamId: number;
    seasonId: number;
  };
  console.log(`index: ${teamId}, ${seasonId}`);
  try {
    const teamSeason = await prisma.teamSeason.create({
      data: {
        team: {
          connect: { id: teamId },
        },
        season: {
          connect: { id: seasonId },
        },
      },
    });
    reply.send(teamSeason);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while associating the team to the season.",
    });
  }
};

export const deleteTeamtoSeasonAssociation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { teamId, seasonId } = request.params as {
    teamId: string;
    seasonId: string;
  };
  try {
    const teamSeason = await prisma.teamSeason.deleteMany({
      where: {
        teamId: parseInt(teamId),
        seasonId: parseInt(seasonId),
      },
    });
    reply.send({
      message: `${teamSeason.count} association(s) deleted.`,
    });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the team to season association.",
    });
  }
};
