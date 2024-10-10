interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="h-svh w-svw pt-5 px-5">{children}</main>;
};

export default Layout;
