import DisplayCard from "../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../components/SubScreenLayout";

const Season = () => {
  return (
    <SubScreenLayout>
      <DisplayCard header="Manager(s)">Manager Information</DisplayCard>

      <DisplayCard header="Season Details">Season Information</DisplayCard>
    </SubScreenLayout>
  );
};

export default Season;
