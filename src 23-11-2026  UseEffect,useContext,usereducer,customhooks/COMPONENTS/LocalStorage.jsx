
import React, { useState, useEffect } from 'react';

const LocalStorage = () => {

    const [username, setUsername] = useState(
        localStorage.getItem('username') || ''
    );

    useEffect(() => {
        localStorage.setItem('username', username);
    }, [username]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-5">

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Local Storage
                </h1>

                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">

                    <p className="text-gray-600 text-sm">
                        Your Username:
                    </p>

                    <h2 className="text-xl font-bold text-blue-700 mt-2">
                        {username || 'No username entered'}
                    </h2>

                </div>

                <button
                    onClick={() => {
                        localStorage.removeItem('username');
                        setUsername('');
                    }}
                    className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
                >
                    Clear Username
                </button>

            </div>

        </div>
    );
};

export default LocalStorage;
