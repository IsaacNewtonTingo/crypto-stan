import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import secureLocalStorage from "react-secure-storage";
import { googleLogout } from "@react-oauth/google";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "./primary-button";
import SecondaryButton from "./secondary-button";
import NotifModal from "./notifications-modal";

export default function Header() {
  const {
    userData,
    setUserData,
    searchContainer,
    setSearchContainer,
    cart,
    cartLength,
    notifOpen,
  } = useContext(AppContext);
  const navItems = [
    {
      name: "Home",
      navTo: "/",
    },
    {
      name: "About Us",
      navTo: "/about-us",
    },
    {
      name: "Plans",
      navTo: "/plans",
    },
    {
      name: "FAQs",
      navTo: "/faqs",
    },
    {
      name: "Contact Us",
      navTo: "/contact-us",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const [open, setopen] = useState(false);

  function toggleMenu() {
    setopen(!open);
  }

  async function logout() {
    secureLocalStorage.clear();
    setUserData(null);
    navigate("/");
    googleLogout();
  }
  return (
    <div className="fixed w-full flex items-center justify-center top-0 right-0 z-40">
      <div className="h-[80px] px-4 lg:px-40 w-full bg-gray-100 shadow-lg flex items-center justify-between lg:bg-opacity-80 lg:backdrop-blur-lg">
        <img
          src="/fx-nest-logo.png"
          alt="FX nest logo"
          className="cursor-pointer w-[150px]  object-contain hover:scale-[1.05] transition-transform duration-300"
          onClick={() => navigate("/")}
        />

        <div className="hidden lmd:hidden lg:flex gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.navTo;
            const linkStyles = isActive
              ? "font-black text-myDark"
              : "text-gray-700 font-semibold hover:font-bold transition-font";

            return (
              <div key={item.name}>
                <Link to={item.navTo} className={`${linkStyles}`}>
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>

        {!open ? (
          <div className="flex items-center gap-2">
            <div className="w-[140px]">
              <PrimaryButton
                onClick={() => navigate("/login")}
                className="font-bold"
              >
                Login
              </PrimaryButton>
            </div>

            <div className="w-[140px]">
              <SecondaryButton onClick={() => navigate("/signup")} className="">
                Register
              </SecondaryButton>
            </div>
            <svg
              onClick={toggleMenu}
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="text-[40px] lmd:block lg:hidden"
            >
              <path
                fill="currentColor"
                d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 18a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM11 11a1 1 0 100 2h8a1 1 0 100-2h-8z"
              />
            </svg>
          </div>
        ) : (
          <>
            <svg
              onClick={toggleMenu}
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="text-[40px] lmd:block lg:hidden"
            >
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>

            <div className="fixed top-[80px] left-0 right-0 z-80 w-full bg-[rgba(0,0,0,0.6)] h-screen flex justify-center">
              <div className="w-full p-6 gap-4 bg-gray-100 h-screen">
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.navTo;
                    const linkStyles = isActive
                      ? "underline font-black text-myDark"
                      : "text-gray-700 font-semibold hover:font-bold transition-font ";

                    return (
                      <div key={item.name}>
                        <Link
                          href={item.navTo}
                          className={`${linkStyles}`}
                          onClick={() => {
                            toggleMenu();
                          }}
                        >
                          {item.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
