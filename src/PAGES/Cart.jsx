
import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";

function Cart() {
  const {
    cartItems,
    totalPrice,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mb-6">
          Add some products to your cart!
        </p>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-xl p-5 flex flex-col md:flex-row items-center gap-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-28 h-28 object-contain"
            />

            <div className="flex-1">
              <h2 className="font-bold text-lg">
                {item.title}
              </h2>

              <p className="text-blue-600 font-bold mt-2">
                ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-xl mt-8">
        <h2 className="text-xl font-bold mb-3">
          Order Summary
        </h2>

        <p>Total Items: {totalItems}</p>

        <p className="text-2xl font-bold text-blue-600 mt-3">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-5 py-3 rounded-lg"
          >
            Clear Cart
          </button>

          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
