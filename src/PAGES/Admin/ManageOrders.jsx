
import { useEffect, useState } from "react";

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    setOrders(savedOrders);
    setLoading(false);
  }, []);

  // Update order status
  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: newStatus }
        : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Delete order
  const handleDeleteOrder = (orderId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    const updatedOrders = orders.filter(
      (order) => order.id !== orderId
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  if (loading) {
    return <p className="p-6">Loading orders...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Manage Orders</h1>
        <p className="text-gray-500">
          View and manage customer orders
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <StatCard
          title="Total Orders"
          value={orders.length}
        />

        <StatCard
          title="Pending Orders"
          value={orders.filter(
            (order) => order.status === "Pending"
          ).length}
        />

        <StatCard
          title="Delivered Orders"
          value={orders.filter(
            (order) => order.status === "Delivered"
          ).length}
        />

      </div>

      {/* Orders */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Products</th>
              <th className="p-4">Total</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (

              <tr key={order.id} className="border-t">

                <td className="p-4 font-medium">
                  #{order.id}
                </td>

                <td className="p-4">
                  {order.customer?.fullName || "Customer"}
                </td>

                <td className="p-4">
                  {order.items?.length || 0} items
                </td>

                <td className="p-4">
                  ${Number(order.total || 0).toFixed(2)}
                </td>

                <td className="p-4">
                  {order.date || "-"}
                </td>

                <td className="p-4">
                  <select
                    value={order.status || "Pending"}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="border rounded p-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => handleDeleteOrder(order.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))}

            {orders.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-500"
                >
                  No orders found.
                </td>
              </tr>
            )}

          </tbody>
        </table>

      </div>
    </div>
  );
}

// Reusable Statistics Card
function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

export default ManageOrders;
