import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setForm({ email: "", password: "" });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );
      if (user) {
        setMessage("Login successful!");
      } else {
        setMessage("Invalid credentials.");
      }
    } else {
      const exists = users.some((u) => u.email === form.email);
      if (exists) {
        setMessage("User already exists.");
      } else {
        users.push({ ...form });
        localStorage.setItem("users", JSON.stringify(users));
        setMessage("Signup successful. Please login.");
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="flex max-h-80vh">
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center pt-32 ">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="mt-4 text-center text-sm text-gray-700">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleForm}
              className="ml-2 text-indigo-500 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>

          {message && (
            <p className="mt-4 text-center text-sm font-semibold text-gray-800">
              {message}
            </p>
          )}
        </form>
          </div>
          <div className="w-[85%] h-full">
              <img src="./loginpic2.png" alt="" />
          </div>
    </div>
  );
};

export default Login;
