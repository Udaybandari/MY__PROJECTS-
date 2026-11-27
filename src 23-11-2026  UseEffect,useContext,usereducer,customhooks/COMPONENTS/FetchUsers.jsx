
import React, { useState, useEffect } from 'react';

const FetchUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();

                setUsers(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUsers();

    }, []);

    if (loading) {
        return <h2 className="text-center mt-10 text-xl">Loading...</h2>;
    }

    if (error) {
        return <h2 className="text-center mt-10 text-red-500">{error}</h2>;
    }

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <h1 className="text-3xl font-bold text-center mb-8">
                Users List
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white p-5 rounded-xl shadow"
                    >
                        <h2 className="text-xl font-bold text-blue-600">
                            {user.name}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            {user.email}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default FetchUsers;
