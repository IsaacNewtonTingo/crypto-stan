import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Admin from "../pages/admin/admin";
import AdminSidebar from "../components/admin/admin-sidebar";
import AdminHeader from "../components/admin/admin-header";

export default function AdminLayout({ children }) {
  const location = useLocation();
  return (
    <div className="bg-gray-900">
      <AdminHeader />

      <div className="flex justify-between">
        <AdminSidebar />

        <div className="w-full lg:w-[75%] ml-auto mt-[70px] p-6 lg:p-10 min-h-screen">
          {location.pathname === "/admin" && <Admin />}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
