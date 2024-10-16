import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";

const Season = () => {
  const league = useLeague();
  console.log('league', league)
  return (
    <SubScreenLayout>
      <DisplayCard header="Manager(s)">Manager Information</DisplayCard>

      <DisplayCard header="Season Details">Season Information</DisplayCard>
    </SubScreenLayout>
  );
};

export default Season;
