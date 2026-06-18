import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600">
              CareerHub
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Find your dream job and connect with top
              companies around the world. Build your
              future career with CareerHub.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">

              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/companies"
                  className="hover:text-blue-600 transition"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  to="/jobs"
                  className="hover:text-blue-600 transition"
                >
                  Careers
                </Link>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">

              <li>
                <Link
                  to="/jobs"
                  className="hover:text-blue-600 transition"
                >
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/applications"
                  className="hover:text-blue-600 transition"
                >
                  Applications
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-blue-600 transition"
                >
                  Dashboard
                </Link>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition"
                >
                  Cookie Policy
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 dark:border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 CareerHub. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">

            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;