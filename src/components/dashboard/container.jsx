import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "../../pages/dashboard/dashboard";

export default function DashboardContainer({ children }) {
  const location = useLocation();
  return (
    <div className="bg-gray-900">
      <Header />

      <div className="flex justify-between">
        <Sidebar />

        <div className="w-[75%] ml-auto mt-[70px] p-10 min-h-screen">
          {location.pathname === "/dashboard" && <Dashboard />}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
