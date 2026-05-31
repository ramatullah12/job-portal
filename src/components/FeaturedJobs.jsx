import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "./JobCard";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();

        setJobs(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="text-center text-lg">
          Loading jobs...
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Discover the latest opportunities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
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