function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
        {job.job_types?.[0] || "Job"}
      </span>

      <h3 className="text-xl font-bold mt-4">
        {job.title}
      </h3>

      <p className="text-gray-700 mt-2">
        {job.company_name}
      </p>

      <p className="text-gray-500 mt-1">
        📍 {job.location}
      </p>

      <a
        href={job.url}
        target="_blank"
        rel="noreferrer"
        className="block mt-5 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
      >
        Apply Now
      </a>

    </div>
  );
}

export default JobCard;