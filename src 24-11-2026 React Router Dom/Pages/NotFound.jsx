import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-2xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/home"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;