import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

import {
  useBookmarks,
} from "../context/BookmarkContext";

function Bookmarks() {
  const { bookmarks } = useBookmarks();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Saved Jobs
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Manage and track your favorite job opportunities.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6 mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Total Saved Jobs
            </h2>
            <p className="text-4xl font-bold text-blue-600 mt-3">
              {bookmarks.length}
            </p>
          </div>
          {bookmarks.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-12 text-center">
              <div className="text-6xl mb-4">
                📂
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                No Saved Jobs Yet
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3">
                Start saving jobs to keep track of opportunities.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {bookmarks.map((job) => (
                  <JobCard
                    key={job.slug || job.id}
                    job={job}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Bookmarks;