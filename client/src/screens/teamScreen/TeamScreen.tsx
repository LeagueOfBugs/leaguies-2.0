import Layout from "../Layout";
import NavLayout from "../../components/ui/NavLayout";

const TeamScreen = () => {
  const teamScreenNavLinks = [
    {
      to: "record",
      label: "Record",
    },
    {
      to: "roster",
      label: "Roster",
    },
    {
      to: "activity",
      label: "Activity",
    },
  ];

  return (
    <Layout>
      <div>Team Screen</div>
      <NavLayout navLinks={teamScreenNavLinks} />
    </Layout>
  );
};

export default TeamScreen;
