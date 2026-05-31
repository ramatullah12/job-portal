function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-xl">
          {job.title}
        </h3>

        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {job.type}
        </span>
      </div>

      <p className="text-gray-700 font-medium">
        {job.company}
      </p>

      <p className="text-gray-500">
        📍 {job.location}
      </p>

      <p className="mt-3 text-green-600 font-semibold">
        {job.salary}
      </p>

      <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;