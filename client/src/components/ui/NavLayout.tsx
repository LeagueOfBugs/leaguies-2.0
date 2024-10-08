import { NavLink, Outlet } from "react-router-dom";
import { Separator } from "./separator";

interface NavLinks {
  label: string;
  to: string;
}
interface NavLayoutProps {
  navLinks: NavLinks[];
}

const NavLayout = ({ navLinks }: NavLayoutProps) => {
  return (
    <div className="flex-col h-full">
      <nav className="flex-col h-10">
        <div className="flex space-x-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <Separator />
      </nav>

      <div className="flex-grow overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
