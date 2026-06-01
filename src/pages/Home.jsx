import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobCategories from "../components/JobCategories";
import FeaturedJobs from "../components/FeaturedJobs";
import TopCompanies from "../components/TopCompanies";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <JobCategories />
      <FeaturedJobs />
      <TopCompanies />
      <Statistics />
      <Footer />
    </>
  );
}

export default Home;