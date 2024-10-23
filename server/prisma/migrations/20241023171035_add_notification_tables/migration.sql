-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Notification_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "League" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Notification_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Notification_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Player" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TeamStaff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teamId" INTEGER NOT NULL,
    "staffId" INTEGER NOT NULL,
    "role" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TeamStaff_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TeamStaff_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TeamStaff" ("createdAt", "id", "role", "staffId", "teamId", "updatedAt") SELECT "createdAt", "id", "role", "staffId", "teamId", "updatedAt" FROM "TeamStaff";
DROP TABLE "TeamStaff";
ALTER TABLE "new_TeamStaff" RENAME TO "TeamStaff";
CREATE UNIQUE INDEX "TeamStaff_teamId_staffId_key" ON "TeamStaff"("teamId", "staffId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
