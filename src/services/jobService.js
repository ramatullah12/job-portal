const API_URL = "https://www.arbeitnow.com/api/job-board-api";

export const getJobs = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.data;
};