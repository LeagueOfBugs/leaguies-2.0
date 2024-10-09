/*
  Warnings:

  - You are about to drop the column `positionId` on the `Player` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "PlayerPosition" (
    "playerId" INTEGER NOT NULL,
    "positionId" INTEGER NOT NULL,
    "subPositionId" INTEGER,

    PRIMARY KEY ("playerId", "positionId"),
    CONSTRAINT "PlayerPosition_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerPosition_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerPosition_subPositionId_fkey" FOREIGN KEY ("subPositionId") REFERENCES "SubPosition" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Player" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
