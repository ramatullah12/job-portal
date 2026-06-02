import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900">

      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4 dark:text-white">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Back Home
      </Link>

    </div>
  );
}

export default NotFound;