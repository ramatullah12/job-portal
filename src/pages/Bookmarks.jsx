import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

import {
  useBookmarks,
} from "../context/BookmarkContext";

function Bookmarks() {
  const { bookmarks } = useBookmarks();

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold mb-10">
          Saved Jobs
        </h1>

        {bookmarks.length === 0 ? (
          <p>No saved jobs.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookmarks.map((job) => (
              <JobCard
                key={job.slug}
                job={job}
              />
            ))}
          </div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Bookmarks;