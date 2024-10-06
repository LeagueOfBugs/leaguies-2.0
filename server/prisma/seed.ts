import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const sportsData = [
    {
      name: "Soccer",
      positions: [
        { name: "Forward" },
        { name: "Midfielder" },
        { name: "Defender" },
        { name: "Goalkeeper" },
      ],
      statTypes: [{ name: "Goals" }, { name: "Assists" }, { name: "Saves" }],
    },
    {
      name: "Basketball",
      positions: [
        { name: "Point Guard" },
        { name: "Shooting Guard" },
        { name: "Small Forward" },
        { name: "Power Forward" },
        { name: "Center" },
      ],
      statTypes: [
        { name: "Points" },
        { name: "Rebounds" },
        { name: "Assists" },
        { name: "Steals" },
      ],
    },
    {
      name: "Baseball",
      positions: [
        { name: "Pitcher" },
        { name: "Catcher" },
        { name: "First Base" },
        { name: "Second Base" },
        { name: "Shortstop" },
        { name: "Third Base" },
        { name: "Outfielder" },
      ],
      statTypes: [
        { name: "Home Runs" },
        { name: "RBIs" },
        { name: "Strikeouts" },
      ],
    },
  ];

  // Seed data
  for (const sport of sportsData) {
    const createdSport = await prisma.sport.create({
      data: {
        name: sport.name,
        positions: {
          create: sport.positions,
        },
        statTypes: {
          create: sport.statTypes,
        },
      },
    });
    console.log(`Created sport: ${createdSport.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
