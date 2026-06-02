import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const SearchHistoryContext =
  createContext();

export function SearchHistoryProvider({
  children,
}) {
  const [history, setHistory] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "searchHistory"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "searchHistory",
      JSON.stringify(history)
    );
  }, [history]);

  const addSearch = (keyword) => {
    if (!keyword.trim()) return;

    const updated = [
      keyword,
      ...history.filter(
        (item) => item !== keyword
      ),
    ].slice(0, 10);

    setHistory(updated);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <SearchHistoryContext.Provider
      value={{
        history,
        addSearch,
        clearHistory,
      }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
}

export const useSearchHistory =
  () =>
    useContext(
      SearchHistoryContext
    );