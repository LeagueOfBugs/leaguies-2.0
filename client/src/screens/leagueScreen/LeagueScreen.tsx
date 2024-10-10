import NavLayout from "../../components/ui/NavLayout";
import Layout from "../Layout";

const LeagueScreen = () => {
  const leagueScreenNavLinks = [
    {
      to: "rules",
      label: "Rules",
    },
    {
      to: "season",
      label: "Season",
    },
    {
      to: "teams",
      label: "Teams",
    },
    {
      to: "schedule",
      label: "Schedule",
    },
  ];
  
  return (
    <Layout>
      <div>League Screen</div>
      <NavLayout navLinks={leagueScreenNavLinks} />
    </Layout>
  );
};

export default LeagueScreen;
