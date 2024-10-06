import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export const getPlayers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const players = await prisma.player.findMany();
    reply.send(players);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching players.",
    });
  }
};

export const findPlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  try {
    const player = await prisma.player.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        team: true,
      },
    });
    return reply.status(200).send(player);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching the player.",
    });
  }
};

export const createPlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, teamId, positionId } = request.body as {
    name: string;
    teamId: number;
    positionId: number;
  };
  try {
    const player = await prisma.player.create({
      data: { name, teamId, positionId },
    });
    reply.send(player);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the player.",
    });
  }
};

export const createPlayers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { players } = request.body as { players: any[] };
  try {
    const createdPlayers = await Promise.all(
      players.map((player) =>
        prisma.player.create({
          data: {
            name: player.name,
            teamId: player.teamId,
            positionId: player.positionId
              ? Number(player.positionId)
              : undefined,
            stats: {
              create: player.stats?.map((stat: any) => ({
                statTypeId: stat.statTypeId,
                value: stat.value,
              })),
            },
          },
        })
      )
    );

    reply.send(createdPlayers);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return reply.status(500).send({
      error: "An error occurred while creating the players.",
    });
  }
};

export const updatePlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const { name, teamId } = request.body as { name: string; teamId: number };
  try {
    const player = await prisma.player.update({
      where: { id: parseInt(id) },
      data: { name, teamId },
    });
    reply.send(player);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while updating the player.",
    });
  }
};

export const deletePlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };

  try {
    await prisma.player.delete({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send({ message: "Player deleted successfully" });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the player.",
    });
  }
};
