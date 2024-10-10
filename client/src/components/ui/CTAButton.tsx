import { Button } from "./button";

interface CTAButton {
  label: string;
  onClick: () => void;
}

interface CTAButtonProps {
  ctas: CTAButton[];
}
const CTAButton = ({ ctas }: CTAButtonProps) => {
  return (
    <div className=" flex-col space-y-5">
      {ctas.map((cta) => (
        <Button variant="default" className="w-full rounded-full">
          {cta.label}
        </Button>
      ))}
    </div>
  );
};

export default CTAButton;
