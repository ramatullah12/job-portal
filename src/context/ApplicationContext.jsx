import { createContext, useContext, useState, useEffect } from "react";

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("applications");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  const applyJob = (job) => {
    const exists = applications.find(
      (item) => item.slug === job.slug
    );

    if (!exists) {
      setApplications([...applications, job]);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        applyJob,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplications = () =>
  useContext(ApplicationContext);