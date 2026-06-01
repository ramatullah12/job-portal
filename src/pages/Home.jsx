import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobCategories from "../components/JobCategories";
import FeaturedJobs from "../components/FeaturedJobs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <JobCategories />
      <FeaturedJobs />
    </>
  );
}

export default Home;