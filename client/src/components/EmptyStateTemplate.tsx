import { Avatar, AvatarFallback } from "./ui/avatar";

interface EmptyStateTemplateProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const EmptyStateTemplate: React.FC<EmptyStateTemplateProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="flex-col items-center h-svh w-svw pt-5 px-5 space-y-20">
      <div className="flex flex-col items-center space-y-10">
        <Avatar className="h-32 w-32">
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};
export default EmptyStateTemplate;
