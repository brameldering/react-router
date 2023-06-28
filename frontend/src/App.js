import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
