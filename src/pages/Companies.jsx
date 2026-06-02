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
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Technology",
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
      industry: "Music",
      jobs: 25,
      logo: "🎵",
    },
  ];

  const [search, setSearch] = useState("");
  const [industry, setIndustry] =
    useState("All");

  const industries = [
    "All",
    ...new Set(
      companiesData.map(
        (item) => item.industry
      )
    ),
  ];

  const filteredCompanies =
    companiesData.filter((company) => {
      const matchesSearch =
        company.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

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

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="text-center mb-10">

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Top Companies
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-3">
              Explore companies hiring now.
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
          <div className="flex flex-col md:flex-row gap-4 mb-8">

            <input
              type="text"
              placeholder="Search company..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                flex-1
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                dark:text-white
                rounded-xl
                px-4
                py-3
              "
            />

            <select
              value={industry}
              onChange={(e) =>
                setIndustry(
                  e.target.value
                )
              }
              className="
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                dark:text-white
                rounded-xl
                px-4
                py-3
              "
            >
              {industries.map(
                (item) => (
                  <option
                    key={item}
                  >
                    {item}
                  </option>
                )
              )}
            </select>

          </div>

          {/* Company Cards */}
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

      </main>

      <Footer />
    </>
  );
}

export default Companies;