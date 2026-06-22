function JobFilter({ selectedType, setSelectedType }) {
  const types = [
    "All",
    "Full Time",
    "Part Time",
    "Internship",
    "Remote",
  ];

  return (
    <div className="mb-10">

      {/* Title */}
      <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
        Filter Job Type
      </h3>

    
      <div className="flex flex-wrap gap-3">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`
              px-5
              py-3
              rounded-xl
              font-medium
              transition-all
              duration-300
              border
              ${
                selectedType === type
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700"
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobFilter;