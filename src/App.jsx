import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout.jsx";
import { Home } from "./components/pages/Home.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
