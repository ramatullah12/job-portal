import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function JobCard({ job }) {
  const { addBookmark } = useBookmarks();

  const handleBookmark = () => {
    addBookmark(job);
  };

  return (
    <div
      className="
        bg-white
        dark:bg-slate-800
        border
        border-gray-200
        dark:border-slate-700
        rounded-2xl
        shadow-md
        p-6
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Job Type */}
      <span
        className="
          inline-block
          bg-blue-100
          text-blue-600
          px-3
          py-1
          rounded-full
          text-sm
          font-medium
        "
      >
        {job.job_types?.[0] || "Full Time"}
      </span>


      <h3 className="text-xl font-bold mt-4 text-slate-900 dark:text-white">
        {job.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        🏢 {job.company_name || "Unknown Company"}
      </p>
      <p className="text-gray-500 dark:text-gray-400 mt-1">
        📍 {job.location || "Remote"}
      </p>
      <div className="border-t dark:border-slate-700 my-5"></div>
      <div className="flex gap-2">
        <Link
          to={`/jobs/${job.slug}`}
          state={{ job }}
          className="
            flex-1
            bg-blue-600
            text-white
            text-center
            py-2.5
            rounded-lg
            hover:bg-blue-700
            transition
            font-medium
          "
        >
          View Details
        </Link>
        <button
          onClick={handleBookmark}
          className="
            px-4
            rounded-lg
            border
            border-gray-300
            dark:border-slate-600
            hover:bg-red-50
            dark:hover:bg-slate-700
            transition
          "
          title="Save Job"
        >
          ❤️
        </button>
      </div>
    </div>
  );
}

export default JobCard;