function TopCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Spotify",
    "Meta",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Trusted By Top Companies
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Join thousands of professionals working at leading companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-slate-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg">
                {company}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopCompanies;