import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { MoveRight } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { selectPlayer } from "../../redux/selectors/userSelectors";

const PlayerScreenCards = () => {
  const player = useSelector(selectPlayer);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Teams</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <ul>
            {player?.teams?.map((team, index) => {
              return (
                <li
                  key={team.name + index}
                  className="flex flex-row items-center space-x-2 py-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {team.name.toUpperCase().slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{team.name}</span>
                </li>
              );
            })}
          </ul>
        </CardContent>
        <Separator className="mb-5" />
        <CardFooter
          className="justify-end space-x-2 cursor-pointer"
          onClick={() => console.log("see more")}
        >
          <span>See player history</span>
          <MoveRight />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Position</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          {player?.sports?.map((sport) => {
            return (
              <div key={sport}>
                <h3>{sport} </h3>
                <ul>
                  {player?.positions?.map((position) => {
                    if (position.sport === sport) {
                      return (
                        <li key={position.name}>
                          {position.name} ({position.abbreviation}):{" "}
                          {position.subPosition?.name}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerScreenCards;
