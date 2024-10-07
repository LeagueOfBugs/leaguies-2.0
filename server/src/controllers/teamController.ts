import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export const getTeams = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const teams = await prisma.team.findMany();
    reply.send(teams);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching teams.",
    });
  }
};

export const createTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, leagueId } = request.body as { name: string; leagueId: number };
  try {
    const team = await prisma.team.create({
      data: { name, leagueId },
    });
    reply.send(team);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the team.",
    });
  }
};

export const findTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  try {
    const team = await prisma.team.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        players: true,
      },
    });
    return reply.status(200).send(team);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching team.",
    });
  }
};

export const updateTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const { name, leagueId } = request.body as { name: string; leagueId: string };
  try {
    const team = await prisma.team.update({
      where: { id: parseInt(id) },
      data: { name, leagueId: parseInt(leagueId) || null },
    });
    reply.send(team);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while updating the player.",
    });
  }
};

export const deleteTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };

  try {
    await prisma.team.delete({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send({ message: "Team deleted successfully" });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the team.",
    });
  }
};
