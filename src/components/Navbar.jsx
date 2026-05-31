function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            CareerHub
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Jobs
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Companies
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;