import { NavLink } from "react-router-dom";
import { Home, Briefcase } from "lucide-react";

export default function SideBar() {
  return (
    <aside
      className="
        fixed left-6 top-6 h-[calc(100vh-3rem)] w-48
        bg-white shadow-xl rounded-2xl
        flex flex-col items-start justify-start p-6
    "
    >
      <nav className="flex flex-col gap-4 text-gray-700 font-medium">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-row items-center gap-3 ${isActive ? "text-blue-400" : "text-black"}`
          }
        >
          <Home size={36} /> Home
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `flex flex-row items-center gap-3 ${isActive ? "text-blue-400" : "text-black"}`
          }
        >
          <Briefcase size={36} /> Experience
        </NavLink>
      </nav>
    </aside>
  );
}
