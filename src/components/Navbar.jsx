import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function Navbar() {
  const { bookmarks } = useBookmarks();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          CareerHub
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

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
            <Link
              to="/dashboard"
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/bookmarks"
              className="hover:text-blue-600 transition relative"
            >
              Saved Jobs

              {bookmarks.length > 0 && (
                <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {bookmarks.length}
                </span>
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/companies"
              className="hover:text-blue-600 transition"
            >
              Companies
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;