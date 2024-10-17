import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import DisplayCard from "../../components/displayCard/DisplayCard";

const PlayerScreenCards = () => {
  const player: Player = useSelector(selectPlayer);

  return (
    <section className="flex flex-col space-y-2 no-scrollbar">
      <DisplayCard header={"Teams"}>
        <ul>
          {player?.teams?.map((team) => {
            return (
              <li
                key={team.id}
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

      {/* FIX TYPE ISSUES HERE */}
      <DisplayCard header={"Stats"}>
        {player?.stats?.map((stat) => {
          const [sport] = Object.keys(stat);
          console.log(sport);
          return (
            <ul key={sport}>
              <span>{sport}</span>
              {stat[sport].map((st) => {
                return (
                  <li key={st.statName}>
                    {st.statName}: {st.value ?? 0}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </DisplayCard>

      <DisplayCard header={"awards"}>
        {player?.awards?.length ? (
          <ul>
            {player.awards.map((award) => {
              return <li key={award}>{award}</li>;
            })}
          </ul>
        ) : (
          <span>No awards</span>
        )}
      </DisplayCard>
    </section>
  );
};

export default PlayerScreenCards;
