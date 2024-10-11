import { Avatar, AvatarFallback } from "./avatar";

const Badge = () => {
  return (
    <Avatar className="h-24 w-24">
      <AvatarFallback>badge</AvatarFallback>
    </Avatar>
  );
};

export default Badge;
