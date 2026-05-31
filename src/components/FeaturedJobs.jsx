import jobs from "../data/jobs";
import JobCard from "./JobCard";

function FeaturedJobs() {
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
              key={job.id}
              job={job}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedJobs;