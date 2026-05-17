import { NavLink } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Users", path: "/admin/users" },
  { name: "Home Page", path: "/admin/homesettings" },
  { name: "Settings", path: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 p-5">
      
      <h2 className="font-semibold mb-8 text-lg">Admin</h2>

      <nav className="space-y-2 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}