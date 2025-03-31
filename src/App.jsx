import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout.jsx";
import { Home } from "./components/pages/Home.jsx";
import { Profile } from "./components/pages/Profile.jsx";
import { SingularPost } from "./components/pages/SingularPost.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <SingularPost />,
      },
      {
        path: "/messages",
        element: <Home />,
      },
      {
        path: "/messages/:id",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
