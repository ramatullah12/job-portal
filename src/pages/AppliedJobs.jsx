import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useApplications } from "../context/ApplicationContext";

function AppliedJobs() {
  const { applications } = useApplications();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold mb-8">
            Applied Jobs
          </h1>

          {applications.length === 0 ? (
            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h2 className="text-xl font-semibold">
                No Applications Yet
              </h2>

              <p className="text-gray-500 mt-2">
                Start applying to jobs today.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {applications.map((job) => (
                <div
                  key={job.slug}
                  className="bg-white rounded-2xl shadow p-6"
                >
                  <h2 className="text-xl font-bold">
                    {job.title}
                  </h2>

                  <p className="text-gray-600">
                    {job.company_name}
                  </p>

                  <p className="text-gray-500">
                    {job.location}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default AppliedJobs;