import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { ShieldHalf } from "lucide-react";
interface DisplayCardProps {
  header: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
const DisplayCard: React.FC<DisplayCardProps> = ({
  children,
  header,
  description,
  footer,
}) => {
  return (
    <article>
      <Card className="rounded-[5px]">
        {header && (
          <CardHeader className="flex flex-col m-0 px-2 py-2 space-y-0 space-x-2">
            <div className="flex flex-row space-x-2 items-center">
              <ShieldHalf className="w-6 h-6" />
              <span className="text-2xl">{header}</span>
            </div>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent>{children}</CardContent>
        {footer && <CardFooter className="px-2 py-2 m-0">{footer}</CardFooter>}
      </Card>
    </article>
  );
};

export default DisplayCard;
