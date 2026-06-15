import { useSearchHistory } from "../context/SearchHistoryContext";

function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  const {
    history,
    addSearch,
    clearHistory,
  } = useSearchHistory();

  const handleSearch = (value) => {
    setSearchTerm(value);
    addSearch(value);
  };

  return (
    <div className="mb-10">

      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) =>
          handleSearch(
            e.target.value
          )
        }
        className="
          w-full
          border
          border-gray-300
          dark:border-slate-600
          bg-white
          dark:bg-slate-800
          dark:text-white
          rounded-xl
          px-4
          py-3
        "
      />

      {history.length > 0 && (
        <div
          className="
            mt-4
            bg-white
            dark:bg-slate-800
            rounded-xl
            shadow
            p-4
          "
        >

          <div className="flex justify-between mb-3">

            <h3 className="font-semibold dark:text-white">
              Recent Searches
            </h3>

            <button
              onClick={clearHistory}
              className="text-red-500"
            >
              Clear
            </button>

          </div>

          <div className="flex flex-wrap gap-2">

            {history.map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSearchTerm(
                      item
                    )
                  }
                  className="
                    bg-blue-100
                    text-blue-600
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  {item}
                </button>
              )
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default SearchBar;