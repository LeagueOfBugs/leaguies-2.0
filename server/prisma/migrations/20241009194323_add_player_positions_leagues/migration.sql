-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayerStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "playerId" INTEGER NOT NULL,
    "statTypeId" INTEGER NOT NULL,
    "value" REAL,
    CONSTRAINT "PlayerStats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerStats_statTypeId_fkey" FOREIGN KEY ("statTypeId") REFERENCES "StatType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlayerStats" ("id", "playerId", "statTypeId", "value") SELECT "id", "playerId", "statTypeId", "value" FROM "PlayerStats";
DROP TABLE "PlayerStats";
ALTER TABLE "new_PlayerStats" RENAME TO "PlayerStats";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
