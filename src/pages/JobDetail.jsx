import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useBookmarks } from "../context/BookmarkContext";
import { useApplications } from "../context/ApplicationContext";

function JobDetail() {
  const location = useLocation();
  const job = location.state?.job;

  const { addBookmark } = useBookmarks();
  const { applyJob, applications } =
    useApplications();

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Job Not Found
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mb-6">
              The job information is unavailable or expired.
            </p>

            <Link
              to="/jobs"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Back to Jobs
            </Link>

          </div>

        </div>

        <Footer />
      </>
    );
  }

  const alreadyApplied =
    applications.some(
      (item) =>
        item.slug === job.slug
    );

  const handleApply = () => {
    applyJob(job);
    alert(
      "Application submitted successfully!"
    );
  };

  const handleSave = () => {
    addBookmark(job);
    alert("Job saved successfully!");
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      alert("Job link copied!");
    } catch {
      alert("Unable to copy link");
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-6xl mx-auto px-6 py-12">

          <Link
            to="/jobs"
            className="text-blue-600 hover:underline"
          >
            ← Back to Jobs
          </Link>

          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-lg p-8 mt-6">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

              <div>

                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                  {job.job_types?.[0] ||
                    "Job"}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4">
                  {job.title}
                </h1>

                <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
                  🏢 {job.company_name}
                </p>

                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  📍 {job.location}
                </p>

              </div>

              <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-2xl min-w-[250px]">

                <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                  Job Overview
                </h3>

                <div className="space-y-3">

                  <p className="dark:text-gray-300">
                    💼 {job.job_types?.[0]}
                  </p>

                  <p className="dark:text-gray-300">
                    📍 {job.location}
                  </p>

                  <p className="dark:text-gray-300">
                    🏢 {job.company_name}
                  </p>

                </div>

              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={handleApply}
                disabled={alreadyApplied}
                className={`px-6 py-3 rounded-xl text-white font-medium transition ${
                  alreadyApplied
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {alreadyApplied
                  ? "Already Applied"
                  : "Apply Job"}
              </button>

              <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
              >
                Save Job
              </button>
              <button
                onClick={handleShare}
                className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
              >
                Share Job
              </button>
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Official Apply
              </a>
            </div>
            {/* Status */}
            {alreadyApplied && (
              <div className="mt-6 bg-green-100 text-green-700 px-5 py-4 rounded-xl">
                ✅ You have already applied for this job.
              </div>
            )}
            {/* Description */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Job Description
              </h2>
              <div
                className="
                  text-slate-700
                  dark:text-slate-300
                  leading-8
                  text-base
                  space-y-4
                "
                dangerouslySetInnerHTML={{
                  __html:
                    job.description,
                }}
              />
            </div>
            <div className="mt-12 border-t border-gray-200 dark:border-slate-700 pt-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Job Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-xl">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Company
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {job.company_name}
                  </p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-xl">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {job.location}
                  </p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-xl">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Job Type
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {job.job_types?.[0] ||
                      "Not Specified"}
                  </p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-xl">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Work Mode
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Remote Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default JobDetail;