import DisplayCard from "../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../components/SubScreenLayout";

const Roster = () => {
  return (
    <SubScreenLayout>
      <DisplayCard header={"Roster"}>Roster Information</DisplayCard>
      <DisplayCard header={"Team Staff"}>Staff Information</DisplayCard>
      <DisplayCard header={"Players"}>Player Information</DisplayCard>
      <DisplayCard header={"Free Agents"}>Free Agent Information</DisplayCard>
    </SubScreenLayout>
  );
};

export default Roster;
