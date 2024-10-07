import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export async function associateRefereeToMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { refereeId, matchId } = request.body as {
    refereeId: number;
    matchId: number;
  };
  try {
    const refereeMatch = await prisma.matchReferee.create({
      data: {
        referee: {
          connect: { id: refereeId },
        },
        match: {
          connect: { id: matchId },
        },
      },
    });
    reply.send({
      refereeMatch,
    });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while associating the referee to the match.",
    });
  }
}

export async function deleteRefereeMatchAssociation(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { refereeId, matchId } = request.params as {
    refereeId: string;
    matchId: string;
  };

  try {
    const playerTeam = await prisma.matchReferee.deleteMany({
      where: {
        refereeId: parseInt(refereeId),
        matchId: parseInt(matchId),
      },
    });

    reply.send({
      message: `${playerTeam.count} association(s) deleted.`,
    });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the referee match association.",
    });
  }
}
