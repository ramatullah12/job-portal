import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import JobFilter from "./JobFilter";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();

        if (!Array.isArray(data)) {
          throw new Error("Invalid API response");
        }

        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    let result = jobs;

    if (searchTerm) {
      result = result.filter((job) =>
        (job.title || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== "All") {
      result = result.filter((job) =>
        job.job_types?.includes(selectedType)
      );
    }

    setFilteredJobs(result);
    setCurrentPage(1);
  }, [searchTerm, selectedType, jobs]);

  const lastIndex = currentPage * jobsPerPage;
  const firstIndex = lastIndex - jobsPerPage;

  const currentJobs = filteredJobs.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    filteredJobs.length / jobsPerPage
  );

  if (loading) {
    return (
      <div className="py-24 flex justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 font-medium">
        {error}
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-300 mb-10">
          Discover the latest opportunities
        </p>

        {/* Search */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Filter */}
        <JobFilter
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        {/* Empty State */}
        {currentJobs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-slate-700 dark:text-white">
              No Jobs Found
            </h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try changing keywords or filters.
            </p>
          </div>
        ) : (
          <>
            {/* Jobs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {currentJobs.map((job) => (
                <JobCard
                  key={job.slug || job.id}
                  job={job}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-12 flex-wrap">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`
                      px-4 py-2 rounded-lg transition
                      ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-white border dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700"
                      }
                    `}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default FeaturedJobs;