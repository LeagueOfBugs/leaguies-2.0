import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Button } from "../../button";

interface NavButtonProps {
  toScreen: string;
  icon: React.ReactNode;
  title: string;
}

const NavButton = ({ toScreen, icon, title }: NavButtonProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(toScreen);
  };

  return (
    <Button
      variant="ghost"
      className="h-16 bg-customGray"
      onClick={handleOnClick}
    >
      <div className="flex flex-col items-center justify-center">
        {icon}
        <span className="mt-1">{title}</span>
      </div>
    </Button>
  );
};

export default NavButton;
