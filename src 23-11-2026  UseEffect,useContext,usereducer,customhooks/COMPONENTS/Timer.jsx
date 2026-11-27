
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Cleanup function
        return () => {
            clearInterval(interval);
            console.log("Timer stopped and cleaned up");
        };

    }, [isRunning]);

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-5">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl text-center">

                <h1 className="text-3xl font-bold text-blue-600 mb-3">
                    React Stopwatch
                </h1>

                <p className="text-gray-500 mb-8">
                    useEffect Cleanup Example
                </p>

                {/* Timer Display */}
                <div className="bg-blue-50 rounded-xl p-8 mb-8">
                    <h2 className="text-6xl font-bold text-blue-700">
                        {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                        {String(seconds % 60).padStart(2, '0')}
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Minutes : Seconds
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3">

                    <button
                        onClick={() => setIsRunning(true)}
                        disabled={isRunning}
                        className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-5 py-3 rounded-lg"
                    >
                        Start
                    </button>

                    <button
                        onClick={() => setIsRunning(false)}
                        disabled={!isRunning}
                        className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-5 py-3 rounded-lg"
                    >
                        Stop
                    </button>

                    <button
                        onClick={handleReset}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-lg"
                    >
                        Reset
                    </button>

                </div>

                <p className="mt-6 text-sm text-gray-500">
                    Status: {isRunning ? "Running" : "Stopped"}
                </p>

            </div>
        </div>
    );
};

export default Timer;
