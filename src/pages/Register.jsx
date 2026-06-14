import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      existingUser &&
      existingUser.email === form.email
    ) {
      setError("Email already registered");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      })
    );

    alert("Account created successfully!");

    navigate("/login");
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
              Create Account 🚀
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Join CareerHub and discover your dream job
            </p>

          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 bg-red-100 text-red-600 px-4 py-3 rounded-lg">
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
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
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
                placeholder="Minimum 6 characters"
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
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
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
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">

            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Login Here
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Register;