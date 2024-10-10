interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-svh w-svw pt-5 px-5 overflow-auto no-scrollbar">
      {children}
      <div className="h-16 mt-16"></div>
    </main>
  );
};

export default Layout;
