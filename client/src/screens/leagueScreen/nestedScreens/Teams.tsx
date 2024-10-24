import { Plus } from "lucide-react";
import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";
import fetchNearbyTeams from "../../../service/fetchNearbyTeams";
import useSWR from "swr";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import useInvite from "../../../hooks/useInvite";

const Teams = () => {
  const { league } = useLeague();
  const { data: teams, error } = useSWR("nearbyTeams", fetchNearbyTeams);
  const navigate = useNavigate();
  const { createInvite } = useInvite();

  if (error && league) return <div>Failed to load</div>;
  if (!teams) return <div>Loading...</div>;
  if (!league) return <div>No league found</div>;
  let leagueTeamLimit: number;

  if (league?.teamLimit !== undefined && league.teams !== undefined) {
    leagueTeamLimit = league?.teamLimit - league?.teams?.length;
  } else {
    leagueTeamLimit = 5;
  }

  const openLeagueSpots = [];

  for (let i = 0; i < leagueTeamLimit; i++) {
    openLeagueSpots.push(
      <div className="flex flex-row space-x-2">
        <Plus />
        <span>Open</span>
      </div>
    );
  }

  const handleTeamInvite = async (
    e: React.MouseEvent<HTMLButtonElement>,
    teamId: number
  ) => {
    e.stopPropagation();
    const inviterId = league.id;
    const inviterType = "league";
    const inviteeId = teamId;
    const inviteeType = "team";
    const response = await createInvite(
      inviterId,
      inviterType,
      inviteeId,
      inviteeType
    );

    console.log(response);
  };

  return (
    <SubScreenLayout>
      <DisplayCard header={"Registered Teams"}>
        <ul>
          {league?.teams?.map((team) => {
            return <li key={team.id}>{team.name}</li>;
          })}
        </ul>
        {...openLeagueSpots}
      </DisplayCard>

      <DisplayCard header={"Recommended Teams"}>
        <ul>
          {teams ? (
            teams.map((team: Team) => {
              return (
                <li
                  onClick={() => navigate(`/team/${team.id}`)}
                  key={team.id}
                  className="flex flex-row justify-between items-center cursor-pointer"
                >
                  {team.name}
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={(e) => handleTeamInvite(e, team.id)}
                  >
                    Invite
                  </Button>
                </li>
              );
            })
          ) : (
            <span>No nearby teams</span>
          )}
        </ul>
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default Teams;
