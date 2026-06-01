import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          CareerHub
        </Link>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/jobs"
              className="hover:text-blue-600 transition"
            >
              Jobs
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition"
            >
              Companies
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition"
            >
              About
            </a>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;