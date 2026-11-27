
import { useEffect, useState } from "react";
import api from "../../Services/api";
import Modal from "../../COMPONENTS/Modal";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: ""
  };

  const [formData, setFormData] = useState(initialForm);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");

        const formattedUsers = response.data.map((user) => ({
          id: user.id,
          firstName: user.name.firstname,
          lastName: user.name.lastname,
          email: user.email,
          username: user.username,
          phone: user.phone
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Open Add User modal
  const handleAddUser = () => {
    setEditingUser(null);
    setFormData(initialForm);
    setIsModalOpen(true);
  };

  // Open Edit User modal
  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      phone: user.phone
    });
    setIsModalOpen(true);
  };

  // Add or Update user
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: formData.email,
      username: formData.username,
      phone: formData.phone,
      name: {
        firstname: formData.firstName,
        lastname: formData.lastName
      }
    };

    try {
      if (editingUser) {
        const response = await api.put(
          `/users/${editingUser.id}`,
          userData
        );

        const updatedUser = {
          id: editingUser.id,
          ...formData
        };

        setUsers((prev) =>
          prev.map((user) =>
            user.id === editingUser.id ? updatedUser : user
          )
        );
      } else {
        const response = await api.post("/users", userData);

        const newUser = {
          id: response.data.id,
          ...formData
        };

        setUsers((prev) => [...prev, newUser]);
      }

      setIsModalOpen(false);
      setFormData(initialForm);
      setEditingUser(null);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/users/${id}`);

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) {
    return <p className="p-6 text-lg">Loading users...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <p className="text-gray-500">
            View and manage registered users
          </p>
        </div>

        <button
          onClick={handleAddUser}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add User
        </button>
      </div>

      {/* User Count */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h2 className="text-gray-500">Total Users</h2>
        <p className="text-3xl font-bold">{users.length}</p>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Username</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-4">{user.id}</td>

                <td className="p-4 font-medium">
                  {user.firstName} {user.lastName}
                </td>

                <td className="p-4">{user.username}</td>

                <td className="p-4">{user.email}</td>

                <td className="p-4">{user.phone}</td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingUser ? "Edit User" : "Add New User"}
      >
        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {editingUser ? "Update User" : "Add User"}
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default ManageUsers;
