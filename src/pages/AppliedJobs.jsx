import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useApplications } from "../context/ApplicationContext";

function AppliedJobs() {
  const {
    applications = [],
    removeApplication,
    clearApplications,
  } = useApplications();

  const pendingApplications =
    applications.filter(
      (job) =>
        (job.status || "Pending") ===
        "Pending"
    ).length;

  const acceptedApplications =
    applications.filter(
      (job) =>
        job.status === "Accepted"
    ).length;

  const rejectedApplications =
    applications.filter(
      (job) =>
        job.status === "Rejected"
    ).length;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-10">
            <div>
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
                Applied Jobs
              </h1>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Track and manage all jobs you have applied for.
              </p>
            </div>

            {applications.length > 0 && (
              <button
                onClick={clearApplications}
                className="
                  bg-red-600
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  hover:bg-red-700
                  transition
                "
              >
                Clear All Applications
              </button>
            )}
          </div>
          {/* Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-gray-500 dark:text-gray-400">
                Total Applications
              </h3>
              <p className="text-4xl font-bold text-blue-600 mt-2">
                {applications.length}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-gray-500 dark:text-gray-400">
                Pending
              </h3>
              <p className="text-4xl font-bold text-yellow-500 mt-2">
                {pendingApplications}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-gray-500 dark:text-gray-400">
                Accepted
              </h3>
              <p className="text-4xl font-bold text-green-600 mt-2">
                {acceptedApplications}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-gray-500 dark:text-gray-400">
                Rejected
              </h3>
              <p className="text-4xl font-bold text-red-600 mt-2">
                {rejectedApplications}
              </p>
            </div>
          </div>

          {/* Empty State */}
          {applications.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-12 text-center">
              <div className="text-7xl mb-4">
                📄
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                No Applications Yet
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3">
                Start applying for jobs and your application history will appear here.
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
                    hover:shadow-xl
                    transition
                  "
                >

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
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

                      <p className="text-blue-600 mt-2 font-medium">
                        Applied:
                        {" "}
                        {job.appliedAt || "Today"}
                      </p>

                    </div>

                    <div className="flex flex-col gap-3">

                      <span
                        className={`px-4 py-2 rounded-full text-center font-medium ${
                          job.status === "Accepted"
                            ? "bg-green-100 text-green-700"
                            : job.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {job.status || "Pending"}
                      </span>

                      <button
                        onClick={() =>
                          removeApplication(
                            job.slug
                          )
                        }
                        className="
                          bg-red-600
                          text-white
                          px-5
                          py-2
                          rounded-lg
                          hover:bg-red-700
                          transition
                        "
                      >
                        Remove Application
                      </button>

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