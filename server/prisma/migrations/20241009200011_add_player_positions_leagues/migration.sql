-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_League" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "sportId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "League_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_League" ("createdAt", "id", "name", "sportId", "updatedAt") SELECT "createdAt", "id", "name", "sportId", "updatedAt" FROM "League";
DROP TABLE "League";
ALTER TABLE "new_League" RENAME TO "League";
CREATE TABLE "new_Season" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
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
CREATE TABLE "new_Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "leagueId" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Team_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Team" ("createdAt", "id", "leagueId", "name", "updatedAt") SELECT "createdAt", "id", "leagueId", "name", "updatedAt" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
