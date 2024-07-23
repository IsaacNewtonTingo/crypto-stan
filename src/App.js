import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppContext, AppContextProvider } from "./context/app-context";
import { useContext } from "react";
import Login from "./pages/login";
import TermsAndConditions from "./pages/terms-and-conditions";
import PrivacyPolicy from "./pages/privacy-policy";
import ResetPassword from "./pages/reset-password";
import Home from "./pages/home";
import Signup from "./pages/signup";
import FAQs from "./pages/faqs";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    {
      path: "terms-and-conditions",
      element: <TermsAndConditions />,
    },
    {
      path: "privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "faqs",
      element: <FAQs />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
