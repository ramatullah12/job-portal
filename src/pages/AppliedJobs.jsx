import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useApplications } from "../context/ApplicationContext";

function AppliedJobs() {
  const { applications } = useApplications();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Applied Jobs
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Track all jobs you have applied for.
            </p>

          </div>

          {/* Statistics */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6 mb-10">

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Total Applications
            </h2>

            <p className="text-4xl font-bold text-green-600 mt-3">
              {applications.length}
            </p>

          </div>

          {/* Empty State */}
          {applications.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-12 text-center">

              <div className="text-6xl mb-4">
                📄
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                No Applications Yet
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-3">
                Start applying for jobs and track your progress here.
              </p>

            </div>
          ) : (
            <div className="grid gap-6">

              {applications.map((job) => (
                <div
                  key={job.slug || job.id}
                  className="
                    bg-white
                    dark:bg-slate-800
                    border
                    border-gray-200
                    dark:border-slate-700
                    rounded-2xl
                    shadow
                    p-6
                    hover:shadow-lg
                    transition
                  "
                >

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                    <div>

                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {job.title}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        🏢 {job.company_name}
                      </p>

                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        📍 {job.location}
                      </p>

                    </div>

                    <div>

                      <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                        Applied
                      </span>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}

export default AppliedJobs;