function Hero() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 min-h-[85vh] flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 text-sm font-medium mb-6">
            🚀 Trusted by 1000+ Companies
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
            Find Your
            <span className="block text-blue-600">
              Dream Job
            </span>
            Today
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Explore thousands of opportunities from top companies
            around the world and take the next step in your career.
          </p>

          {/* Search Box */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              className="
                flex-1
                px-5
                py-4
                rounded-xl
                border
                border-gray-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                text-slate-900
                dark:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              className="
                px-8
                py-4
                bg-blue-600
                text-white
                rounded-xl
                hover:bg-blue-700
                transition
                font-semibold
              "
            >
              Search
            </button>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                10K+
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Jobs
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-600">
                500+
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Companies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-600">
                50K+
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                Candidates
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
            alt="CareerHub"
            className="
              rounded-3xl
              shadow-2xl
              w-full
              max-w-xl
              object-cover
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;