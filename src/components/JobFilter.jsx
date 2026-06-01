function JobFilter({ selectedType, setSelectedType }) {
  const types = [
    "All",
    "Full Time",
    "Part Time",
    "Internship",
    "Remote",
  ];

  return (
    <div className="mb-8">
      <h3 className="font-semibold mb-4">
        Filter Job Type
      </h3>

      <div className="flex flex-wrap gap-3">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg border ${
              selectedType === type
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobFilter;