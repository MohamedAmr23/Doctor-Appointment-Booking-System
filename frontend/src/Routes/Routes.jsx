import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Doctors from "../pages/Doctors.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import MyAppointments from "../pages/MyAppointments.jsx";
import Appointment from "../pages/Appointment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'doctors',
        element:<Doctors/>,
      },
      {
        path: 'doctors/:speciality',
        element:<Doctors/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/my-profile',
        element: <MyProfile/>,
      },
      {
        path: '/my-appointments',
        element: <MyAppointments/>,
      },
      {
        path: '/appointments/:docId',
        element: <Appointment/>,
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
