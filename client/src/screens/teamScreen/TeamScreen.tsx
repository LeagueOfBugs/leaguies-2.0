import NavLayout from "../../components/ui/NavLayout";
import Badge from "../../components/ui/Badge";
import CTAButton from "../../components/ui/CTAButton";

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

  const teamCTA = [
    {
      label: "REQUEST TO JOIN",
      onClick: () => {},
    },
    {
      label: "FOLLOW TEAM",
      onClick: () => {},
    },
  ];

  return (
    <div className="flex flex-col items-center w-svw space-y-5">
      <div className="pt-5">
        <Badge />
      </div>
      <div className="max-w-52">
        <CTAButton ctas={teamCTA} />
      </div>
      <NavLayout navLinks={teamScreenNavLinks} />
    </div>
  );
};

export default TeamScreen;
