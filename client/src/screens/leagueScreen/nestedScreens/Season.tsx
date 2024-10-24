import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";

const Season = () => {
  const { league } = useLeague();
  const season = league?.seasons?.find((season) => season?.active == true);

  return (
    <SubScreenLayout>
      <DisplayCard header="Manager(s)">Manager Information</DisplayCard>

      <DisplayCard header="Season Details">
        <div className="flex flex-col space-y-2">
          <span>Season: {season?.name}</span>
          <span>Start: {season?.startDate?.toLocaleString()}</span>
          <span>End: {season?.endDate?.toLocaleString()}</span>
          <span>Trophy: {season?.trophy}</span>
        </div>
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default Season;
