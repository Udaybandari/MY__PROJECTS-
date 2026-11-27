
import { useState, useCallback } from "react";

function Child() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = useCallback(() => {
    console.log("Increment function executed!");
    setCount((prev) => prev + 1);
  }, []);

  console.log("Component rendered!");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-5">

        <h1 className="text-2xl font-bold">useCallback Example</h1>

        <h2 className="text-xl">Count: {count}</h2>

        <button
          onClick={handleIncrement}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Increment
        </button>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-lg"
        />

      </div>
    </div>
  );
}

export default Child;
