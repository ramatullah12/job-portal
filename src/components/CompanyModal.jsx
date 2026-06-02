import React from "react";

function CompanyModal({
  company,
  onClose,
}) {
  if (!company) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          dark:bg-slate-800
          rounded-2xl
          p-8
          w-full
          max-w-lg
          shadow-xl
          relative
        "
      >

        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-gray-500
            hover:text-red-500
            text-xl
          "
        >
          ✕
        </button>

        <div className="text-center">

          <div className="text-6xl mb-4">
            {company.logo}
          </div>

          <h2 className="text-3xl font-bold dark:text-white">
            {company.name}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {company.industry}
          </p>

        </div>

        <div className="mt-6 space-y-4">

          <div>
            <h3 className="font-semibold dark:text-white">
              Description
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              {company.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold dark:text-white">
              Open Jobs
            </h3>

            <p className="text-blue-600 font-semibold">
              {company.jobs}
            </p>
          </div>

          <div>
            <h3 className="font-semibold dark:text-white">
              Website
            </h3>

            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              Visit Website
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CompanyModal;