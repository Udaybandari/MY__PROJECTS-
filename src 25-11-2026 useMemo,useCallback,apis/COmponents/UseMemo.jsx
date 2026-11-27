
import { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(100);

  const total = useMemo(() => {
    console.log("Calculating total...");

    return price * 5;
  }, [price]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-5">

        <h1 className="text-2xl font-bold">useMemo Example</h1>

        <p className="text-lg">Count: {count}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Increase Count
        </button>

        <hr />

        <p>Price: ₹{price}</p>

        <button
          onClick={() => setPrice(price + 10)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Increase Price
        </button>

        <h2 className="text-xl font-bold text-green-700">
          Total: ₹{total}
        </h2>

      </div>
    </div>
  );
}

export default UseMemo;
