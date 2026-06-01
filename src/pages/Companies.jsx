import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Google",
      industry: "Technology",
      jobs: 120,
      logo: "🚀",
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Software & Cloud",
      jobs: 95,
      logo: "💻",
    },
    {
      id: 3,
      name: "Amazon",
      industry: "E-Commerce",
      jobs: 80,
      logo: "📦",
    },
    {
      id: 4,
      name: "Meta",
      industry: "Social Media",
      jobs: 65,
      logo: "🌐",
    },
    {
      id: 5,
      name: "Netflix",
      industry: "Entertainment",
      jobs: 30,
      logo: "🎬",
    },
    {
      id: 6,
      name: "Spotify",
      industry: "Music Streaming",
      jobs: 25,
      logo: "🎵",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Top Companies
            </h1>

            <p className="text-gray-500 text-lg">
              Discover world-class companies hiring talented professionals.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-gray-500">
                Companies
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-2">
                {companies.length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-gray-500">
                Open Positions
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-2">
                415+
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-gray-500">
                Industries
              </h3>

              <p className="text-4xl font-bold text-purple-600 mt-2">
                12+
              </p>
            </div>

          </div>

          {/* Company Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
              >

                <div className="text-5xl mb-4">
                  {company.logo}
                </div>

                <h2 className="text-2xl font-bold">
                  {company.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {company.industry}
                </p>

                <p className="mt-4 font-semibold text-blue-600">
                  {company.jobs} Open Jobs
                </p>

                <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                  View Jobs
                </button>

              </div>
            ))}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Companies;