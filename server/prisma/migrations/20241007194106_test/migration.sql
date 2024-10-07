/*
  Warnings:

  - You are about to drop the `_MatchReferees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `teamId` on the `Player` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_MatchReferees_B_index";

-- DropIndex
DROP INDEX "_MatchReferees_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_MatchReferees";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "MatchReferee" (
    "matchId" INTEGER NOT NULL,
    "refereeId" INTEGER NOT NULL,

    PRIMARY KEY ("matchId", "refereeId"),
    CONSTRAINT "MatchReferee_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MatchReferee_refereeId_fkey" FOREIGN KEY ("refereeId") REFERENCES "Referee" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlayerTeam" (
    "playerId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    PRIMARY KEY ("playerId", "teamId"),
    CONSTRAINT "PlayerTeam_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PlayerTeam_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Award" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "playerId" INTEGER,
    "matchId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Award_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Award_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Award" ("createdAt", "description", "id", "matchId", "name", "playerId", "updatedAt") SELECT "createdAt", "description", "id", "matchId", "name", "playerId", "updatedAt" FROM "Award";
DROP TABLE "Award";
ALTER TABLE "new_Award" RENAME TO "Award";
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "positionId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Player_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("createdAt", "id", "name", "positionId", "updatedAt") SELECT "createdAt", "id", "name", "positionId", "updatedAt" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
