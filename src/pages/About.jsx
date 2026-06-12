import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About CareerHub
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              CareerHub is a modern job portal platform that connects
              talented professionals with world-class companies and
              helps users build successful careers.
            </p>
          </div>
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              className="
                bg-white
                dark:bg-slate-800
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                shadow
                p-8
              "
            >
              <div className="text-5xl mb-4">
                🎯
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-7">
                To simplify the job search process and help job seekers
                discover opportunities that match their skills,
                experience, and career goals.
              </p>
            </div>
            <div
              className="
                bg-white
                dark:bg-slate-800
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                shadow
                p-8
              "
            >
              <div className="text-5xl mb-4">
                🚀
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Vision
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                To become one of the leading career platforms where
                professionals and companies can connect, collaborate,
                and grow together.
              </p>
            </div>

          </div>

          {/* Features */}
          <div
            className="
              bg-white
              dark:bg-slate-800
              border
              border-gray-200
              dark:border-slate-700
              rounded-2xl
              shadow
              p-8
              mb-12
            "
          >

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              What CareerHub Offers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="text-center">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Job Discovery
                </h3>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Save Jobs
                </h3>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">📄</div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Applications
                </h3>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Career Tracking
                </h3>
              </div>

            </div>

          </div>

          {/* Technology Stack */}
          <div
            className="
              bg-white
              dark:bg-slate-800
              border
              border-gray-200
              dark:border-slate-700
              rounded-2xl
              shadow
              p-8
            "
          >

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-4">

              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
                React
              </span>

              <span className="bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full font-medium">
                Tailwind CSS
              </span>

              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
                JavaScript
              </span>

              <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium">
                React Router
              </span>

              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
                Local Storage
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;