import { NavLink, Outlet } from "react-router-dom";

interface NavLinks {
  label: string;
  to: string;
}
interface NavLayoutProps {
  navLinks: NavLinks[];
}

const NavLayout = ({ navLinks }: NavLayoutProps) => {
  console.log("navLayout rendered");
  return (
    <div className="flex flex-col h-full w-full">
      <nav className="flex-col">
        <div className="flex space-x-10 justify-center content-evenly">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <section className="h-svh bg-[#2D2F33] pt-2">
        <Outlet />
      </section>
    </div>
  );
};

export default NavLayout;
