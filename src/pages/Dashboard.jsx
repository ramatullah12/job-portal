import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useBookmarks } from "../context/BookmarkContext";

function Dashboard() {
  const { bookmarks } = useBookmarks();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome back to CareerHub
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-500">
                Saved Jobs
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-2">
                {bookmarks.length}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-500">
                Applied Jobs
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-2">
                0
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-gray-500">
                Profile Completion
              </h3>

              <p className="text-4xl font-bold text-orange-500 mt-2">
                20%
              </p>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow p-6 mt-8">

            <h2 className="text-2xl font-semibold mb-6">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/profile"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
              >
                Edit Profile
              </Link>

              <Link
                to="/jobs"
                className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
              >
                Browse Jobs
              </Link>

              <Link
                to="/bookmarks"
                className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
              >
                Saved Jobs
              </Link>

            </div>

          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow p-6 mt-8">

            <h2 className="text-2xl font-semibold mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="border rounded-lg p-4">
                <p className="font-medium">
                  Saved a new job
                </p>

                <p className="text-sm text-gray-500">
                  Keep tracking your favorite opportunities.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="font-medium">
                  Complete your profile
                </p>

                <p className="text-sm text-gray-500">
                  Increase your chances of getting hired.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;