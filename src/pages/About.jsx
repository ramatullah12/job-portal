import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-10">

          <h1 className="text-5xl font-bold mb-6">
            About CareerHub
          </h1>

          <p className="text-lg text-gray-600 leading-8">
            CareerHub is a modern job portal application built
            with React and Tailwind CSS. The platform helps
            job seekers discover opportunities, save jobs,
            manage applications, and track their career growth.
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;