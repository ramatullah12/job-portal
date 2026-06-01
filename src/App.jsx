import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Bookmarks from "./pages/Bookmarks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Companies from "./pages/Companies";
import AppliedJobs from "./pages/AppliedJobs";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Jobs */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:slug" element={<JobDetail />} />

        {/* User */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/applications" element={<AppliedJobs />} />

        {/* Companies */}
        <Route path="/companies" element={<Companies />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold">
                404 - Page Not Found
              </h1>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;