import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="flex flex-col">
      <nav className="flex flex-col">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-black"
          }
        >
          Experience
        </NavLink>
      </nav>
    </aside>
  );
}
