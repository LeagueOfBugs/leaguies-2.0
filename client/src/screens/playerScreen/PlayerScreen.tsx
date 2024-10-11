import DisplayCard from "./PlayerScreenCards";
import { Separator } from "../../components/ui/separator";
import PlayerHeading from "./PlayerHeading";

const PlayerScreen = () => {
  return (
    <>
      <PlayerHeading />
      <Separator className="my-5" />
      <DisplayCard />
    </>
  );
};

export default PlayerScreen;
