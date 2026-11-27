import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={`flex justify-between items-center px-8 py-5 shadow-md ${
      theme === "light" ? "bg-white" : "bg-gray-900"
    }`}>
      <h1 className="text-2xl font-bold text-blue-500">
        My Dashboard
      </h1>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;