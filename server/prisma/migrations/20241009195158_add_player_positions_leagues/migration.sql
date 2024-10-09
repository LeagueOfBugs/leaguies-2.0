-- CreateTable
CREATE TABLE "PlayerLeague" (
    "playerId" INTEGER NOT NULL,
    "leagueId" INTEGER NOT NULL,

    PRIMARY KEY ("playerId", "leagueId"),
    CONSTRAINT "PlayerLeague_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerLeague_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
