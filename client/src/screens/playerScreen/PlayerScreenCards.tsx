import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import DisplayCard from "../../components/displayCard/DisplayCard";

const PlayerScreenCards = () => {
  const player = useSelector(selectPlayer);
  console.log(player);
  return (
    <section className="flex flex-col space-y-2">
      <DisplayCard header={"Teams"}>
        <ul>
          {player?.teams?.map((team, index) => {
            return (
              <li
                key={team.name + index}
                className="flex flex-row items-center space-x-2 py-2"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {team.name.toUpperCase().slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span>{team.name}</span>
              </li>
            );
          })}
        </ul>
      </DisplayCard>

      <DisplayCard header={"Positions"}>
        <ul>
          {player.positions.map((position) => {
            return (
              <li key={position.position}>
                {position.sport}: {position.position}
              </li>
            );
          })}
        </ul>
      </DisplayCard>
      <DisplayCard header={"Stats"}>Player Stats</DisplayCard>
      <DisplayCard header={"awards"}>Player awards</DisplayCard>
    </section>
  );
};

export default PlayerScreenCards;
