import { Navigate } from "react-router-dom";

function GuestRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn
    ? <Navigate to="/dashboard" replace />
    : children;
}

export default GuestRoute;