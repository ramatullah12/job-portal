function Statistics() {
  const stats = [
    {
      title: "Jobs",
      value: "10K+",
      icon: "💼",
      color: "text-blue-500",
    },
    {
      title: "Companies",
      value: "5K+",
      icon: "🏢",
      color: "text-green-500",
    },
    {
      title: "Candidates",
      value: "50K+",
      icon: "👨‍💻",
      color: "text-purple-500",
    },
    {
      title: "Countries",
      value: "100+",
      icon: "🌍",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            CareerHub Statistics
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Trusted by thousands of companies and professionals worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                dark:bg-slate-800
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h2
                className={`text-5xl font-bold ${item.color}`}
              >
                {item.value}
              </h2>

              <p className="mt-3 text-lg text-slate-700 dark:text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;