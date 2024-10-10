// import { useSelector } from "react-redux";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../../components/ui/card";
// import { selectUser } from "../../redux/selectors/userSelectors";
// import { MoveRight } from "lucide-react";
// import { Separator } from "../../components/ui/separator";

const PlayerScreenCards = () => {
  // const user = useSelector(selectUser);
  // const teams = user?.teams || [];
  // if (!teams.length) {
  //   return null;
  // }
  // return (
  //   <div className="space-y-4">
  //     <Card>
  //       <CardHeader>
  //         <CardTitle>Teams</CardTitle>
  //         <Separator />
  //       </CardHeader>
  //       <CardContent>
  //         {teams.map((teamObj: Team) => (
  //           <div key={teamObj.team.id}>{teamObj.team.name}</div>
  //         ))}
  //       </CardContent>
  //       <Separator className="mb-5" />
  //       <CardFooter
  //         className="justify-end space-x-2 cursor-pointer"
  //         onClick={() => console.log("see more")}
  //       >
  //         <span>See player history</span>
  //         <MoveRight />
  //       </CardFooter>
  //     </Card>
  //     <Card>
  //       <CardHeader>
  //         <CardTitle>Position</CardTitle>
  //         <Separator />
  //       </CardHeader>
  //       <CardContent>
  //         {teams.map((teamObj: Team) => (
  //           <div key={teamObj.team.id}>{teamObj.team.name}</div>
  //         ))}
  //       </CardContent>
  //     </Card>
  //   </div>
  // );
};

export default PlayerScreenCards;
