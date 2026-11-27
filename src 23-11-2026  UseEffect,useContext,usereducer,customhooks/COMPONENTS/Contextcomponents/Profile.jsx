import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Profile() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center p-10">
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl text-center ${
        theme === "light"
          ? "bg-white"
          : "bg-gray-900"
      }`}>
        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-3xl text-white font-bold">
          U
        </div>

        <h2 className="text-2xl font-bold mt-5">
          Welcome Uday!
        </h2>

        <p className={`mt-3 ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}>
          Welcome to your React Dashboard.
        </p>

        <div className="mt-6 p-4 rounded-lg bg-blue-500/10">
          <p className="font-semibold">
            Current Theme: {theme.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;