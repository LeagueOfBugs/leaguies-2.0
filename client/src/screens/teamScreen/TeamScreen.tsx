import Layout from "../Layout";
import NavLayout from "../../components/ui/NavLayout";

export const Record = () => <div>Record Component</div>;
export const Roster = () => <div>Roster Component</div>;
export const Activity = () => <div>Activity Component</div>;

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
