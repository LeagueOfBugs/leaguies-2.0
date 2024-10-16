import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";

const Schedule = () => {
  const league = useLeague();
  console.log('league', league)
  return (
    <SubScreenLayout>
      <DisplayCard header="Schedule">Schedule Information</DisplayCard>
    </SubScreenLayout>
  );
};
export default Schedule;
