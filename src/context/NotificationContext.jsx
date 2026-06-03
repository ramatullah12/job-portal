import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const NotificationContext =
  createContext();

export function NotificationProvider({
  children,
}) {
  const [notifications, setNotifications] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "notifications"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  const addNotification = (
    message
  ) => {
    const newNotification = {
      id: Date.now(),
      message,
      createdAt:
        new Date().toLocaleString(),
    };

    setNotifications((prev) => [
      newNotification,
      ...prev,
    ]);
  };

  const clearNotifications =
    () => {
      setNotifications([]);
    };

  const removeNotification =
    (id) => {
      setNotifications(
        notifications.filter(
          (item) =>
            item.id !== id
        )
      );
    };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        clearNotifications,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications =
  () =>
    useContext(
      NotificationContext
    );