import { Button } from "../../components/ui/button";

const TeamCTA = () => {
  return (
    <div className=" flex-col space-y-5">
      <Button variant="default" className="w-full rounded-full">
        Create Team
      </Button>
      <Button variant="default" className="w-full rounded-full">
        Join Team
      </Button>
    </div>
  );
};
export default TeamCTA;
