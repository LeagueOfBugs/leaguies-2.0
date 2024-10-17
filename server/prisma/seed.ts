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

  const seedSeasons = [
    {
      name: "season 2024",
      active: true,
      leagueId: 1,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31"),
    },
    {
      name: "season 2023",
      active: false,
      leagueId: 1,
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-12-31"),
    },
    {
      name: "season 2024",
      active: true,
      leagueId: 2,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31"),
    },
    {
      name: "season 2023",
      active: false,
      leagueId: 2,
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-12-31"),
    },
    {
      name: "season 2024",
      active: true,
      leagueId: 3,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31"),
    },
    {
      name: "season 2023",
      active: false,
      leagueId: 3,
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-12-31"),
    },
  ];

  const seedLeagues = [
    {
      name: "English Premier League",
      sportId: 1,
      teamLimit: 20,
      active: true,
    },
    {
      name: "La Liga",
      sportId: 1,
      teamLimit: 24,
      active: true,
    },
    {
      name: "Major League Soccer",
      sportId: 1,
      teamLimit: 29,
      active: true,
    },
  ];

  const seedTeams = [
    { name: "Manchester City", leagueId: 1 },
    { name: "Arsenal", leagueId: 1 },
    { name: "Liverpool", leagueId: 1 },
    { name: "Manchester United", leagueId: 1 },
    { name: "Chelsea", leagueId: 1 },
    { name: "FC Barcelona", leagueId: 2 },
    { name: "Real Madrid", leagueId: 2 },
    { name: "Atlético Madrid", leagueId: 2 },
    { name: "Sevilla FC", leagueId: 2 },
    { name: "Real Sociedad", leagueId: 2 },
    { name: "Inter Miami CF", leagueId: 3 },
    { name: "LAFC", leagueId: 3 },
    { name: "Atlanta United FC", leagueId: 3 },
    { name: "Seattle Sounders FC", leagueId: 3 },
    { name: "Nashville SC", leagueId: 3 },
    { name: "New York City FC", leagueId: 3 },
    { name: "FC Cincinnati", leagueId: 3 },
    { name: "Philadelphia Union", leagueId: 3 },
    { name: "St. Louis City SC", leagueId: 3 },
    { name: "Portland Timbers", leagueId: 3 },
  ];

  const seedPlayers = [
    { name: "Erling Haaland", teamId: 1, leagueId: 1, sportId: 1 },
    { name: "Bukayo Saka", teamId: 1, leagueId: 1, sportId: 1 },
    { name: "Mohamed Salah", teamId: 1, leagueId: 1, sportId: 1 },
    { name: "Robert Lewandowski", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Antoine Griezmann", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Vinícius Júnior", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Pedri", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Federico Valverde", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "João Félix", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Iago Aspas", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Rodrygo", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Youssef En-Nesyri", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Mikel Oyarzabal", teamId: 2, leagueId: 2, sportId: 1 },
    { name: "Lionel Messi", teamId: 11, leagueId: 3, sportId: 1 },
    { name: "Hany Mukhtar", teamId: 3, leagueId: 3, sportId: 1 },
    { name: "Josef Martínez", teamId: 3, leagueId: 3, sportId: 1 },
    { name: "Thiago Almada", teamId: 3, leagueId: 3, sportId: 1 },
    { name: "Denis Bouanga", teamId: 3, leagueId: 3, sportId: 1 },
    { name: "Cristian Espinoza", teamId: 3, leagueId: 3, sportId: 1 },
    { name: "Carlos Vela", teamId: null, sportId: 1 },
    { name: "Jordan Morris", teamId: null, sportId: 1 },
    { name: "Luciano Acosta", teamId: null, sportId: 1 },
    { name: "João Klauss", teamId: null, sportId: 1 },
  ];

  for (const league of seedLeagues) {
    const createdLeague = await prisma.league.create({
      data: league,
    });
  }

  for (const season of seedSeasons) {
    await prisma.season.create({
      data: season,
    });
  }

  for (const team of seedTeams) {
    const createdTeam = await prisma.team.create({
      data: team,
    });
  }

  for (const player of seedPlayers) {
    const createdPlayer = await prisma.player.create({
      data: { name: player.name },
    });

    if (player.teamId !== null) {
      const relationship = await prisma.playerTeam.create({
        data: {
          player: { connect: { id: createdPlayer.id } },
          team: { connect: { id: player.teamId } },
        },
      });

      console.log(`Relationship created: ${relationship}`);
    }

    if (player.leagueId) {
      await prisma.playerLeague.create({
        data: {
          player: { connect: { id: createdPlayer.id } },
          league: { connect: { id: player.leagueId } },
        },
      });
    }

    await prisma.playerSport.create({
      data: {
        player: { connect: { id: createdPlayer.id } },
        sport: { connect: { id: player.sportId } },
      },
    });
  }

  const referees = [
    {
      name: "John Doe",
    },
    {
      name: "Jimmy Smith",
    },
    {
      name: "Steve Jobs",
    },
  ];

  for (const referee of referees) {
    await prisma.referee.create({
      data: referee,
    });
  }

  const leagueStaff = [
    {
      name: "Javier Tebas Medrano",
      role: "Chairman",
      leagueId: 1,
    },
    {
      name: "Alison Brittain",
      role: "Chairman",
      leagueId: 2,
    },
    {
      name: "Don Garber",
      role: "Commissioner",
      leagueId: 3,
    },
  ];

  for (const staff of leagueStaff) {
    const staffCreated = await prisma.staff.create({
      data: { name: staff.name, role: staff.role },
    });

    await prisma.leagueStaff.create({
      data: {
        staff: { connect: { id: staffCreated.id } },
        league: { connect: { id: staff.leagueId } },
        role: staff.role,
      },
    });
  }

  const teamStaff = [
    {
      name: "Gerardo 'Tata' Martino",
      role: "Head Coach",
      teamId: 11,
    },
    {
      name: "Jorge Theiler",
      role: "Assistant Coach",
      teamId: 11,
    },
  ];

  for (const staff of teamStaff) {
    const staffCreated = await prisma.staff.create({
      data: { name: staff.name, role: staff.role },
    });

    await prisma.teamStaff.create({
      data: {
        staff: { connect: { id: staffCreated.id } },
        team: { connect: { id: staff.teamId } },
        role: staff.role,
      },
    });
  }

  const playerAwards = [
    {
      name: "MVP",
      playerId: 14,
    },
    {
      name: "Ballon d'Or",
      playerId: 14,
    },
    {
      name: "FIFA World Player of the Year",
      playerId: 14,
    },
  ];

  for (const award of playerAwards) {
    await prisma.award.create({
      data: award,
    });
  }

  const getSoccerStats = await prisma.statType.findMany({
    where: {
      sportId: 1,
    },
  });

  for (const stat of getSoccerStats) {
    await prisma.playerStats.create({
      data: {
        player: { connect: { id: 14 } },
        statType: { connect: { id: stat.id } },
      },
    });
  }

  await prisma.playerPosition.create({
    data: {
      position: { connect: { id: 4 } },
      player: { connect: { id: 14 } },
      subPosition: { connect: { id: 4 } },
    },
  });

  await prisma.teamSeason.create({
    data: {
      team: { connect: { id: 11 } },
      season: { connect: { id: 1 } },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
