function TopCompanies() {
  const companies = [
    {
      name: "Google",
      logo: "🔍",
    },
    {
      name: "Microsoft",
      logo: "🪟",
    },
    {
      name: "Amazon",
      logo: "📦",
    },
    {
      name: "Netflix",
      logo: "🎬",
    },
    {
      name: "Spotify",
      logo: "🎵",
    },
    {
      name: "Meta",
      logo: "🌐",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Trusted By Top Companies
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-300 mb-12">
          Join thousands of professionals working at leading companies
        </p>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {companies.map((company) => (
            <div
              key={company.name}
              className="
                bg-slate-50
                dark:bg-slate-800
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                p-6
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <div className="text-4xl mb-3">
                {company.logo}
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {company.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TopCompanies;