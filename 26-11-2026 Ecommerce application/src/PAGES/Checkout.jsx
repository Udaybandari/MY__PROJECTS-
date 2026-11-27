
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const { fullName, email, phone, address, city, pincode } = formData;

    if (!fullName || !email || !phone || !address || !city || !pincode) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must contain 10 digits.");
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleDateString()
    };

  // Get existing orders
const existingOrders = JSON.parse(
  localStorage.getItem("orders") || "[]"
);

// Add new order
const updatedOrders = [...existingOrders, order];

// Save orders
localStorage.setItem("orders", JSON.stringify(updatedOrders));

// Clear cart
clearCart();

// Navigate to orders
navigate("/orders");
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <Link to="/products" className="text-blue-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Shipping Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-xl p-6"
        >
          <h2 className="text-xl font-bold mb-6">
            Shipping Details
          </h2>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded mb-4">
              {error}
            </p>
          )}

          {[
            { name: "fullName", placeholder: "Full Name" },
            { name: "email", placeholder: "Email Address" },
            { name: "phone", placeholder: "Phone Number" },
            { name: "address", placeholder: "Full Address" },
            { name: "city", placeholder: "City" },
            { name: "pincode", placeholder: "PIN Code" }
          ].map((field) => (
            <input
              key={field.name}
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full border p-3 rounded-lg mb-4"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-xl p-6 h-fit">
          <h2 className="text-xl font-bold mb-5">
            Order Summary
          </h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-4 mb-4"
            >
              <span>
                {item.title} × {item.quantity}
              </span>

              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
