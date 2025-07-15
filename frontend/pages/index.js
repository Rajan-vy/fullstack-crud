import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser, updateUser } from "../lib/api";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId !== null) {
      await updateUser(editId, form);
      setEditId(null);
    } else {
      await createUser(form);
    }
    setForm({ name: "", email: "" });
    loadUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditId(user.id);
  };

  return (
    <div className="min-h-screen bg-gray-400 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          User Management
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="border px-4 py-2 text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border px-4 py-2 text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-1/4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
            >
              {editId !== null ? "Update User" : "Add User"}
            </button>
          </div>
        </form>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">User List</h2>

        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
