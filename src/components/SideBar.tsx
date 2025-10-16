import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside
      className="
        fixed left-6 top-6 h-[calc(100vh-3rem)] w-32
        bg-white shadow-xl rounded-2xl
        flex flex-col items-start justify-start p-6
    "
    >
      <nav className="flex flex-col gap-4 text-gray-700 font-medium">
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
