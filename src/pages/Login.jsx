import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!registeredUser) {
      setError("No account found. Please register first.");
      return;
    }

    if (registeredUser.email !== form.email) {
      setError("Email not found.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", form.email);

    alert("Login successful!");

    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-6 transition-colors duration-300">

        <div
          className="
            w-full
            max-w-md
            bg-white
            dark:bg-slate-800
            border
            border-gray-200
            dark:border-slate-700
            rounded-2xl
            shadow-lg
            p-8
          "
        >
          {/* Header */}
          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Welcome Back 👋
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Login to your CareerHub account
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="block mb-2 font-medium text-slate-900 dark:text-white">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  border
                  border-gray-300
                  dark:border-slate-600
                  bg-white
                  dark:bg-slate-700
                  text-slate-900
                  dark:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-900 dark:text-white">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  border
                  border-gray-300
                  dark:border-slate-600
                  bg-white
                  dark:bg-slate-700
                  text-slate-900
                  dark:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-lg
                hover:bg-blue-700
                transition
                font-medium
              "
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gray-500 dark:text-gray-400">
              Don't have an account?
            </p>
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Create Account
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;