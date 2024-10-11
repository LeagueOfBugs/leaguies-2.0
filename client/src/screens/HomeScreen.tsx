import DisplayCard from "../components/displayCard/DisplayCard";
import SubScreenLayout from "../components/SubScreenLayout";

const HomeScreen = () => {
  return (
    <SubScreenLayout>
      <DisplayCard header={"Leagues Nearby"}>
        Nearby League Information
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default HomeScreen;
