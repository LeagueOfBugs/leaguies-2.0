import { Check, X } from "lucide-react";

interface ListItemProps {
  children: React.ReactNode;
  showAcceptDecline?: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
}

export const ListItem = ({
  children,
  showAcceptDecline,
  onAccept,
  onDecline,
}: ListItemProps) => {
  return (
    <div className="flex flex-row space-x-2 justify-between">
      <li>{children}</li>
      {showAcceptDecline && (
        <div className="flex flex-row space-x-2">
          <X color="red" onClick={onDecline} className="cursor-pointer" />
          <Check color="green" onClick={onAccept} className="cursor-pointer" />
        </div>
      )}
    </div>
  );
};
