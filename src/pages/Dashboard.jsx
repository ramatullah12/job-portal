import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold">
                Saved Jobs
              </h2>

              <p className="text-4xl font-bold mt-4">
                0
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold">
                Applied Jobs
              </h2>

              <p className="text-4xl font-bold mt-4">
                0
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold">
                Profile Completion
              </h2>

              <p className="text-4xl font-bold mt-4">
                20%
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;