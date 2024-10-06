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
    return reply.status(200).send(league);
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
  const { name } = request.body as { name: string };
  try {
    const league = await prisma.league.create({ data: { name } });
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
  const { name, leagueId } = request.body as { name: string; leagueId: string };
  try {
    const League = await prisma.league.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    reply.send(League);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while updating the player.",
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
