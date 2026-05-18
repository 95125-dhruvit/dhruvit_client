import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  House,
  UserCircle2,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: any;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Users",
    path: "/admin/users",
    icon: Users,
  },

  {
    name: "Home Page",
    path: "/admin/homesettings",
    icon: House,
  },

  {
    name: "About Page",
    path: "/admin/aboutsettings",
    icon: UserCircle2,
  },

  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {

  const [collapsed, setCollapsed] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div
        className="
          lg:hidden
          sticky
          top-0
          z-50
          px-4
          py-4
          border-b
          border-gray-200
          dark:border-white/10
          bg-white/70
          dark:bg-black/30
          backdrop-blur-2xl
          flex
          items-center
          justify-between
        "
      >

        <div>

          <p
            className="
              text-blue-500
              text-[10px]
              font-medium
              tracking-[0.25em]
              uppercase
              mb-1
            "
          >
            PERSONAL CMS
          </p>

          <h2 className="font-black text-lg">
            Admin Panel
          </h2>

        </div>

        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          className="
            w-11
            h-11
            rounded-2xl
            border
            border-gray-200
            dark:border-white/10
            bg-white/70
            dark:bg-white/[0.05]
            flex
            items-center
            justify-center
          "
        >
          <Menu className="w-5 h-5" />
        </button>

      </div>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() =>
          setMobileOpen(false)
        }
        className={`
          fixed
          inset-0
          bg-black/50
          backdrop-blur-sm
          z-40
          transition-all
          duration-300
          lg:hidden

          ${
            mobileOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed
          lg:sticky
          top-0
          left-0
          z-50
          h-screen
          border-r
          border-gray-200
          dark:border-white/10
          bg-white/70
          dark:bg-[#050505]/90
          backdrop-blur-2xl
          transition-all
          duration-300
          flex
          flex-col

          ${
            collapsed
              ? "w-[88px]"
              : "w-[250px]"
          }

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* HEADER */}
        <div className="p-4">

          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-gray-200
              dark:border-white/10
              bg-white/70
              dark:bg-white/[0.04]
              backdrop-blur-xl
              p-4
            "
          >

            {/* TOP LIGHT */}
            <div
              className="
                absolute
                top-0
                left-0
                h-[2px]
                w-full
                bg-gradient-to-r
                from-transparent
                via-blue-500/60
                to-transparent
              "
            />

            <div
              className={`
                flex
                items-start
                ${
                  collapsed
                    ? "justify-center"
                    : "justify-between"
                }
              `}
            >

              {/* LOGO */}
              {
                !collapsed && (
                  <div>

                    <p
                      className="
                        text-blue-500
                        text-[10px]
                        font-medium
                        tracking-[0.25em]
                        uppercase
                        mb-1
                      "
                    >
                      PERSONAL CMS
                    </p>

                    <h2
                      className="
                        text-xl
                        font-black
                        tracking-tight
                      "
                    >
                      Admin
                    </h2>

                  </div>
                )
              }

              {/* COLLAPSE BUTTON */}
              <button
                onClick={() =>
                  setCollapsed(!collapsed)
                }
                className="
                  w-10
                  h-10
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/60
                  dark:bg-white/[0.05]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:border-blue-500/20
                "
              >
                <ChevronLeft
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-300

                    ${
                      collapsed
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav
          className="
            flex-1
            overflow-y-auto
            px-4
            pb-4
            space-y-2
          "
        >

          {
            navItems.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className={({ isActive }) =>
                    `
                      group
                      relative
                      overflow-hidden
                      flex
                      items-center
                      ${
                        collapsed
                          ? "justify-center"
                          : ""
                      }
                      gap-3
                      rounded-[20px]
                      px-3
                      py-3
                      border
                      transition-all
                      duration-300
                      backdrop-blur-xl

                      ${
                        isActive
                          ? `
                            border-blue-500/20
                            bg-blue-500/[0.08]
                            shadow-lg
                            shadow-blue-500/10
                          `
                          : `
                            border-gray-200
                            dark:border-white/10
                            bg-white/50
                            dark:bg-white/[0.03]
                            hover:border-blue-500/20
                            hover:bg-blue-500/[0.04]
                          `
                      }
                    `
                  }
                >

                  {({ isActive }) => (
                    <>
                      {/* ACTIVE LIGHT */}
                      {
                        isActive && (
                          <div
                            className="
                              absolute
                              top-0
                              left-0
                              h-[2px]
                              w-full
                              bg-gradient-to-r
                              from-transparent
                              via-blue-500/70
                              to-transparent
                            "
                          />
                        )
                      }

                      {/* ICON */}
                      <div
                        className="
                          relative
                          z-10
                          min-w-[42px]
                          w-[42px]
                          h-[42px]
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          bg-blue-500/10
                          text-blue-500
                        "
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* TEXT */}
                      {
                        !collapsed && (
                          <div className="relative z-10">

                            <p
                              className={`
                                text-sm
                                font-medium
                                transition-colors
                                duration-300

                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-gray-700 dark:text-gray-300"
                                }
                              `}
                            >
                              {item.name}
                            </p>

                          </div>
                        )
                      }
                    </>
                  )}

                </NavLink>
              );
            })
          }

        </nav>

      </aside>
    </>
  );
}