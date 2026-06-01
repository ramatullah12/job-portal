import { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );
  }, [bookmarks]);

  const addBookmark = (job) => {
    const exists = bookmarks.find(
      (item) => item.slug === job.slug
    );

    if (!exists) {
      setBookmarks([...bookmarks, job]);
    }
  };

  const removeBookmark = (slug) => {
    setBookmarks(
      bookmarks.filter((job) => job.slug !== slug)
    );
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () =>
  useContext(BookmarkContext);