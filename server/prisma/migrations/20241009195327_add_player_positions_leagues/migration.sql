-- CreateTable
CREATE TABLE "PlayerSport" (
    "playerId" INTEGER NOT NULL,
    "sportId" INTEGER NOT NULL,

    PRIMARY KEY ("playerId", "sportId"),
    CONSTRAINT "PlayerSport_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerSport_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
