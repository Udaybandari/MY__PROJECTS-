
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopSphere
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </div>

        {/* Cart and Login */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-gray-700">
            Cart
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Conditional Rendering */}
      {menuOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
