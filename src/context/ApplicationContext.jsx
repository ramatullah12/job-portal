import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ApplicationContext = createContext();

export function ApplicationProvider({
  children,
}) {
  const [applications, setApplications] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "applications"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  const applyJob = (job) => {
    const exists =
      applications.find(
        (item) =>
          item.slug === job.slug
      );

    if (exists) {
      alert(
        "You have already applied for this job."
      );
      return false;
    }

    const newApplication = {
      ...job,
      appliedAt:
        new Date().toLocaleDateString(
          "id-ID"
        ),
      status: "Pending",
    };

    setApplications(
      (prev) => [
        ...prev,
        newApplication,
      ]
    );

    alert(
      "Application submitted successfully!"
    );

    return true;
  };

  const removeApplication = (
    slug
  ) => {
    setApplications(
      applications.filter(
        (job) =>
          job.slug !== slug
      )
    );
  };

  const clearApplications =
    () => {
      const confirmDelete =
        window.confirm(
          "Are you sure you want to remove all applications?"
        );

      if (confirmDelete) {
        setApplications([]);
      }
    };

  const updateApplicationStatus =
    (slug, status) => {
      setApplications(
        applications.map((job) =>
          job.slug === slug
            ? {
                ...job,
                status,
              }
            : job
        )
      );
    };

  const totalApplications =
    applications.length;

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        totalApplications,
        applyJob,
        removeApplication,
        clearApplications,
        updateApplicationStatus,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplications =
  () =>
    useContext(
      ApplicationContext
    );