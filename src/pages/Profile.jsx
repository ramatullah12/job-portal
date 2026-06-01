import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    about: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "userProfile",
      JSON.stringify(profile)
    );

    alert("Profile saved successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-10">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow p-8"
          >

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                className="border rounded-lg p-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                onChange={handleChange}
                className="border rounded-lg p-3"
              />

            </div>

            <textarea
              name="skills"
              placeholder="Skills (React, Laravel, JavaScript)"
              onChange={handleChange}
              className="border rounded-lg p-3 mt-4 w-full"
              rows="3"
            />

            <textarea
              name="experience"
              placeholder="Work Experience"
              onChange={handleChange}
              className="border rounded-lg p-3 mt-4 w-full"
              rows="4"
            />

            <textarea
              name="about"
              placeholder="About Me"
              onChange={handleChange}
              className="border rounded-lg p-3 mt-4 w-full"
              rows="5"
            />

            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Profile
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;