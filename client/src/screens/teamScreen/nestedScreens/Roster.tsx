import useSWR from "swr";
import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useTeam } from "../../../hooks/useTeam";
import fetchFreeAgents from "../../../service/fetchFreeAgents";

const Roster = () => {
  // FIX TEAM TYPES
  const { team } = useTeam();

  const { data: players, error } = useSWR("free-agents", fetchFreeAgents);

  if (error) return <div>Failed to load</div>;
  if (!players) return <div>Loading...</div>;

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
                <span>
                  {player.name} -{" "}
                  {player.positions.map((pos) => {
                    return (
                      <span key={pos}>
                        {pos.position}: {pos.subPositions.name}
                      </span>
                    );
                  })}
                </span>
              </li>
            );
          })}
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
