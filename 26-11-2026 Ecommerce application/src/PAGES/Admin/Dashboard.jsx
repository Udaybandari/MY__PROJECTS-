
import { useMemo } from "react";

function Dashboard() {
  // Demo dashboard data
  const stats = [
    {
      id: 1,
      title: "Total Products",
      value: 120,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Total Users",
      value: 85,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      title: "Total Orders",
      value: 64,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      title: "Total Revenue",
      value: 12500,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const recentOrders = [
    { id: 101, customer: "John", amount: 250, status: "Delivered" },
    { id: 102, customer: "David", amount: 150, status: "Pending" },
    { id: 103, customer: "Sarah", amount: 400, status: "Shipped" },
    { id: 104, customer: "Mike", amount: 300, status: "Delivered" }
  ];

  // Calculate delivered orders
  const deliveredOrders = useMemo(() => {
    return recentOrders.filter(
      (order) => order.status === "Delivered"
    ).length;
  }, [recentOrders]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-bold mb-5">
          Recent Orders
        </h2>

        <p className="text-gray-500 mb-4">
          Delivered orders: {deliveredOrders}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-3">#{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">${order.amount}</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Reusable component
function StatCard({ stat }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className={`inline-block p-3 rounded-lg ${stat.color}`}>
        <span className="font-bold">Shop</span>
      </div>

      <h2 className="text-gray-500 mt-4">
        {stat.title}
      </h2>

      <p className="text-3xl font-bold mt-2">
        {stat.title === "Total Revenue"
          ? `$${stat.value.toLocaleString()}`
          : stat.value}
      </p>
    </div>
  );
}

export default Dashboard;
