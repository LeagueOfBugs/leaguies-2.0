import { Separator } from "../separator";
import { AlignJustify } from "lucide-react";

const Header = () => {
  return (
    <header className="text-primary-foreground absolute top-0 left-0 w-full ">
      <div className="flex justify-between items-center h-10 px-3">
        <h1 className="text-xl font-bold">LEAGUIES</h1>
        
        {/* make hamburger button own component */}
        <AlignJustify />
      </div>
      <Separator />
    </header>
  );
};

export default Header;
