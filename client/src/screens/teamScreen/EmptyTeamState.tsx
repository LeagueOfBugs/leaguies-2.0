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

  const emptyTeamContent = {
    title: "No Teams Found!",
    description: "It looks like you're not a member of any teams.",
  };

  return (
    <EmptyStateTemplate
      title={emptyTeamContent.title}
      description={emptyTeamContent.description}
    >
      <CTAButton ctas={ctaButtons} />
    </EmptyStateTemplate>
  );
};

export default EmptyTeamState;
