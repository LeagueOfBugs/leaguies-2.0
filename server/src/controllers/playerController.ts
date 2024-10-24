import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";
import { sports } from "../constants/data";
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

export const getfreeAgents = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const freeAgents = await prisma.player.findMany({
      where: {
        teams: {
          none: {},
        },
      },
    });
    reply.send(freeAgents);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching free agents.",
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
                invites: true,
                players: {
                  include: {
                    player: {
                      select: {
                        id: true,
                        name: true,
                        positions: true,
                      },
                    },
                  },
                },
                active: true,
                seasons: true,
                trophies: true,
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
                sport: true,
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
                id: true,
                name: true,
                teamLimit: true,
                active: true,
                invites: true,
                teams: true,
                seasons: true,
                sportId: true,
                staff: {
                  select: {
                    id: true,
                    role: true,
                    leagueId: true,
                  },
                },
                players: {
                  include: {
                    player: {
                      select: {
                        id: true,
                        name: true,
                        positions: true,
                      },
                    },
                  },
                },
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
        invites: {
          include: {
            player: {
              select: {
                id: true,
                name: true,
              },
            },
            league: {
              select: {
                name: true,
              },
            },
            team: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const formatLeaguePlayers = (players: any[]) => {
      const formattedPlayers = players.map((player) => {
        return {
          id: player.player.id,
          name: player.player.name,
        };
      });
      return formattedPlayers;
    };

    const formatLeagueTeams = (teams: any[]) => {
      const formattedTeams = teams.map((team) => {
        return {
          id: team.id,
          name: team.name,
          active: team.active,
          invites: team.invites,
        };
      });
      return formattedTeams;
    };

    const formatLeagueSeasons = (seasons: any[]) => {
      const formattedSeasons = seasons.map((season) => {
        return {
          id: season.id,
          name: season.name,
          active: season.active,
          startDate: season.startDate,
          endDate: season.endDate,
          trophy: season.trophy ?? null,
        };
      });
      return formattedSeasons;
    };

    const leagues = player?.leagues.map((league) => {
      const sportId = league.league.sportId ?? 0;
      const players = formatLeaguePlayers(league.league.players);
      const teams = formatLeagueTeams(league.league.teams);
      const seasons = formatLeagueSeasons(league.league.seasons);

      return {
        id: league.league.id,
        name: league.league.name,
        active: league.league.active,
        teamLimit: league.league.teamLimit,
        staff: league.league.staff,
        sport: sports[sportId],
        invites: league.league.invites,
        players: players,
        seasons: seasons,
        teams: teams,
      };
    });

    const teams = player?.teams.map((team) => {
      return {
        id: team.teamId,
        name: team.team.name,
      };
    });

    const positions = player?.positions.map((position) => {
      const subPosition = position.position.subPositions.find(
        (subPosition) => subPosition.id === position.subPositionId
      );

      return {
        sport: position.position.sport.name,
        position: position.position.name,
        positionAbbreviation: position.position.abbreviation,
        subPosition: subPosition
          ? {
              name: subPosition.name,
              abbreviation: subPosition.abbreviation,
            }
          : null,
      };
    });

    const stats = player?.stats.reduce(
      (groupedStats: Record<string, any>, currentStat) => {
        const sport = currentStat.statType.sport.name.toLocaleLowerCase();

        if (!groupedStats[sport]) {
          groupedStats[sport] = [];
        }

        groupedStats[sport].push({
          statName: currentStat.statType.name,
          value: currentStat.value,
        });
        return groupedStats;
      },
      {}
    );

    const awards = player?.awards.map((award) => award.name);

    const formattedPlayer = {
      id: player?.id,
      name: player?.name,
      leagues: leagues,
      teams: teams,
      positions: positions,
      stats: [stats],
      awards: awards,
      invites: player?.invites,
    };

    return reply.status(200).send(formattedPlayer);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "An error occurred while fetching the player.",
    });
  }
};

export const findPlayerLeagues = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { playerId } = request.params as { playerId: number };
  try {
    const playerLeagues = await prisma.playerLeague.findMany({
      where: {
        playerId,
      },
      include: {
        league: {
          select: {
            id: true,
            name: true,
            active: true,
            teams: true,
            seasons: true,
            sportId: true,
            players: true,
          },
        },
      },
    });
    return reply.status(200).send(playerLeagues);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching the player leagues.",
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
