import { useSelector } from "react-redux";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { selectPlayer } from "../../redux/selectors/playerSelectors";

const PlayerHeading = () => {
  const player = useSelector(selectPlayer);
  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2>{player.name}</h2>
    </div>
  );
};

export default PlayerHeading;
