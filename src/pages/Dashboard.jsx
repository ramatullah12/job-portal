import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useBookmarks } from "../context/BookmarkContext";
import { useApplications } from "../context/ApplicationContext";

function Dashboard() {
  const { bookmarks } = useBookmarks();
  const { applications } = useApplications();

  const profile =
    JSON.parse(localStorage.getItem("userProfile")) || {};

  const resumeName =
    localStorage.getItem("resumeName");

  const profileCompleted =
    profile.fullName &&
    profile.email &&
    profile.phone &&
    profile.location
      ? 100
      : 50;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Welcome, {profile.fullName || "Candidate"} 👋
            </h1>

            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Manage your career journey with CareerHub
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6">
              <h3 className="text-gray-500 dark:text-gray-300">
                Saved Jobs
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-2">
                {bookmarks.length}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6">
              <h3 className="text-gray-500 dark:text-gray-300">
                Applied Jobs
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-2">
                {applications.length}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6">
              <h3 className="text-gray-500 dark:text-gray-300">
                Profile Completion
              </h3>

              <p className="text-4xl font-bold text-orange-500 mt-2">
                {profileCompleted}%
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6">
              <h3 className="text-gray-500 dark:text-gray-300">
                Resume Uploaded
              </h3>

              <p className="text-lg font-bold text-purple-600 mt-2">
                {resumeName ? "Yes" : "No"}
              </p>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6 mt-8">

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/profile"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Edit Profile
              </Link>

              <Link
                to="/jobs"
                className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Browse Jobs
              </Link>

              <Link
                to="/bookmarks"
                className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Saved Jobs
              </Link>

              <Link
                to="/applications"
                className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Applications
              </Link>

            </div>

          </div>

          {/* Profile Progress */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6 mt-8">

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Profile Progress
            </h2>

            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-4">

              <div
                className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${profileCompleted}%`,
                }}
              />

            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Complete your profile to increase visibility.
            </p>

          </div>

          {/* Recent Saved Jobs */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6 mt-8">

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Recent Saved Jobs
            </h2>

            {bookmarks.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                No saved jobs yet.
              </p>
            ) : (
              <div className="space-y-4">

                {bookmarks.slice(0, 3).map((job) => (
                  <div
                    key={job.slug || job.id}
                    className="border border-gray-200 dark:border-slate-700 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {job.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.company_name}
                    </p>
                  </div>
                ))}

              </div>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;