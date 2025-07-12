import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/landing-page";
import LoginPage from "./components/login-page";
import SignupPage from "./components/signup-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App