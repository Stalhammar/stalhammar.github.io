import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  Home,
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  Mail,
  X,
  Menu,
} from "lucide-react";

export default function SideBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden fixed top-4 left-4 z-50 grid place-items-center
          w-12 h-12 rounded-full transition-all"
        aria-label="Toggle menu"
      >
        {open ? (
          <X size={32} className="text-black dark:text-white" />
        ) : (
          <Menu size={32} className="text-black dark:text-white" />
        )}
      </button>

      {/* Mobile backdrop */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          aria-label="Close menu backdrop"
        />
      )}
      <aside
        className={`
          peer
          group/sidebar fixed z-40
          inset-y-0 left-0 h-dvh
          bg-white dark:bg-neutral-700 shadow-xl
          flex flex-col items-start justify-start
          px-6
          py-6
          pt-[calc(env(safe-area-inset-top)+1rem)]
          pb-[calc(env(safe-area-inset-bottom)+1rem)]
          transition-all duration-500 overflow-y-auto overflow-x-hidden overscroll-contain
          scrollbar-none

          /* mobile drawer: width + slide */
          w-64 ${open ? "translate-x-0" : "-translate-x-full"}

          /* desktop position & hover expand */
          md:translate-x-0 md:left-6 md:top-6 md:h-[calc(100vh-3rem)]
          md:w-20 md:hover:w-48 md:rounded-2xl
        `}
      >
        <nav className="flex flex-col flex-1 gap-12 font-medium mt-16 md:mt-0">
          {/* Helper for label visibility:
             - mobile: show when open, hide when closed
             - desktop: hidden by default, show on sidebar hover
          */}
          {[
            { to: "/", label: "Home", Icon: Home },
            { to: "/experience", label: "Experience", Icon: Briefcase },
            { to: "/skills", label: "Skills", Icon: Code },
            { to: "/education", label: "Education", Icon: GraduationCap },
            { to: "/projects", label: "Projects", Icon: Rocket },
            { to: "/contact", label: "Contact Me", Icon: Mail },
          ].map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `group/link flex flex-row items-center gap-3 transition-colors
                 ${
                   isActive
                     ? "text-black dark:text-white"
                     : "text-gray-400 dark:text-neutral-500"
                 }`
              }
              onClick={() =>
                setOpen(false)
              } /* close drawer after navigate on mobile */
            >
              <Icon
                size={36}
                className="transition-transform duration-300 group-hover/link:scale-110 origin-left"
              />
              <span
                className={`
                  group-hover/link:scale-110
                  whitespace-nowrap transition-all duration-300 origin-left
                  /* mobile: controlled by 'open' */
                  ${
                    open
                      ? "opacity-100 max-w-xs ml-1"
                      : "opacity-0 max-w-0 ml-0"
                  }

                  /* desktop: show on sidebar hover */
                  md:opacity-0 md:max-w-0 md:group-hover/sidebar:opacity-100 md:group-hover/sidebar:max-w-xs md:group-hover/sidebar:ml-1
                `}
              >
                {label}
              </span>
            </NavLink>
          ))}

          {/* Theme toggle row */}
          <div className="mt-auto transition-transform duration-300 hover:scale-115 origin-left">
            <ThemeToggle isOpen={open} />
          </div>
        </nav>
      </aside>
    </>
  );
}
