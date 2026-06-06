import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Companies() {
  const companiesData = [
    {
      id: 1,
      name: "Google",
      industry: "Technology",
      jobs: 120,
      logo: "🚀",
      website: "https://google.com",
      description:
        "Google is a global technology company specializing in search engines, cloud computing, artificial intelligence, and digital services.",
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Technology",
      jobs: 95,
      logo: "💻",
      website: "https://microsoft.com",
      description:
        "Microsoft develops software, cloud platforms, AI solutions, and enterprise technologies used worldwide.",
    },
    {
      id: 3,
      name: "Amazon",
      industry: "E-Commerce",
      jobs: 80,
      logo: "📦",
      website: "https://amazon.com",
      description:
        "Amazon is one of the world's largest e-commerce and cloud computing companies.",
    },
    {
      id: 4,
      name: "Meta",
      industry: "Social Media",
      jobs: 65,
      logo: "🌐",
      website: "https://meta.com",
      description:
        "Meta develops social networking platforms, virtual reality, and digital communication technologies.",
    },
    {
      id: 5,
      name: "Netflix",
      industry: "Entertainment",
      jobs: 30,
      logo: "🎬",
      website: "https://netflix.com",
      description:
        "Netflix is a leading streaming entertainment company serving millions of users worldwide.",
    },
    {
      id: 6,
      name: "Spotify",
      industry: "Music",
      jobs: 25,
      logo: "🎵",
      website: "https://spotify.com",
      description:
        "Spotify is one of the largest music streaming platforms with users across the globe.",
    },
  ];

  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [selectedCompany, setSelectedCompany] =
    useState(null);

  const industries = [
    "All",
    ...new Set(
      companiesData.map(
        (company) => company.industry
      )
    ),
  ];

  const filteredCompanies =
    companiesData.filter((company) => {
      const matchesSearch =
        company.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesIndustry =
        industry === "All" ||
        company.industry === industry;

      return (
        matchesSearch &&
        matchesIndustry
      );
    });

  const totalJobs =
    companiesData.reduce(
      (sum, company) =>
        sum + company.jobs,
      0
    );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="text-center mb-10">

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Top Companies
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-3">
              Explore companies hiring talented professionals worldwide.
            </p>

          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
              <h3 className="text-gray-500 dark:text-gray-400">
                Companies
              </h3>

              <p className="text-4xl font-bold text-blue-600 mt-2">
                {companiesData.length}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
              <h3 className="text-gray-500 dark:text-gray-400">
                Open Jobs
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-2">
                {totalJobs}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
              <h3 className="text-gray-500 dark:text-gray-400">
                Industries
              </h3>

              <p className="text-4xl font-bold text-purple-600 mt-2">
                {industries.length - 1}
              </p>
            </div>

          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">

            <input
              type="text"
              placeholder="Search company..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                flex-1
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                dark:text-white
              "
            />

            <select
              value={industry}
              onChange={(e) =>
                setIndustry(e.target.value)
              }
              className="
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                dark:text-white
              "
            >
              {industries.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredCompanies.map(
              (company) => (
                <div
                  key={company.id}
                  className="
                    bg-white
                    dark:bg-slate-800
                    rounded-2xl
                    shadow
                    p-6
                    hover:shadow-xl
                    transition
                  "
                >

                  <div className="text-5xl mb-4">
                    {company.logo}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {company.name}
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {company.industry}
                  </p>

                  <p className="text-blue-600 font-semibold mt-4">
                    {company.jobs} Open Jobs
                  </p>

                  <button
                    onClick={() =>
                      setSelectedCompany(
                        company
                      )
                    }
                    className="
                      mt-5
                      w-full
                      bg-blue-600
                      text-white
                      py-3
                      rounded-xl
                      hover:bg-blue-700
                    "
                  >
                    View Company
                  </button>

                </div>
              )
            )}

          </div>

        </div>

        {/* Modal */}
        {selectedCompany && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-lg w-full relative">

              <button
                onClick={() =>
                  setSelectedCompany(null)
                }
                className="absolute top-4 right-4 text-xl dark:text-white"
              >
                ✕
              </button>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {selectedCompany.logo}
                </div>
                <h2 className="text-3xl font-bold dark:text-white">
                  {selectedCompany.name}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {selectedCompany.industry}
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {selectedCompany.description}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Open Jobs
                  </h3>
                  <p className="text-blue-600 font-semibold mt-2">
                    {selectedCompany.jobs}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">
                    Website
                  </h3>
                  <a
                    href={selectedCompany.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
export default Companies;