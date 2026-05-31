const categories = [
  "Technology",
  "Design",
  "Marketing",
  "Finance",
  "Data Science",
  "Human Resource",
];

function JobCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Browse By Category
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Explore jobs from popular categories
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-slate-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="font-semibold">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobCategories;