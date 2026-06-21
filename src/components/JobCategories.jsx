const categories = [
  {
    name: "Technology",
    icon: "💻",
  },
  {
    name: "Design",
    icon: "🎨",
  },
  {
    name: "Marketing",
    icon: "📈",
  },
  {
    name: "Finance",
    icon: "💰",
  },
  {
    name: "Data Science",
    icon: "📊",
  },
  {
    name: "Human Resource",
    icon: "👥",
  },
];

function JobCategories() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Browse By Category
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-12">
          Explore jobs from popular categories
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="
                bg-slate-50
                dark:bg-slate-800
                border
                border-gray-200
                dark:border-slate-700
                p-6
                rounded-2xl
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <div className="text-4xl mb-3">
                {category.icon}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {category.name}
              </h3>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}
export default JobCategories;