import { Button } from "./ui/button";

interface FabProps {
  children: React.ReactNode;
}

export const Fab = ({ children }: FabProps) => {
  return <Button className="w-16 h-16 rounded-full">{children}</Button>;
};
