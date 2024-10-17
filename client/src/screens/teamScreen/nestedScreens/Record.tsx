import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useTeam } from "../../../hooks/useTeam";

const Record = () => {
  const { team } = useTeam();

  return (
    <SubScreenLayout>
      <DisplayCard header={"Record"}>Record Information</DisplayCard>
      <DisplayCard header={"Seasons"}>
        <ul>
          {team?.seasons?.map((season) => {
            return (
              <li key={season.id}>
                {season.name}: {season.wins}/{season.losses}/{season.draws}
              </li>
            );
          })}
        </ul>
      </DisplayCard>
      <DisplayCard header={"Showcase"}>Showcase Information</DisplayCard>
    </SubScreenLayout>
  );
};

export default Record;
