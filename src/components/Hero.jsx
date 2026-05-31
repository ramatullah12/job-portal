function Hero() {
  return (
    <section className="bg-slate-50 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Find Your
            <span className="text-blue-600"> Dream Job </span>
            Today
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Explore thousands of job opportunities from
            top companies around the world.
          </p>

          <div className="mt-8 flex gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full border rounded-xl px-4 py-3"
            />

            <button className="bg-blue-600 text-white px-6 rounded-xl">
              Search
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
            alt="Career"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;