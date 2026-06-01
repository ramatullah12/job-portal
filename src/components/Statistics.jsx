function Statistics() {
  const stats = [
    {
      title: "Jobs",
      value: "10K+",
    },
    {
      title: "Companies",
      value: "5K+",
    },
    {
      title: "Candidates",
      value: "50K+",
    },
    {
      title: "Countries",
      value: "100+",
    },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <h2 className="text-5xl font-bold">
                {item.value}
              </h2>

              <p className="mt-3 text-lg">
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