import CTAButton from "../../components/ui/CTAButton";
import EmptyStateTemplate from "../../components/ui/EmptyStateTemplate";

const EmptyTeamState = () => {
  const ctaButtons = [
    {
      label: "Create Team",
      onClick: () => {},
    },
    {
      label: "Join Team",
      onClick: () => {},
    },
  ];

  const EmptyTeamContent = {
    title: "No Teams Found!",
    description: "It looks like you're not a member of any teams.",
  };

  return (
    <EmptyStateTemplate
      title={EmptyTeamContent.title}
      description={EmptyTeamContent.description}
    >
      <CTAButton ctas={ctaButtons} />
    </EmptyStateTemplate>
  );
};

export default EmptyTeamState;
