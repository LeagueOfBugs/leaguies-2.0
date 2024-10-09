import { Separator } from "../../separator";
import NavButton from "./NavButton";
import { House, UsersRound, Trophy, UserRound } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0">
      <Separator />
      <div className="flex justify-around items-center h-16">
        <NavButton toScreen="/" icon={<House />} title="Home" />
        <NavButton toScreen="/player" icon={<UserRound />} title="Player" />
        <NavButton toScreen="/league" icon={<Trophy />} title="League" />
        <NavButton toScreen="/team" icon={<UsersRound />} title="Team" />
      </div>
    </nav>
  );
};

export default MobileNav;
