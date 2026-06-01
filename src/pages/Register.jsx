import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

          <h1 className="text-3xl font-bold text-center mb-6">
            Register
          </h1>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Create Account
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Register;