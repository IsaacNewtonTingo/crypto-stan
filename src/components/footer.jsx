import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-900 px-10 lg:px-40 py-10 lg:py-20">
      <div className="w-full flex flex-col lg:flex-row gap-10 justify-between text-gray-400 ">
        <div>
          <h4 className={"text-white font-bold mb-4"}>CONTACT INFORMATION</h4>

          <ul className="flex flex-col">
            <a
              href="mailto:customjerseyskenya@gmail.com"
              target="_blank"
              className="font-bold text-white"
            >
              Email:{" "}
              <span className="text-gray-500 font-normal hover:text-blue-400">
                customjerseyskenya@gmail.com
              </span>
            </a>

            <a
              href="tel:+254742836404"
              target="_blank"
              className="font-bold text-white"
            >
              Phone:{" "}
              <span className="text-gray-500 font-normal hover:text-blue-400">
                +254742836404
              </span>
            </a>

            <a
              href="https://wa.me/254742836404"
              target="_blank"
              className="font-bold text-white"
            >
              WhatsApp:{" "}
              <span className="text-gray-500 font-normal hover:text-blue-400">
                +254742836404
              </span>
            </a>

            <a
              href="https://www.instagram.com/customjerseyskenya/"
              target="_blank"
              className="font-bold text-white"
            >
              Instagram:{" "}
              <span className="text-gray-500 font-normal hover:text-blue-400">
                customjerseyskenya
              </span>
            </a>

            <a
              href="https://twitter.com/customjerseyskenya/"
              target="_blank"
              className="font-bold text-white"
            >
              Twitter:{" "}
              <span className="text-gray-500 font-normal hover:text-blue-400">
                customjerseyskenya
              </span>
            </a>

            <a
              href="https://web.facebook.com/customjerseyske"
              target="_blank"
              className="font-bold text-white"
            >
              Facebook:{" "}
              <span className="text-gray-500 font-normal hover:text-blue-400">
                customjerseyskenya
              </span>
            </a>
          </ul>
        </div>

        <div>
          <h4 className={"text-white font-bold mb-4"}>QUICK LINKS</h4>

          <ul className="flex flex-col">
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/league/premier-league"}
            >
              Premier League
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/league/la-liga"}
            >
              La Liga
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/league/bundesliga"}
            >
              Bundesliga
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/league/ligue1"}
            >
              Ligue 1
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/league/serie-a"}
            >
              Serie A
            </Link>
            {/* <Link
              className="hover:text-white hover:font-bold transition-font"
              href={"/league/other"}
            >
              Other
            </Link> */}
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/blog"}
            >
              Blog
            </Link>
          </ul>
        </div>

        <div>
          <h4 className={"text-white font-bold mb-4"}>STORE POLICIES</h4>

          <ul className="flex flex-col">
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/shipping-policy"}
            >
              Shipping Policy
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/return-and-refund-policy"}
            >
              Return and Refund Policy
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

        <div>
          <h4 className={"text-white font-bold mb-4"}>ABOUT US</h4>

          <ul className="flex flex-col">
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/about-us"}
            >
              Who are We?
            </Link>
            <Link
              className="hover:text-white hover:font-bold transition-font"
              to={"/faqs"}
            >
              FAQs
            </Link>
          </ul>
        </div>
      </div>

      <p className="text-[12px] text-center text-gray-400 mt-10 lg:mt-20">
        Copyright © 2024. All Rights Reserved. Custom Jerseys Built By{" "}
        <a
          href="https://wa.me/254724753175"
          target="_blank"
          className="text-orange-500 font-bold hover:text-blue-400"
        >
          Isaac Newton Tingo
        </a>
      </p>
    </div>
  );
}
