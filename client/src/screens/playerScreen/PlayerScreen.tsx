import { NavLink, Outlet } from "react-router-dom";
export const Record = () => <div>Record Component</div>;
export const Roster = () => <div>Roster Component</div>;
export const Activity = () => <div>Activity Component</div>;

const PlayerScreen = () => {
  return (
    <div className="flex flex-col h-full">
      <nav className="flex space-x-4 border-b">
        <NavLink to="record" className="p-2">
          Record
        </NavLink>
        <NavLink to="roster" className="p-2">
          Roster
        </NavLink>
        <NavLink to="activity" className="p-2">
          Activity
        </NavLink>
      </nav>
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default PlayerScreen;
