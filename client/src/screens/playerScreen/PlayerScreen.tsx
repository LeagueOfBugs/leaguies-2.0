import DisplayCard from "./PlayerScreenCards";
import { Separator } from "../../components/ui/separator";
import Layout from "../Layout";
import PlayerHeading from "./PlayerHeading";

const PlayerScreen = () => {
  return (
    <Layout>
      <PlayerHeading />
      <Separator className="my-5" />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
    </Layout>
  );
};

export default PlayerScreen;
