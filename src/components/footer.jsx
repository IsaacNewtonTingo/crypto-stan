import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
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

  return (
    <div className="bg-gradient-to-r from-gray-900 to-primary-900 px-10 lg:px-40 py-10 lg:py-20">
      <div className="w-full flex flex-col lg:flex-row gap-10 justify-between text-gray-400 ">
        <div className="w-1/4">
          <img
            src="/fx-nest-logo.png"
            alt="Smart Cash INVlogo"
            className="cursor-pointer w-[200px] bg-white p-2 rounded-lg object-contain hover:scale-[1.05] transition-transform duration-300"
            onClick={() => navigate("/")}
          />

          <p className="mt-10">
            Smart Cash Investors is a premier online platform dedicated to
            secure and profitable trading and investment opportunities. We
            provide our clients with a reliable, user-friendly experience,
            ensuring guaranteed returns and empowering them to build a
            prosperous financial future.
          </p>
        </div>

        <div>
          <h4 className={"text-white font-bold mb-4"}>QUICK LINKS</h4>

          <ul className="flex flex-col">
            {navItems.map((item) => {
              return (
                <Link
                  className="hover:text-white hover:font-bold transition-font"
                  to={item.navTo}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className={"text-white font-bold mb-4"}>SUPPORT</h4>

          <ul className="flex flex-col">
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/shipping-policy"}
            >
              Get In touch
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/return-and-refund-policy"}
            >
              Contact Support
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/privacy-policy"}
            >
              Request Callback
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/terms-and-conditions"}
            >
              FAQs
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/payments"}
            >
              Guide
            </Link>
          </ul>
        </div>

        <div>
          <h4 className={"text-white font-bold mb-4"}>LEGAL</h4>

          <ul className="flex flex-col">
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/return-and-refund-policy"}
            >
              Refund Policy
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/privacy-policy"}
            >
              Privacy-policy
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/terms-and-conditions"}
            >
              Terms and Conditions
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/payments"}
            >
              Payments
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/cancellations"}
            >
              Cancellations
            </Link>
          </ul>
        </div>
      </div>

      <p className="text-[12px] text-gray-400 mt-10 lg:mt-20">
        Copyright © 2024. All Rights Reserved. Smart Cash Investors
      </p>
    </div>
  );
}
