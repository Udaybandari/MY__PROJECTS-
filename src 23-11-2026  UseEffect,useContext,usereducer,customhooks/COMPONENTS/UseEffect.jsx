
import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // 1. Without dependency array
    useEffect(() => {
        console.log("Without dependency!");
    });

    // 2. With empty dependency array
    useEffect(() => {
        console.log("With empty dependency!");
    }, []);

    // 3. With dependency array
    useEffect(() => {
        console.log("With dependency: Count changed!");
    }, [count]);

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl text-center">

                <h1 className="text-3xl font-bold text-blue-600 mb-2">
                    useEffect Hook
                </h1>

                <p className="text-slate-500 mb-8">
                    Understanding React useEffect
                </p>

                {/* Counter Section */}
                <div className="bg-blue-50 p-6 rounded-xl mb-6">

                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                        Count: {count}
                    </h2>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
                    >
                        Increment
                    </button>

                </div>

                {/* Input Section */}
                <div className="text-left">

                    <label className="block font-semibold text-slate-700 mb-2">
                        Enter Your Name:
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <h3 className="text-green-600 font-semibold mt-4">
                        Hello, {input || "Guest"}!
                    </h3>

                </div>

            </div>
        </div>
    );
};

export default UseEffect;
