import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const playerJoinLeague = async (playerId: number, leagueId: number) => {
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
    return playerLeague;
  } catch (error) {
    return { error: "An error occurred while joining the league." };
  }
};
