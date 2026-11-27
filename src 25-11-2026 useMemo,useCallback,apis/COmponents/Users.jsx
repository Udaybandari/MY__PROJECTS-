
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2 className="text-center text-xl mt-10">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500">{error}</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Users Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold text-blue-600">
              {user.name}
            </h2>

            <p className="text-gray-600 mt-2">
              Email: {user.email}
            </p>

            <p className="text-gray-600">
              Username: {user.username}
            </p>

            <p className="text-gray-600">
              City: {user.address.city}
            </p>

            <p className="text-gray-600">
              Phone: {user.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
