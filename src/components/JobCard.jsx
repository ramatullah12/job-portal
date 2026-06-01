import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function JobCard({ job }) {
  const { addBookmark } = useBookmarks();

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

      <div className="flex gap-2 mt-5">

        <Link
          to={`/jobs/${job.slug}`}
          state={{ job }}
          className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg"
        >
          View Details
        </Link>

        <button
          onClick={() => addBookmark(job)}
          className="px-4 rounded-lg border"
        >
          ❤️
        </button>

      </div>

    </div>
  );
}

export default JobCard;