-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Season" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "isCurrent" BOOLEAN DEFAULT false,
    "leagueId" INTEGER,
    "trophyId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Season_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Season_trophyId_fkey" FOREIGN KEY ("trophyId") REFERENCES "Trophy" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Season" ("createdAt", "endDate", "id", "isCurrent", "leagueId", "name", "startDate", "trophyId", "updatedAt") SELECT "createdAt", "endDate", "id", "isCurrent", "leagueId", "name", "startDate", "trophyId", "updatedAt" FROM "Season";
DROP TABLE "Season";
ALTER TABLE "new_Season" RENAME TO "Season";
CREATE UNIQUE INDEX "Season_trophyId_key" ON "Season"("trophyId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
