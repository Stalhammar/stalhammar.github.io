import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  Home,
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  Mail,
} from "lucide-react";

export default function SideBar() {
  return (
    <aside
      className="
        peer
        group/sidebar
        fixed left-6 top-6 h-[calc(100vh-3rem)]
        bg-white dark:bg-neutral-700 shadow-xl rounded-2xl
        flex flex-col items-start justify-start p-6
        transition-all duration-300 overflow-hidden
        w-20 hover:w-48
    "
    >
      <nav className="flex flex-col gap-8 text-gray-700 font-medium">
        {/* Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `group/link flex flex-row items-center gap-3 ${
              isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-neutral-500"
            }`
          }
        >
          <Home
            size={36}
            className="transition-transform duration-300 group-hover/link:scale-110 origin-left"
          />
          <span className="text-inherit opacity-0 group-hover/sidebar:opacity-100 whitespace-nowrap transition-all duration-300 group-hover/link:scale-110 origin-left">
            Home
          </span>
        </NavLink>
        {/* Experience */}
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `group/link flex flex-row items-center gap-3 ${
              isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-neutral-500"
            }`
          }
        >
          <Briefcase
            size={36}
            className="transition-transform duration-300 group-hover/link:scale-110 origin-left"
          />
          <span className="text-inherit opacity-0 group-hover/sidebar:opacity-100 whitespace-nowrap transition-all duration-300 group-hover/link:scale-110 origin-left">
            Experience
          </span>
        </NavLink>
        {/* Skills */}
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `group/link flex flex-row items-center gap-3 ${
              isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-neutral-500"
            }`
          }
        >
          <Code
            size={36}
            className="transition-transform duration-300 group-hover/link:scale-110 origin-left"
          />
          <span className="text-inherit opacity-0 group-hover/sidebar:opacity-100 whitespace-nowrap transition-all duration-300 group-hover/link:scale-110 origin-left">
            Skills
          </span>
        </NavLink>
        {/* Education */}
        <NavLink
          to="/education"
          className={({ isActive }) =>
            `group/link flex flex-row items-center gap-3 ${
              isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-neutral-500"
            }`
          }
        >
          <GraduationCap
            size={36}
            className="transition-transform duration-300 group-hover/link:scale-110 origin-left"
          />
          <span className="text-inherit opacity-0 group-hover/sidebar:opacity-100 whitespace-nowrap transition-all duration-300 group-hover/link:scale-110 origin-left">
            Education
          </span>
        </NavLink>
        {/* Projects */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `group/link flex flex-row items-center gap-3 ${
              isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-neutral-500"
            }`
          }
        >
          <Rocket
            size={36}
            className="transition-transform duration-300 group-hover/link:scale-110 origin-left"
          />
          <span className="text-inherit opacity-0 group-hover/sidebar:opacity-100 whitespace-nowrap transition-all duration-300 group-hover/link:scale-110 origin-left">
            Projects
          </span>
        </NavLink>
        {/* Contact Me */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `group/link flex flex-row items-center gap-3 ${
              isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-neutral-500"
            }`
          }
        >
          <Mail
            size={36}
            className="transition-transform duration-300 group-hover/link:scale-110 origin-left"
          />
          <span className="text-inherit opacity-0 group-hover/sidebar:opacity-100 whitespace-nowrap transition-all duration-300 group-hover/link:scale-110 origin-left">
            Contact Me
          </span>
        </NavLink>
        <div className="mt-1 transition-transform duration-300 hover:scale-125 origin-left">
          <ThemeToggle />
        </div>
      </nav>
    </aside>
  );
}
