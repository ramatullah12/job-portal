import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function JobDetail() {
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return (
      <div className="text-center py-20">
        Job data not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">

        <Link
          to="/jobs"
          className="text-blue-600"
        >
          ← Back to Jobs
        </Link>

        <div className="bg-white shadow-lg rounded-2xl p-8 mt-6">

          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {job.job_types?.[0]}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {job.title}
          </h1>

          <p className="text-gray-700 mt-3">
            {job.company_name}
          </p>

          <p className="text-gray-500">
            📍 {job.location}
          </p>

          <div className="mt-8">
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

          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Apply Now
          </a>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default JobDetail;