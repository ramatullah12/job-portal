import FeaturedJobs from "../components/FeaturedJobs";

function Jobs() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold mb-4">
          Browse Jobs
        </h1>

        <p className="text-gray-500 mb-10">
          Find opportunities from top companies
        </p>

        <FeaturedJobs />
      </div>
    </div>
  );
}

export default Jobs;