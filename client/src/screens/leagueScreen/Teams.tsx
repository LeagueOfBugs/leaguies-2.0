import DisplayCard from "../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../components/SubScreenLayout";

const Teams = () => {
  return (
    <SubScreenLayout>
      <DisplayCard header={"Registered Teams"}>team information</DisplayCard>

      <DisplayCard header={"Recommended Teams"}>Recommended Teams</DisplayCard>
    </SubScreenLayout>
  );
};

export default Teams;
