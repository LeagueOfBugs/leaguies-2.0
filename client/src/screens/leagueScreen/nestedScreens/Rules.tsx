import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";

const Rules = () => {
  const league = useLeague();
  console.log("league", league);
  return (
    <SubScreenLayout>
      <DisplayCard header={"Rules"}>Rules</DisplayCard>
    </SubScreenLayout>
  );
};

export default Rules;
