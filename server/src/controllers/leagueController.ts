import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export const getLeagues = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const leagues = await prisma.league.findMany();
  return reply.status(200).send(leagues);
};

export const findLeague = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  try {
    const league = await prisma.league.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        teams: true,
      },
    });
    console.log(`league: ${league}`);
    reply.status(200).send(league);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching the league.",
    });
  }
};

export const createLeague = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, sportId } = request.body as { name: string; sportId: number };
  try {
    const league = await prisma.league.create({
      data: { name, sportId: sportId ?? undefined },
    });
    return reply.status(201).send(league);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the league.",
    });
  }
};

export const updateLeague = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };

  // Define the types for the request body
  const { name, teams } = request.body as {
    name?: string;
    teams?: Array<{
      name: string;
    }>;
  };

  try {
    const existingLeague = await prisma.league.findUnique({
      where: { id: parseInt(id) },
      include: {
        teams: true,
      },
    });

    if (!existingLeague) {
      return reply.status(404).send({ error: "League not found." });
    }

    const updatedLeague = await prisma.league.update({
      where: { id: parseInt(id) },
      data: {
        name: name || existingLeague.name, // Update the name if provided, otherwise keep existing
        teams: {
          create: teams?.map((team) => ({
            name: team.name,
          })),
        },
      },
    });

    return reply.status(200).send(updatedLeague);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "An error occurred while updating the league.",
    });
  }
};

export const deleteLeague = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  try {
    await prisma.league.delete({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send({ message: "League deleted successfully" });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the League.",
    });
  }
};
