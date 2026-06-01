import FeaturedJobs from "../components/FeaturedJobs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Jobs() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Browse Jobs
            </h1>

            <p className="text-gray-500 dark:text-gray-300 mt-4">
              Find opportunities from top companies
            </p>

          </div>

          {/* Jobs Section */}
          <FeaturedJobs />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Jobs;