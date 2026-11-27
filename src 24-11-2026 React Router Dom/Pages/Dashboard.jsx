import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        My Dashboard
      </h1>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-bold">Users</h2>
          <p className="text-2xl text-blue-600">120</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-bold">Products</h2>
          <p className="text-2xl text-green-600">50</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-bold">Orders</h2>
          <p className="text-2xl text-purple-600">85</p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex gap-4 mb-6">
        <Link to="/dashboard/profile"
          className="bg-blue-600 text-white px-4 py-2 rounded">
          Profile
        </Link>

        <Link to="/dashboard/settings"
          className="bg-blue-600 text-white px-4 py-2 rounded">
          Settings
        </Link>
      </nav>

      {/* Child routes appear here */}
      <div className="bg-white p-6 rounded-lg shadow">
        <Outlet />
      </div>

    </div>
  );
}

export default Dashboard;