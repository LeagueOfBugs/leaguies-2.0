import DisplayCard from "../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../components/SubScreenLayout";

const Record = () => {
  return (
    <SubScreenLayout>
      <DisplayCard header={"Record"}>Record Information</DisplayCard>
      <DisplayCard header={"Seasons"}>Season Information</DisplayCard>
      <DisplayCard header={"Showcase"}>Showcase Information</DisplayCard>
    </SubScreenLayout>
  );
};

export default Record;
