import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

import { BookmarkProvider } from "./context/BookmarkContext";
import { ApplicationProvider } from "./context/ApplicationContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookmarkProvider>
      <ApplicationProvider>
        <App />
      </ApplicationProvider>
    </BookmarkProvider>
  </StrictMode>
);