import useSWR from "swr";
import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useTeam } from "../../../hooks/useTeam";
import fetchFreeAgents from "../../../service/fetchFreeAgents";
import { Plus } from "lucide-react";

const Roster = () => {

  const { team } = useTeam();

  const { data: players, error } = useSWR("free-agents", fetchFreeAgents);

  if (error) return <div>Failed to load</div>;
  if (!players) return <div>Loading...</div>;

  const playerLimit = team?.playerLimit - (team?.players?.length ?? 0);
  const openRosterSpots = [];

  for (let i = 0; i < playerLimit; i++) {
    openRosterSpots.push(
      <div className="flex flex-row space-x-2">
        <Plus />
        <span>Invite a player</span>
      </div>
    );
  }

  return (
    <SubScreenLayout>
      <DisplayCard header={"Team Staff"}>
        <ul>
          {team?.staff?.map((staff) => {
            return (
              <li key={staff.id}>
                <span>
                  {staff.role}: {staff.name}
                </span>
              </li>
            );
          })}
        </ul>
      </DisplayCard>
      <DisplayCard header={"Players"}>
        <ul>
          {team?.players?.map((player) => {
            return (
              <li key={player.id}>
                <span>{player.name} - </span>
              </li>
            );
          })}
          {...openRosterSpots}
        </ul>
      </DisplayCard>

      <DisplayCard header={"Free Agents"}>
        <ul>
          {players.map((player) => {
            return (
              <li key={player.id}>
                <span>{player.name}</span>
              </li>
            );
          })}
        </ul>
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default Roster;
