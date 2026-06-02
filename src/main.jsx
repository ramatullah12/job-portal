import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { ApplicationProvider } from "./context/ApplicationContext";
import { SearchHistoryProvider, } from "./context/SearchHistoryContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BookmarkProvider>
    <ApplicationProvider>
      <SearchHistoryProvider>
        <App />
      </SearchHistoryProvider>
    </ApplicationProvider>
  </BookmarkProvider>
</StrictMode>
);