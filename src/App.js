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
import AboutUs from "./pages/about-us";
import Plans from "./pages/plans";
import ContactUs from "./pages/contact-us";
import Dashboard from "./pages/dashboard/dashboard";
import DashboardContainer from "./components/dashboard/container";
import Deposit from "./pages/dashboard/deposit";
import Withdraw from "./pages/dashboard/withdraw";
import Transactions from "./pages/dashboard/transactions";
import Referrals from "./pages/dashboard/referrals";
import MyPlan from "./pages/dashboard/my-plan";
import AdminLayout from "./layouts/admin-layout";
import Users from "./pages/admin/users";
import Deposits from "./pages/admin/deposits";
import Withdrawals from "./pages/admin/withdrawals";
import AdminTransactions from "./pages/admin/transactions";
import AdminReferrals from "./pages/admin/referrals";
import UserDetails from "./pages/admin/user-details";
import ForgotPassword from "./pages/forgot-password";

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
      path: "forgot-password",
      element: <ForgotPassword />,
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
    {
      path: "about-us",
      element: <AboutUs />,
    },
    // {
    //   path: "plans",
    //   element: <Plans />,
    // },
    {
      path: "contact-us",
      element: <ContactUs />,
    },
    {
      path: "/dashboard",
      element: <DashboardContainer />,
      children: [
        {
          path: "deposit",
          element: <Deposit />,
        },
        {
          path: "withdraw",
          element: <Withdraw />,
        },
        {
          path: "transactions",
          element: <Transactions />,
        },
        {
          path: "referrals",
          element: <Referrals />,
        },
        // {
        //   path: "my-plan",
        //   element: <MyPlan />,
        // },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "users/:id",
          element: <UserDetails />,
        },
        {
          path: "deposits",
          element: <Deposits />,
        },
        {
          path: "withdrawals",
          element: <Withdrawals />,
        },
        {
          path: "transactions",
          element: <AdminTransactions />,
        },
        {
          path: "referrals",
          element: <AdminReferrals />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
