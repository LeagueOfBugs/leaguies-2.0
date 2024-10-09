import { NavLink, Outlet } from "react-router-dom";
import { Separator } from "../components/ui/separator";

export const Record = () => <div>Record Component</div>;
export const Roster = () => <div>Roster Component</div>;
export const Activity = () => <div>Activity Component</div>;

const TeamScreen = () => {
  return (
    <main className="h-screen">
      <div className="flex-col h-full">
        <>hello</>
        <nav className="flex-col h-10">
          <div className="flex space-x-4">
            <NavLink to="record" className="p-2">
              Record
            </NavLink>
            <NavLink to="roster" className="p-2">
              Roster
            </NavLink>
            <NavLink to="activity" className="p-2">
              Activity
            </NavLink>
          </div>
          <Separator />
        </nav>

        <div className="flex-grow overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default TeamScreen;
