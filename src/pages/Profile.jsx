import { useEffect, useState } from "react";
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

  const [photo, setPhoto] = useState("");
  const [resumeName, setResumeName] = useState("");

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    const savedPhoto = localStorage.getItem("profilePhoto");
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }

    const savedResume = localStorage.getItem("resumeName");
    if (savedResume) {
      setResumeName(savedResume);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
      localStorage.setItem(
        "profilePhoto",
        reader.result
      );
    };

    reader.readAsDataURL(file);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setResumeName(file.name);

    localStorage.setItem(
      "resumeName",
      file.name
    );
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
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Sidebar */}
            <div className="bg-white rounded-2xl shadow p-6">

              <div className="flex flex-col items-center">

                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                    👤
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="mt-4"
                />

                <h2 className="text-xl font-semibold mt-4">
                  {profile.fullName || "Your Name"}
                </h2>

                <p className="text-gray-500">
                  {profile.email || "your@email.com"}
                </p>

              </div>

              <hr className="my-6" />

              <h3 className="font-semibold mb-3">
                Resume
              </h3>

              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeChange}
              />

              {resumeName && (
                <p className="text-green-600 mt-3 text-sm">
                  Uploaded: {resumeName}
                </p>
              )}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow p-8"
              >

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="border rounded-lg p-3"
                  />

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border rounded-lg p-3"
                  />

                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="border rounded-lg p-3"
                  />

                </div>

                <textarea
                  name="skills"
                  value={profile.skills}
                  onChange={handleChange}
                  placeholder="Skills"
                  className="border rounded-lg p-3 mt-4 w-full"
                  rows="3"
                />

                <textarea
                  name="experience"
                  value={profile.experience}
                  onChange={handleChange}
                  placeholder="Work Experience"
                  className="border rounded-lg p-3 mt-4 w-full"
                  rows="4"
                />

                <textarea
                  name="about"
                  value={profile.about}
                  onChange={handleChange}
                  placeholder="About Me"
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

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;