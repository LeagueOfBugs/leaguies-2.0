-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TeamSeason" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teamId" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "draws" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TeamSeason_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TeamSeason_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TeamSeason" ("createdAt", "draws", "id", "losses", "seasonId", "teamId", "updatedAt", "wins") SELECT "createdAt", "draws", "id", "losses", "seasonId", "teamId", "updatedAt", "wins" FROM "TeamSeason";
DROP TABLE "TeamSeason";
ALTER TABLE "new_TeamSeason" RENAME TO "TeamSeason";
CREATE UNIQUE INDEX "TeamSeason_teamId_seasonId_key" ON "TeamSeason"("teamId", "seasonId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
