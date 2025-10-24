import React, { useState } from "react";
import axios from "axios";

function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });

      console.log("Login success:", response.data);

      // Example: if backend sends a token
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      setSuccess(true);
      setTimeout(() => {
        onClose(); // close modal after successful login
      }, 1000);
    } catch (err) {
      console.error("Login failed:", err);
      setError(
        err.response?.data?.message || "Invalid credentials, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-[#121212] text-white p-8 rounded-2xl shadow-lg w-96 relative border border-yellow-500">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-yellow-500 hover:text-yellow-400 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md bg-[#1f1f1f] border border-gray-700 focus:border-yellow-500 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-md bg-[#1f1f1f] border border-gray-700 focus:border-yellow-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-400"
            } text-black font-semibold py-2 rounded-md transition`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm mt-3 text-center">
            Login successful 🎉
          </p>
        )}

        <p className="text-sm text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-yellow-500 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
