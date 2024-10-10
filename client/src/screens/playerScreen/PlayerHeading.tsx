import { useSelector } from "react-redux";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { selectUser } from "../../redux/selectors/userSelectors";

const PlayerHeading = () => {
  const user = useSelector(selectUser);
  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2>{user.name}</h2>
    </div>
  );
};

export default PlayerHeading;
