import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const sports = [
    { name: "Soccer" },
    { name: "Basketball" },
    { name: "Baseball" },
    { name: "Hockey" },
    { name: "Football" },
    { name: "Volleyball" },
  ];

  for (let sport of sports) {
    await prisma.sport.create({
      data: {
        name: sport.name,
      },
    });
  }

  const corePositions = [
    {
      name: "Goalkeeper",
      abbreviation: "GK",
      sportId: 1,
      subPositions: [],
    },
    {
      name: "Defender",
      abbreviation: "DEF",
      sportId: 1,
      subPositions: [
        {
          name: "Right Back",
          abbreviation: "RB",
          positionId: 2,
        },
        {
          name: "Left Back",
          abbreviation: "LB",
          positionId: 2,
        },
        {
          name: "Center Back",
          abbreviation: "CB",
          positionId: 2,
        },
        {
          name: "Sweeper",
          abbreviation: "SW",
          positionId: 2,
        },
        {
          name: "Right Wing Back",
          abbreviation: "RWB",
          positionId: 2,
        },
        {
          name: "Left Wing Back",
          abbreviation: "LWB",
          positionId: 2,
        },
      ],
    },
    {
      name: "Midfielder",
      abbreviation: "MID",
      sportId: 1,
      subPositions: [
        {
          name: "Defensive Midfielder",
          abbreviation: "CDM",
          positionId: 3,
        },
        {
          name: "Central Midfielder",
          abbreviation: "CM",
          positionId: 3,
        },
        {
          name: "Attacking Midfielder",
          abbreviation: "CAM",
          positionId: 3,
        },
        {
          name: "Right Midfielder",
          abbreviation: "RM",
          positionId: 3,
        },
        {
          name: "Left Midfielder",
          abbreviation: "LM",
          positionId: 3,
        },
      ],
    },
    {
      name: "Forward",
      abbreviation: "FWD",
      sportId: 1,
      subPositions: [
        {
          name: "Right Winger",
          abbreviation: "RW",
          positionId: 4,
        },
        {
          name: "Left Winger",
          abbreviation: "LW",
          positionId: 4,
        },
        {
          name: "Second Striker",
          abbreviation: "SS",
          positionId: 4,
        },
        {
          name: "Striker",
          abbreviation: "ST",
          positionId: 4,
        },
      ],
    },
    {
      name: "Point Guard",
      abbreviation: "PG",
      sportId: 2,
      subPositions: [
        {
          name: "Lead Guard",
          abbreviation: "LG",
          positionId: 5,
        },
        {
          name: "Combo Guard",
          abbreviation: "CG",
          positionId: 5,
        },
      ],
    },
    {
      name: "Shooting Guard",
      abbreviation: "SG",
      sportId: 2,
      subPositions: [
        {
          name: "Off Guard",
          abbreviation: "OG",
          positionId: 6,
        },
        {
          name: "Combo Guard",
          abbreviation: "CG",
          positionId: 6,
        },
      ],
    },
    {
      name: "Small Forward",
      abbreviation: "SF",
      sportId: 2,
      subPositions: [
        {
          name: "Swingman",
          abbreviation: "SW",
          positionId: 7,
        },
      ],
    },
    {
      name: "Power Forward",
      abbreviation: "PF",
      sportId: 2,
      subPositions: [
        {
          name: "Stretch Four",
          abbreviation: "S4",
          positionId: 8,
        },
      ],
    },
    {
      name: "Center",
      abbreviation: "C",
      sportId: 2,
      subPositions: [
        {
          name: "Stretch Five",
          abbreviation: "S5",
          positionId: 9,
        },
        {
          name: "Rim Protector",
          abbreviation: "RP",
          positionId: 9,
        },
      ],
    },
    {
      name: "Pitcher",
      abbreviation: "P",
      sportId: 3,
      subPositions: [
        {
          name: "Starting Pitcher",
          abbreviation: "SP",
          positionId: 10,
        },
        {
          name: "Relief Pitcher",
          abbreviation: "RP",
          positionId: 10,
        },
        {
          name: "Closer",
          abbreviation: "CL",
          positionId: 10,
        },
      ],
    },
    {
      name: "Catcher",
      abbreviation: "C",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "First Baseman",
      abbreviation: "1B",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Second Baseman",
      abbreviation: "2B",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Third Baseman",
      abbreviation: "3B",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Shortstop",
      abbreviation: "SS",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Left Fielder",
      abbreviation: "LF",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Center Fielder",
      abbreviation: "CF",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Right Fielder",
      abbreviation: "RF",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Designated Hitter",
      abbreviation: "DH",
      sportId: 3,
      subPositions: [],
    },
    {
      name: "Goaltender",
      abbreviation: "G",
      sportId: 4,
      subPositions: [],
    },
    {
      name: "Defenseman",
      abbreviation: "D",
      sportId: 4,
      subPositions: [
        {
          name: "Left Defenseman",
          abbreviation: "LD",
          positionId: 21,
        },
        {
          name: "Right Defenseman",
          abbreviation: "RD",
          positionId: 21,
        },
      ],
    },
    {
      name: "Center",
      abbreviation: "C",
      sportId: 4,
      subPositions: [],
    },
    {
      name: "Winger",
      abbreviation: "W",
      sportId: 4,
      subPositions: [
        {
          name: "Left Winger",
          abbreviation: "LW",
          positionId: 23,
        },
        {
          name: "Right Winger",
          abbreviation: "RW",
          positionId: 23,
        },
      ],
    },
    {
      name: "Quarterback",
      abbreviation: "QB",
      sportId: 5,
      subPositions: [],
    },
    {
      name: "Running Back",
      abbreviation: "RB",
      sportId: 5,
      subPositions: [
        {
          name: "Halfback",
          abbreviation: "HB",
          positionId: 25,
        },
        {
          name: "Fullback",
          abbreviation: "FB",
          positionId: 25,
        },
      ],
    },
    {
      name: "Wide Receiver",
      abbreviation: "WR",
      sportId: 5,
      subPositions: [],
    },
    {
      name: "Tight End",
      abbreviation: "TE",
      sportId: 5,
      subPositions: [],
    },
    {
      name: "Offensive Lineman",
      abbreviation: "OL",
      sportId: 5,
      subPositions: [
        {
          name: "Left Tackle",
          abbreviation: "LT",
          positionId: 28,
        },
        {
          name: "Right Tackle",
          abbreviation: "RT",
          positionId: 28,
        },
        {
          name: "Left Guard",
          abbreviation: "LG",
          positionId: 28,
        },
        {
          name: "Right Guard",
          abbreviation: "RG",
          positionId: 28,
        },
        {
          name: "Center",
          abbreviation: "C",
          positionId: 28,
        },
      ],
    },
    {
      name: "Defensive Lineman",
      abbreviation: "DL",
      sportId: 5,
      subPositions: [
        {
          name: "Defensive Tackle",
          abbreviation: "DT",
          positionId: 29,
        },
        {
          name: "Defensive End",
          abbreviation: "DE",
          positionId: 29,
        },
      ],
    },
    {
      name: "Linebacker",
      abbreviation: "LB",
      sportId: 5,
      subPositions: [
        {
          name: "Middle Linebacker",
          abbreviation: "MLB",
          positionId: 30,
        },
        {
          name: "Outside Linebacker",
          abbreviation: "OLB",
          positionId: 30,
        },
      ],
    },
    {
      name: "Cornerback",
      abbreviation: "CB",
      sportId: 5,
      subPositions: [],
    },
    {
      name: "Safety",
      abbreviation: "S",
      sportId: 5,
      subPositions: [
        {
          name: "Free Safety",
          abbreviation: "FS",
          positionId: 32,
        },
        {
          name: "Strong Safety",
          abbreviation: "SS",
          positionId: 32,
        },
      ],
    },
    {
      name: "Kicker",
      abbreviation: "K",
      sportId: 5,
      subPositions: [],
    },
    {
      name: "Punter",
      abbreviation: "P",
      sportId: 5,
      subPositions: [],
    },
    {
      name: "Outside Hitter",
      abbreviation: "OH",
      sportId: 6,
      subPositions: [],
    },
    {
      name: "Opposite Hitter",
      abbreviation: "OPP",
      sportId: 6,
      subPositions: [],
    },
    {
      name: "Middle Blocker",
      abbreviation: "MB",
      sportId: 6,
      subPositions: [],
    },
    {
      name: "Setter",
      abbreviation: "S",
      sportId: 6,
      subPositions: [],
    },
    {
      name: "Libero",
      abbreviation: "L",
      sportId: 6,
      subPositions: [],
    },
    {
      name: "Defensive Specialist",
      abbreviation: "DS",
      sportId: 6,
      subPositions: [],
    },
  ];

  for (let position of corePositions) {
    const createdPosition = await prisma.position.create({
      data: {
        name: position.name,
        abbreviation: position.abbreviation,
        sportId: position.sportId,
      },
    });

    if (position.subPositions && position.subPositions.length > 0) {
      for (let subPosition of position.subPositions) {
        await prisma.subPosition.create({
          data: {
            name: subPosition.name,
            abbreviation: subPosition.abbreviation,
            positionId: createdPosition.id,
          },
        });
      }
    }
  }

  const statTypes = [
    // Soccer
    {
      name: "goals",
      abbreviation: "G",
      description: "Goals scored",
      sportId: 1,
    },
    {
      name: "assists",
      abbreviation: "A",
      description: "Assists",
      sportId: 1,
    },
    {
      name: "saves",
      abbreviation: "SV",
      description: "Saves made",
      sportId: 1,
    },
    {
      name: "fouls",
      abbreviation: "F",
      description: "Fouls committed",
      sportId: 1,
    },
    {
      name: "yellow cards",
      abbreviation: "YC",
      description: "Yellow cards received",
      sportId: 1,
    },
    {
      name: "red cards",
      abbreviation: "RC",
      description: "Red cards received",
      sportId: 1,
    },

    // Basketball
    {
      name: "points",
      abbreviation: "PTS",
      description: "Points scored",
      sportId: 2,
    },
    {
      name: "rebounds",
      abbreviation: "REB",
      description: "Rebounds",
      sportId: 2,
    },
    {
      name: "assists",
      abbreviation: "AST",
      description: "Assists",
      sportId: 2,
    },
    {
      name: "steals",
      abbreviation: "STL",
      description: "Steals",
      sportId: 2,
    },
    {
      name: "blocks",
      abbreviation: "BLK",
      description: "Blocks",
      sportId: 2,
    },
    {
      name: "turnovers",
      abbreviation: "TO",
      description: "Turnovers",
      sportId: 2,
    },

    // Baseball
    {
      name: "hits",
      abbreviation: "H",
      description: "Hits",
      sportId: 3,
    },
    {
      name: "runs",
      abbreviation: "R",
      description: "Runs scored",
      sportId: 3,
    },
    {
      name: "strikeouts",
      abbreviation: "K",
      description: "Strikeouts",
      sportId: 3,
    },
    {
      name: "home runs",
      abbreviation: "HR",
      description: "Home runs",
      sportId: 3,
    },
    {
      name: "batting average",
      abbreviation: "AVG",
      description: "Batting average",
      sportId: 3,
    },

    // Hockey
    {
      name: "goals",
      abbreviation: "G",
      description: "Goals scored",
      sportId: 4,
    },
    {
      name: "assists",
      abbreviation: "A",
      description: "Assists",
      sportId: 4,
    },
    {
      name: "penalty minutes",
      abbreviation: "PIM",
      description: "Penalty minutes",
      sportId: 4,
    },
    {
      name: "shots on goal",
      abbreviation: "SOG",
      description: "Shots on goal",
      sportId: 4,
    },
    {
      name: "plus minus",
      abbreviation: "+/-",
      description: "Plus/Minus rating",
      sportId: 4,
    },

    // Football
    {
      name: "passing yards",
      abbreviation: "PY",
      description: "Passing yards",
      sportId: 5,
    },
    {
      name: "rushing yards",
      abbreviation: "RY",
      description: "Rushing yards",
      sportId: 5,
    },
    {
      name: "receiving yards",
      abbreviation: "RYD",
      description: "Receiving yards",
      sportId: 5,
    },
    {
      name: "touchdowns",
      abbreviation: "TD",
      description: "Touchdowns",
      sportId: 5,
    },
    {
      name: "interceptions",
      abbreviation: "INT",
      description: "Interceptions thrown",
      sportId: 5,
    },

    // Volleyball
    {
      name: "kills",
      abbreviation: "K",
      description: "Kills",
      sportId: 6,
    },
    {
      name: "blocks",
      abbreviation: "BLK",
      description: "Blocks",
      sportId: 6,
    },
    {
      name: "assists",
      abbreviation: "AST",
      description: "Assists",
      sportId: 6,
    },
    {
      name: "digs",
      abbreviation: "D",
      description: "Digs",
      sportId: 6,
    },
    {
      name: "aces",
      abbreviation: "ACE",
      description: "Aces",
      sportId: 6,
    },
  ];

  for (const statType of statTypes) {
    await prisma.statType.create({ data: statType });
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
