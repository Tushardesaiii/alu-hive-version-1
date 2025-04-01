import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout_final.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Services from "./components/Services/Services.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Login/signup.jsx";
import Dashboard from "./components/mainPAGE/Dashboard.jsx";
import ComplProfile from "./components/mainPAGE/ComplProfile.jsx";
import ProtectedRoute from "./components/firebaseauth/Protectedroute.jsx"; // ✅ Import protected route
import DonerPage from "./components/donation/DonerPage.jsx";
import Job from "./components/jobs/Job.jsx";
import Mentorship from "./components/mentorship/Mentorship.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "complprofile", element: <ComplProfile/> },
      { path: "Donation", element: < DonerPage /> },
      { path: "/internship-job", element: <Job/> },
      { path: "/mentorship", element: <Mentorship/> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      }, // ✅ Dashboard is now protected
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
