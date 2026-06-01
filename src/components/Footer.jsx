function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              CareerHub
            </h2>

            <p className="mt-4 text-gray-400">
              Find your dream job and connect with
              top companies around the world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Jobs</li>
              <li>Companies</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 CareerHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;