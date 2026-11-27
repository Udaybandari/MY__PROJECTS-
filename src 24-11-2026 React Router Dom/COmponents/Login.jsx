import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo login
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          ShopZone
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue shopping
        </p>

        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg mb-5 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          required
          placeholder="Enter your password"
          className="w-full border p-3 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;