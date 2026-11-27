
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Products", path: "/admin/products" },
    { name: "Manage Users", path: "/admin/users" },
    { name: "Manage Orders", path: "/admin/orders" }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900 text-white p-5 transition-transform md:translate-x-0 md:static md:block
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-8">
          ShopSphere
        </h2>

        <nav className="flex flex-col gap-3">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              onClick={onClose}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
