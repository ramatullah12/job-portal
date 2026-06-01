import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Companies() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-5xl font-bold mb-4">
            Top Companies
          </h1>

          <p className="text-gray-500 mb-10">
            Explore companies hiring right now.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold">
                Google
              </h2>

              <p className="text-gray-500 mt-2">
                Technology Company
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold">
                Microsoft
              </h2>

              <p className="text-gray-500 mt-2">
                Software & Cloud
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold">
                Amazon
              </h2>

              <p className="text-gray-500 mt-2">
                E-Commerce & Cloud
              </p>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Companies;