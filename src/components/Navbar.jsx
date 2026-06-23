import { Link, useNavigate } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";
import { useApplications } from "../context/ApplicationContext";
import { useTheme } from "../context/ThemeContext";
import { useNotifications } from "../context/NotificationContext";

function Navbar() {
  const navigate = useNavigate();
  const { bookmarks = [] } = useBookmarks();
  const { applications = [] } = useApplications();
  const { notifications = [] } = useNotifications();
  const { darkMode, toggleTheme } = useTheme();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const userEmail =
    localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    alert("Logout successful");
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          CareerHub
        </Link>
      
        <ul className="hidden md:flex items-center gap-8 font-medium text-slate-700 dark:text-white">
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

          {isLoggedIn && (
            <>
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
                  to="/applications"
                  className="relative hover:text-blue-600 transition"
                >
                  Applications
                  {applications.length > 0 && (
                    <span className="absolute -top-2 -right-5 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {applications.length}
                    </span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  to="/bookmarks"
                  className="relative hover:text-blue-600 transition"
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
                  to="/notifications"
                  className="relative hover:text-blue-600 transition"
                >
                  Notifications
                  {notifications.length > 0 && (
                    <span className="absolute -top-2 -right-5 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {notifications.length}
                    </span>
                  )}
                </Link>
              </li>
            </>
          )}
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
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="
              px-3
              py-2
              rounded-lg
              border
              border-gray-300
              dark:border-slate-600
              hover:bg-gray-100
              dark:hover:bg-slate-700
              transition
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          {isLoggedIn ? (
            <>
              <span className="hidden lg:block text-sm text-slate-600 dark:text-slate-300">
                {userEmail}
              </span>
              <Link
                to="/profile"
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-gray-300
                  dark:border-slate-600
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-slate-700
                  transition
                "
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-red-600
                  text-white
                  hover:bg-red-700
                  transition
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-gray-300
                  dark:border-slate-600
                  dark:text-white
                  hover:bg-gray-100
                  dark:hover:bg-slate-700
                  transition
                "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-blue-600
                  text-white
                  hover:bg-blue-700
                  transition
                "
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;