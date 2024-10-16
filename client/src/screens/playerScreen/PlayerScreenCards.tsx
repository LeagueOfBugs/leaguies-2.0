import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import DisplayCard from "../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../components/SubScreenLayout";

const PlayerScreenCards = () => {
  const player = useSelector(selectPlayer);

  return (
    <SubScreenLayout>
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
        {player?.sports?.map((sport) => {
          return (
            <div key={sport}>
              <h3>{sport} </h3>
              <ul>
                {player?.positions?.map((position) => {
                  if (position.sport === sport) {
                    return (
                      <li key={position.name}>
                        {position.name} ({position.abbreviation}):{" "}
                        {position.subPosition?.name}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          );
        })}
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default PlayerScreenCards;
