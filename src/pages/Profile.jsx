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
    linkedin: "",
    github: "",
  });

  const [photo, setPhoto] = useState("");
  const [resumeName, setResumeName] =
    useState("");

  const [lastUpdated, setLastUpdated] =
    useState(
      localStorage.getItem(
        "profileUpdatedAt"
      ) || ""
    );

  useEffect(() => {
    const savedProfile =
      localStorage.getItem(
        "userProfile"
      );

    if (savedProfile) {
      setProfile(
        JSON.parse(savedProfile)
      );
    }

    const savedPhoto =
      localStorage.getItem(
        "profilePhoto"
      );

    if (savedPhoto) {
      setPhoto(savedPhoto);
    }

    const savedResume =
      localStorage.getItem(
        "resumeName"
      );

    if (savedResume) {
      setResumeName(savedResume);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.value,
    });
  };

  const handlePhotoChange = (
    e
  ) => {
    const file =
      e.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);

      localStorage.setItem(
        "profilePhoto",
        reader.result
      );
    };

    reader.readAsDataURL(file);
  };

  const handleResumeChange = (
    e
  ) => {
    const file =
      e.target.files[0];

    if (!file) return;

    setResumeName(file.name);

    localStorage.setItem(
      "resumeName",
      file.name
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !profile.fullName ||
      !profile.email
    ) {
      alert(
        "Full Name and Email are required"
      );
      return;
    }

    localStorage.setItem(
      "userProfile",
      JSON.stringify(profile)
    );

    localStorage.setItem(
      "userName",
      profile.fullName
    );

    const updateDate =
      new Date().toLocaleString();

    localStorage.setItem(
      "profileUpdatedAt",
      updateDate
    );

    setLastUpdated(
      updateDate
    );

    alert(
      "Profile saved successfully!"
    );
  };

  const handleResetProfile =
    () => {
      const confirmReset =
        window.confirm(
          "Reset profile data?"
        );

      if (!confirmReset) return;

      localStorage.removeItem(
        "userProfile"
      );
      localStorage.removeItem(
        "profilePhoto"
      );
      localStorage.removeItem(
        "resumeName"
      );
      localStorage.removeItem(
        "profileUpdatedAt"
      );

      setProfile({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        skills: "",
        experience: "",
        about: "",
        linkedin: "",
        github: "",
      });

      setPhoto("");
      setResumeName("");
      setLastUpdated("");
    };

  const completion =
    Math.round(
      (
        Object.values(
          profile
        ).filter(
          (item) =>
            item !== ""
        ).length /
        Object.keys(profile)
          .length
      ) * 100
    );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            My Profile
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Sidebar */}
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-6">

              <div className="flex flex-col items-center">

                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border border-gray-300 dark:border-slate-600"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-5xl">
                    👤
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={
                    handlePhotoChange
                  }
                  className="mt-4 text-sm dark:text-white"
                />

                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-4">
                  {profile.fullName ||
                    "Your Name"}
                </h2>

                <p className="text-gray-500 dark:text-gray-400">
                  {profile.email ||
                    "your@email.com"}
                </p>

                <div className="mt-3">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      completion >=
                      80
                        ? "bg-green-100 text-green-700"
                        : completion >=
                          50
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {completion >=
                    80
                      ? "Profile Complete"
                      : completion >=
                        50
                      ? "Almost Complete"
                      : "Incomplete"}
                  </span>

                </div>

                <div className="w-full mt-6">

                  <div className="flex justify-between mb-2">
                    <span className="text-sm dark:text-white">
                      Profile Completion
                    </span>
                    <span className="text-blue-600 font-semibold">
                      {completion}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{
                        width: `${completion}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="w-full mt-6 bg-slate-100 dark:bg-slate-700 p-4 rounded-xl">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Last Updated
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                    {lastUpdated ||
                      "Never"}
                  </p>
                </div>

              </div>
              <hr className="my-6 border-gray-300 dark:border-slate-700" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Resume
              </h3>
              <input
                type="file"
                accept=".pdf"
                onChange={
                  handleResumeChange
                }
                className="text-sm dark:text-white"
              />
              {resumeName && (
                <p className="text-green-600 mt-3 text-sm">
                  Uploaded:
                  {" "}
                  {resumeName}
                </p>
              )}

              <hr className="my-6 border-gray-300 dark:border-slate-700" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Quick Info
              </h3>

              <div className="space-y-3 text-sm">
                <p className="dark:text-gray-300">
                  📍{" "}
                  {profile.location ||
                    "-"}
                </p>
                <p className="dark:text-gray-300">
                  📞{" "}
                  {profile.phone ||
                    "-"}
                </p>
                <p className="dark:text-gray-300">
                  💼{" "}
                  {profile.skills ||
                    "-"}
                </p>
              </div>
            </div>
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={
                  handleSubmit
                }
                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow p-8"
              >
                {/* semua input dan textarea milikmu tetap di sini */}
                <button
                  type="submit"
                  className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Save Profile
                </button>
                <button
                  type="button"
                  onClick={
                    handleResetProfile
                  }
                  className="mt-6 ml-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Reset Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;