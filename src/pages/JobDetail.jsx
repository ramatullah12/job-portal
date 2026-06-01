import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useBookmarks } from "../context/BookmarkContext";
import { useApplications } from "../context/ApplicationContext";

function JobDetail() {
  const location = useLocation();
  const job = location.state?.job;

  const { addBookmark } = useBookmarks();
  const { applyJob } = useApplications();

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">

            <h1 className="text-3xl font-bold mb-4">
              Job Not Found
            </h1>

            <p className="text-gray-500 mb-6">
              The job information is unavailable.
            </p>

            <Link
              to="/jobs"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Back to Jobs
            </Link>

          </div>
        </div>

        <Footer />
      </>
    );
  }

  const handleApply = () => {
    applyJob(job);
    alert("Application submitted successfully!");
  };

  const handleSave = () => {
    addBookmark(job);
    alert("Job saved successfully!");
  };

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">

        <div className="max-w-5xl mx-auto px-6 py-12">

          <Link
            to="/jobs"
            className="text-blue-600 hover:underline"
          >
            ← Back to Jobs
          </Link>

          <div className="bg-white shadow-lg rounded-2xl p-8 mt-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

              <div>

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {job.job_types?.[0] || "Job"}
                </span>

                <h1 className="text-4xl font-bold mt-4">
                  {job.title}
                </h1>

                <p className="text-lg text-gray-700 mt-3">
                  {job.company_name}
                </p>

                <p className="text-gray-500 mt-2">
                  📍 {job.location}
                </p>

              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={handleApply}
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
              >
                Apply Job
              </button>

              <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
              >
                Save Job
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

            {/* Description */}
            <div className="mt-10">

              <h2 className="text-2xl font-semibold mb-4">
                Job Description
              </h2>

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: job.description,
                }}
              />

            </div>

            {/* Extra Information */}
            <div className="mt-10 border-t pt-8">

              <h2 className="text-2xl font-semibold mb-4">
                Job Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-slate-100 p-4 rounded-xl">
                  <p className="font-semibold">
                    Company
                  </p>

                  <p className="text-gray-600">
                    {job.company_name}
                  </p>
                </div>

                <div className="bg-slate-100 p-4 rounded-xl">
                  <p className="font-semibold">
                    Location
                  </p>

                  <p className="text-gray-600">
                    {job.location}
                  </p>
                </div>

                <div className="bg-slate-100 p-4 rounded-xl">
                  <p className="font-semibold">
                    Job Type
                  </p>

                  <p className="text-gray-600">
                    {job.job_types?.[0] || "Not specified"}
                  </p>
                </div>

                <div className="bg-slate-100 p-4 rounded-xl">
                  <p className="font-semibold">
                    Remote
                  </p>

                  <p className="text-gray-600">
                    Available
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