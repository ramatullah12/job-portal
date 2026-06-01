function Hero() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
            Find Your
            <span className="text-blue-600">
              {" "}Dream Job{" "}
            </span>
            Today
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Explore thousands of job opportunities from
            top companies around the world.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search jobs..."
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
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              className="
                bg-blue-600
                text-white
                px-8
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
              "
            >
              Search
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
            alt="Career"
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