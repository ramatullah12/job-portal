function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-10 flex justify-center">

      <div className="relative w-full max-w-2xl">

        {/* Search Icon */}
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search jobs, companies, skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-2xl
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-slate-900
            dark:text-white
            placeholder:text-gray-500
            dark:placeholder:text-gray-400
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
          "
        />

      </div>

    </div>
  );
}

export default SearchBar;