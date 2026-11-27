
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    setOrders(savedOrders);
  }, []);

  const handleClearOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  if (orders.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">
          No Orders Yet
        </h1>

        <p className="text-gray-500 mb-6">
          You haven't placed any orders.
        </p>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          My Orders
        </h1>

        <button
          onClick={handleClearOrders}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Clear Orders
        </button>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow rounded-xl p-6"
          >
            <div className="flex flex-wrap justify-between gap-3 mb-4">
              <div>
                <h2 className="font-bold text-lg">
                  Order #{order.id}
                </h2>

                <p className="text-gray-500">
                  Date: {order.date}
                </p>
              </div>

              <p className="font-bold text-blue-600">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">
                Ordered Products
              </h3>

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 mb-3"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>

                  <span>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold mb-2">
                Shipping Details
              </h3>

              <p>{order.customer.fullName}</p>
              <p>{order.customer.email}</p>
              <p>{order.customer.address}</p>
              <p>
                {order.customer.city} - {order.customer.pincode}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
