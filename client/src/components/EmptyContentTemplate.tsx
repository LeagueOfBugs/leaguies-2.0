interface EmptyContentTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
const EmptyContentTemplate = ({
  title,
  description,
  children,
}: EmptyContentTemplateProps) => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h2>{title}</h2>
      <span>{description}</span>
      {children}
    </div>
  );
};

export default EmptyContentTemplate;
