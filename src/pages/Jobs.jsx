import FeaturedJobs from "../components/FeaturedJobs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Jobs() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-5xl font-bold mb-4">
            Browse Jobs
          </h1>

          <p className="text-gray-500 mb-10">
            Find opportunities from top companies
          </p>

          <FeaturedJobs />

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Jobs;