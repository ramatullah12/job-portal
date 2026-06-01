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
      <div className="text-center py-20 text-xl">
        Loading jobs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Discover the latest opportunities
        </p>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <JobFilter
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        {currentJobs.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No jobs found
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentJobs.map((job) => (
                <JobCard
                  key={job.slug || job.id}
                  job={job}
                />
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-10 flex-wrap">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                  className={`px-4 py-2 rounded-lg transition ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default FeaturedJobs;