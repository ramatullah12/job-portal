import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        <div className="bg-white rounded-2xl shadow p-8">

          <div className="grid gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="About Me"
              className="border p-3 rounded-lg"
            />

            <button
              className="bg-blue-600 text-white py-3 rounded-lg"
            >
              Save Profile
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;