
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-blue-100"
    }`;

  const handleLogout = () => {
    navigate("/login");
  };

  return (
   <>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1
          onClick={() => navigate("/home")}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          ShopZone
        </h1>

        <div className="flex items-center gap-3">

          <NavLink to="/home" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>

          <NavLink to="/services" className={navStyle}>
            Services
          </NavLink>

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>
          
          <NavLink to="/dashboard" className={navStyle}>
            dashboard
          </NavLink>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
       <Outlet />
   </>
  );
}

export default Navbar;
