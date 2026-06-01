import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();

        setJobs(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const result = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredJobs(result);
  }, [searchTerm, jobs]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading jobs...
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.slice(0, 12).map((job) => (
            <JobCard
              key={job.slug}
              job={job}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedJobs;