import React, { useContext, useEffect } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "../../pages/dashboard/dashboard";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AppContext } from "../../context/app-context";
import secureLocalStorage from "react-secure-storage";

export default function DashboardContainer({ children }) {
  const { userData, setUserData } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/user/${userData?._id}`;
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.status === "Success") {
        setUserData(response.data.data);
        secureLocalStorage.setItem("userData", response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occured while getting user");
    }
  }
  return (
    <div className="bg-gray-900">
      <Header />
      <Toaster />

      <div className="flex justify-between">
        <Sidebar />

        <div className="w-full lg:w-[75%] ml-auto mt-[70px] p-6 lg:p-10 min-h-screen">
          {location.pathname === "/dashboard" && <Dashboard />}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
