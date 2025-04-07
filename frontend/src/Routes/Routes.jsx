import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout.jsx";
import Home from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: 1,
        element: <Home />,
      },
    ],
  },
]);

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
