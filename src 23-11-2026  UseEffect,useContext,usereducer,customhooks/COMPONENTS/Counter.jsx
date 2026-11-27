import useCounter from "./CustomHooks/UseCounter";

function Counter() {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">

                <h1 className="text-3xl font-bold mb-5">
                    Custom Hook Counter
                </h1>

                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                    {count}
                </h2>   

                <div className="flex gap-3">
                    <button onClick={increment}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        +
                    </button>    

                    <button onClick={decrement}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg">  
                        -
                    </button>

                    <button onClick={reset}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                        Reset
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Counter;