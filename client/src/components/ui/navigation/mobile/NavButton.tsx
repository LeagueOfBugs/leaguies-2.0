import { Navigate } from "react-router-dom";
import { Button } from "../../button";

interface NavButtonProps {
  toScreen: string;
  icon: React.ReactNode;
  title: string;
}

const NavButton = ({ toScreen, icon, title }: NavButtonProps) => {
  const handleOnClick = () => {
    Navigate({ to: toScreen });
  };

  return (
    <Button variant="ghost" className="h-16" onClick={handleOnClick}>
      <div className="flex flex-col items-center justify-center">
        <span className="mt-1">{title}</span> {icon}
      </div>
    </Button>
  );
};

export default NavButton;
