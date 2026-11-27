
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    case "incrementByFive":
      return state + 5;

    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          useReducer Counter
        </h1>

        <h2 className="text-5xl font-bold text-blue-600 mb-8">
          {count}
        </h2>

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={() => dispatch({ type: "increment" })}
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch({ type: "incrementByFive" })}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            +5
          </button>

          <button
            onClick={() => dispatch({ type: "reset" })}
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg"
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}

export default Counter;
