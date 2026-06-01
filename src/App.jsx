import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import Jobs from "./pages/Jobs";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:slug" element={<JobDetail />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;