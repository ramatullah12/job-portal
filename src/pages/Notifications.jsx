import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  useNotifications,
} from "../context/NotificationContext";

function Notifications() {
  const {
    notifications,
    clearNotifications,
    removeNotification,
  } = useNotifications();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold dark:text-white">
              Notifications
            </h1>
            {notifications.length >
              0 && (
              <button
                onClick={
                  clearNotifications
                }
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Clear All
              </button>
            )}
          </div>
          {notifications.length ===
          0 ? (
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center">
              <h2 className="text-xl font-semibold dark:text-white">
                No Notifications
              </h2>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map(
                (
                  notification
                ) => (
                  <div
                    key={
                      notification.id
                    }
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow p-5"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="dark:text-white">
                          {
                            notification.message
                          }
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          {
                            notification.createdAt
                          }
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          removeNotification(
                            notification.id
                          )
                        }
                        className="text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Notifications;