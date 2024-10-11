import EmptyStateTemplate from "../../components/EmptyStateTemplate";
import CTAButton from "../../components/CTAButton";

const emptyLeagueContent = {
  title: "No Leagues Found!",
  description: "It looks like you're not a member of any leagues.",
};

const ctaButtons = [
  {
    label: "Create a League",
    onClick: () => {},
  },
  {
    label: "Join a League",
    onClick: () => {},
  },
];

const EmptyLeagueState = () => {
  return (
    <EmptyStateTemplate
      title={emptyLeagueContent.title}
      description={emptyLeagueContent.description}
    >
      <CTAButton ctas={ctaButtons} />
    </EmptyStateTemplate>
  );
};

export default EmptyLeagueState;
