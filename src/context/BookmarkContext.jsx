import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({
  children,
}) {
  const [bookmarks, setBookmarks] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "bookmarks"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );
  }, [bookmarks]);

  const addBookmark = (job) => {
    const exists =
      bookmarks.find(
        (item) =>
          item.slug === job.slug
      );

    if (exists) {
      alert(
        "This job is already saved."
      );
      return false;
    }

    setBookmarks((prev) => [
      ...prev,
      {
        ...job,
        savedAt:
          new Date().toLocaleDateString(
            "id-ID"
          ),
      },
    ]);

    alert(
      "Job saved successfully!"
    );

    return true;
  };

  const removeBookmark = (
    slug
  ) => {
    setBookmarks((prev) =>
      prev.filter(
        (job) =>
          job.slug !== slug
      )
    );
  };

  const clearBookmarks =
    () => {
      const confirmDelete =
        window.confirm(
          "Remove all saved jobs?"
        );

      if (confirmDelete) {
        setBookmarks([]);
      }
    };

  const isBookmarked = (
    slug
  ) => {
    return bookmarks.some(
      (job) =>
        job.slug === slug
    );
  };
  const totalBookmarks =
    bookmarks.length;

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        totalBookmarks,
        addBookmark,
        removeBookmark,
        clearBookmarks,
        isBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks =
  () =>
    useContext(
      BookmarkContext
    );