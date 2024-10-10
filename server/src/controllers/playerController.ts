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
        teams: {
          include: {
            team: {
              select: {
                name: true,
                league: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
        stats: {
          include: {
            statType: {
              select: {
                name: true,
              },
            },
          },
        },
        positions: {
          include: {
            position: {
              select: {
                name: true,
                abbreviation: true,
                subPositions: {
                  select: {
                    id: true,
                    name: true,
                    abbreviation: true,
                  },
                },
                sport: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
        leagues: {
          include: {
            league: {
              select: {
                name: true,
              },
            },
          },
        },
        awards: true,
        sports: {
          include: {
            sport: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return reply.status(200).send(player);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return reply.status(500).send({
      error: "An error occurred while fetching the player.",
    });
  }
};

export const createPlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, positionId, stats, teams } = request.body as {
    name: string;
    positionId?: number;
    stats?: { statTypeId: number; value: number }[];
    teams?: { teamId: number }[];
  };

  try {
    const player = await prisma.player.create({
      data: {
        name,
        // positionId: positionId ?? null, // Set to null if not provided
        // // Conditionally create stats if they exist
        // ...(stats && stats.length > 0
        //   ? {
        //       stats: {
        //         create: stats.map((stat) => ({
        //           statTypeId: stat.statTypeId,
        //           value: stat.value,
        //         })),
        //       },
        //     }
        //   : {}),
        // // Conditionally create teams if they exist
        // ...(teams && teams.length > 0
        //   ? {
        //       teams: {
        //         create: teams.map((team) => ({
        //           team: { connect: { id: team.teamId } },
        //         })),
        //       },
        //     }
        //   : {}),
      },
    });

    reply.send(player);
  } catch (error) {
    console.error("Error creating player:", error);
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
            stats: {
              create: player.stats?.map((stat: any) => ({
                statTypeId: stat.statTypeId,
                value: stat.value,
              })),
            },
            teams: {
              create: player.teamIds?.map((teamId: number) => ({
                team: { connect: { id: teamId } },
              })),
            },
          },
        })
      )
    );

    reply.send(createdPlayers);
  } catch (error) {
    console.error("Error creating players:", error);
    reply.status(500).send({ error: "Failed to create players" });
  }
};

export const updatePlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const { name } = request.body as { name: string };
  try {
    const player = await prisma.player.update({
      where: { id: parseInt(id) },
      data: { name },
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
