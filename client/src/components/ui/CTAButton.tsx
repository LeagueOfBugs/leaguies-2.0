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
    <div className="flex flex-col space-y-5">
      {ctas.map((cta) => (
        <Button
          key={cta.label}
          onClick={cta.onClick}
          variant="default"
          className="w-40 h-7 rounded-full"
        >
          {cta.label}
        </Button>
      ))}
    </div>
  );
};

export default CTAButton;
