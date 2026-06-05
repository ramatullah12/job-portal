import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useBookmarks } from "../context/BookmarkContext";
import { useApplications } from "../context/ApplicationContext";
import { useNotifications } from "../context/NotificationContext";
import { useSearchHistory } from "../context/SearchHistoryContext";

function Dashboard() {
  const { bookmarks = [] } = useBookmarks();
  const { applications = [] } = useApplications();
  const { notifications = [] } = useNotifications();
  const { history = [] } = useSearchHistory();

  const profile =
    JSON.parse(
      localStorage.getItem("userProfile")
    ) || {};

  const resumeName =
    localStorage.getItem("resumeName");

  const profileFields = [
    profile.fullName,
    profile.email,
    profile.phone,
    profile.location,
    profile.skills,
    profile.experience,
    profile.about,
    profile.linkedin,
    profile.github,
  ];

  const filledFields =
    profileFields.filter(Boolean).length;

  const profileCompleted = Math.round(
    (filledFields /
      profileFields.length) *
      100
  );

  const userName =
    localStorage.getItem("userName") ||
    profile.fullName ||
    "Candidate";

  const cards = [
    {
      title: "Saved Jobs",
      value: bookmarks.length,
      color: "text-blue-600",
      icon: "❤️",
    },
    {
      title: "Applied Jobs",
      value: applications.length,
      color: "text-green-600",
      icon: "📄",
    },
    {
      title: "Notifications",
      value: notifications.length,
      color: "text-yellow-500",
      icon: "🔔",
    },
    {
      title: "Search History",
      value: history.length,
      color: "text-purple-600",
      icon: "🔍",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Welcome, {userName} 👋
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Manage your career journey with CareerHub.
            </p>

          </div>

          {/* Analytics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {cards.map((card) => (
              <div
                key={card.title}
                className="
                  bg-white
                  dark:bg-slate-800
                  border
                  border-gray-200
                  dark:border-slate-700
                  rounded-2xl
                  shadow
                  p-6
                "
              >
                <div className="text-4xl">
                  {card.icon}
                </div>

                <h3 className="text-gray-500 dark:text-gray-400 mt-4">
                  {card.title}
                </h3>

                <p
                  className={`text-4xl font-bold mt-2 ${card.color}`}
                >
                  {card.value}
                </p>

              </div>
            ))}

          </div>

          {/* Profile & Resume */}
          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6">

              <div className="flex justify-between mb-4">

                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Profile Completion
                </h2>

                <span className="text-blue-600 font-bold">
                  {profileCompleted}%
                </span>

              </div>

              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${profileCompleted}%`,
                  }}
                />
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Complete your profile to increase visibility to recruiters.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Resume Status
              </h2>
              {resumeName ? (
                <>
                  <p className="text-green-600 font-semibold">
                    Resume Uploaded
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {resumeName}
                  </p>
                </>
              ) : (
                <p className="text-red-500">
                  Resume Not Uploaded
                </p>
              )}
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
              <Link
                to="/applications"
                className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600"
              >
                Applications
              </Link>
            </div>
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
                {bookmarks
                  .slice(0, 5)
                  .map((job) => (
                    <div
                      key={job.slug || job.id}
                      className="border border-gray-200 dark:border-slate-700 rounded-xl p-4"
                    >
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {job.company_name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        📍 {job.location}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
          {/* Recent Applications */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6 mt-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Recent Applications
            </h2>
            {applications.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                No applications yet.
              </p>
            ) : (
              <div className="space-y-4">
                {applications
                  .slice(0, 5)
                  .map((job) => (
                    <div
                      key={job.slug || job.id}
                      className="border border-gray-200 dark:border-slate-700 rounded-xl p-4"
                    >
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {job.company_name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        📍 {job.location}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Dashboard;