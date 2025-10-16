import { NavLink } from "react-router-dom";
import { Home, Briefcase } from "lucide-react";

export default function SideBar() {
  return (
    <aside
      className="
        peer
        group 
        fixed left-6 top-6 h-[calc(100vh-3rem)]
        bg-white shadow-xl rounded-2xl
        flex flex-col items-start justify-start p-6
        transition-all duration-300 overflow-hidden
        w-20 hover:w-48
    "
    >
      <nav className="flex flex-col gap-8 text-gray-700 font-medium">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-row items-center gap-3 ${
              isActive ? "text-blue-400" : "text-black hover:text-blue-400"
            }`
          }
        >
          <Home size={36} />
          <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
            Home
          </span>
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `flex flex-row items-center gap-3 ${
              isActive ? "text-blue-400" : "text-black hover:text-blue-400"
            }`
          }
        >
          <Briefcase size={36} />
          <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
            Experience
          </span>
        </NavLink>
      </nav>
    </aside>
  );
}
