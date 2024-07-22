import React from "react";
import AppLayout from "../layouts/app-layout";
import Title from "../components/title";
import PrimaryButton from "../components/primary-button";

export default function Home() {
  const security = [
    {
      title: "Advanced Encryption",
      description:
        "We employ state-of-the-art encryption technologies to protect your data and transactions. Your sensitive information is encrypted and securely transmitted, safeguarding it from unauthorized access.",
      icon: "/encryption.png",
    },
    {
      title: "Secure Payment Gateway",
      description:
        "We partner with trusted and secure payment gateways to handle all transactions. Whether you're depositing funds or withdrawing your earnings, you can rest assured that your financial transactions are processed securely.",
      icon: "/pay-secure.png",
    },
    {
      title: "Data Privacy",
      description:
        "We are committed to protecting your personal information with stringent privacy policies. Your data is handled with the utmost care, and we ensure it is only used for legitimate purposes, maintaining your privacy and trust.",
      icon: "/data-privacy.png",
    },
    {
      title: "Two-Factor Authentication",
      description:
        "To add an extra layer of security to your account, we offer two-factor authentication (2FA). This security feature requires not only your password but also a verification code sent to your mobile device, significantly reducing the risk of unauthorized access.",
      icon: "/2fa.png",
    },
  ];

  const services = [
    {
      title: "Personalized Investment Plans",
      description:
        "Our team of expert financial advisors works closely with you to develop customized investment plans tailored to your specific objectives. We take the time to understand your financial goals, risk tolerance, and investment preferences to create a strategy that aligns with your needs.",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className="text-blue-500 w-[50px]"
        >
          <path d="M911.5 699.7a8 8 0 00-10.3-4.8L840 717.2V179c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V762c0 3.3 2.1 6.3 5.3 7.5L501 909.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zm-243.8-377L564 514.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V703c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 322.8c-2.1-3.8-.7-8.7 3.2-10.8 1.2-.7 2.5-1 3.8-1h55.7a8 8 0 017.1 4.4L511 484.2h3.3L599 315.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9 0 1.3-.4 2.6-1 3.8z" />
        </svg>
      ),
    },
    {
      title: "Portfolio Management",
      description:
        "Leave the complexities of managing your investments to us. Our professional portfolio management services ensure that your assets are strategically allocated and continuously monitored to maximize returns while minimizing risk.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-500 w-[50px]"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-9v2H8v2h8v-2h-5v-2h3v-2h-3v-1a1.5 1.5 0 012.76-.815l1.986-.496A3.501 3.501 0 009 10v1H8v2h1z" />
        </svg>
      ),
    },
    {
      title: "Cryptocurrency Trading",
      description:
        "Stay ahead of the curve with our cryptocurrency trading services. We provide a secure and user-friendly platform for buying, selling, and managing a variety of cryptocurrencies, helping you diversify your investment portfolio in this dynamic market.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-500 w-[50px]"
        >
          <path d="M11.943.182c1.872 0 3.654.43 5.252 1.197.251.113.503.248.753.384l-1.096.97-1.643-1.692-2.832 2.483L10.71 1.74 5.503 6.368l3.334 3.635-1.302 1.128 3.29 3.635-1.302 1.128 4.704 5.17 2.785-2.529 2.421 2.71c-.48.361-1.005.723-1.575 1.039a12.042 12.042 0 01-5.892 1.534C5.366 23.817 0 18.512 0 11.99-.023 5.51 5.343.182 11.943.182zM9.75 11.268l2.855-2.529 2.558 2.822-2.855 2.529zm2.033 4.876l2.832-2.55 2.58 2.821-2.855 2.529zM7.72 6.46l2.854-2.529 2.557 2.822-2.854 2.528zm5.228-1.355l2.124-1.896 1.919 2.099-2.124 1.919zm3.792 8.691l2.123-1.896 1.918 2.121-2.124 1.898zm1.872 4.267l2.124-1.897 1.917 2.1-2.123 1.918zm.868-9.753l1.415-1.264 1.279 1.4-1.416 1.264zm-1.827-4.176l1.416-1.286 1.28 1.422-1.418 1.264zm3.63 8.353l1.416-1.264 1.302 1.4-1.438 1.264zm-6.37-3.138l2.124-1.896 1.918 2.099-2.124 1.897z" />
        </svg>
      ),
    },
    {
      title: "Real-Time Market Analysis",
      description:
        "Make informed decisions with our real-time market analysis tools. Our platform offers comprehensive market data, expert insights, and up-to-the-minute news to help you stay informed and make strategic investment choices.",
      icon: (
        <svg
          viewBox="0 0 576 512"
          fill="currentColor"
          className="text-blue-500 w-[50px]"
        >
          <path d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm208 128h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 112c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zm-91.9-144v6.3c6.6 1.2 16.6 3.2 21 4.4 10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-3.8-1-17.4-3.7-21.7-4.3-12.2-1.9-22.2-.3-28.6 2.6-6.3 2.9-7.9 6.2-8.2 8.1-.6 3.4 0 4.7.1 5 .3.5 1 1.8 3.6 3.5 6.1 4.2 15.7 7.2 29.9 11.4l.8.2c12.1 3.7 28.3 8.5 40.4 17.4 6.7 4.9 13 11.4 16.9 20.5 4 9.1 4.8 19.1 3 29.4-3.3 19-15.9 32-31.6 38.7-4.9 2.1-10 3.6-15.4 4.6v5.5c0 11.1-9 20.1-20.1 20.1s-20.1-9-20.1-20.1v-6.4c-9.5-2.2-21.9-6.4-29.8-9.1-1.7-.6-3.2-1.1-4.4-1.5-10.5-3.5-16.1-14.8-12.7-25.3s14.8-16.1 25.3-12.7c2 .7 4.1 1.4 6.4 2.1 9.5 3.2 20.2 6.9 26.2 7.9 12.8 2 22.7.7 28.8-1.9 5.5-2.3 7.4-5.3 8-8.8.7-4 .1-5.9-.2-6.7-.4-.9-1.3-2.2-3.7-4-5.9-4.3-15.3-7.5-29.3-11.7l-2.2-.7c-11.7-3.5-27-8.1-38.6-16-6.6-4.5-13.2-10.7-17.3-19.5-4.2-9-5.2-18.8-3.4-29 3.2-18.3 16.2-30.9 31.1-37.7 5-2.3 10.3-4 15.9-5.1v-6c0-11.1 9-20.1 20.1-20.1s20.1 9 20.1 20.1z" />
        </svg>
      ),
    },
    {
      title: "Automated Investment Solutions",
      description:
        "Take advantage of our automated investment solutions to simplify your investment process. Our robo-advisors use sophisticated algorithms to manage your portfolio, providing you with a hassle-free investment experience.",
      icon: (
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="text-blue-500 w-[40px]"
        >
          <path d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1l-91.2 78.2c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c8.8 0 16.8 3.6 22.6 9.3l.1.1zM0 304c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zm48 112v48h48c0-26.5-21.5-48-48-48zm48-112H48v48c26.5 0 48-21.5 48-48zm368 112c-26.5 0-48 21.5-48 48h48v-48zm-48-112c0 26.5 21.5 48 48 48v-48h-48zm-96 80c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z" />
        </svg>
      ),
    },
    {
      title: "Portfolio Management",
      description:
        "Leave the complexities of managing your investments to us. Our professional portfolio management services ensure that your assets are strategically allocated and continuously monitored to maximize returns while minimizing risk.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-500 w-[50px]"
        >
          <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z" />
        </svg>
      ),
    },
    {
      title: "Educational Resources",
      description:
        "Empower yourself with knowledge through our extensive educational resources. From webinars and tutorials to articles and investment guides, we provide you with the information you need to enhance your investment acumen and stay updated on market trends.",
      icon: (
        <svg fill="none" viewBox="0 0 15 15" className="text-blue-500 w-[50px]">
          <path
            fill="currentColor"
            d="M6 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.5 0A1.5 1.5 0 000 1.5v8A1.5 1.5 0 001.5 11h12A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-12zM4 2H2v2h1V3h1V2zm3.5 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 3h-1V2h2v2h-1V3zM3 7H2v2h2V8H3V7zm8 2V8h1V7h1v2h-2z"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M0 12v1h15v-1H0zM0 14v1h15v-1H0z" />
        </svg>
      ),
    },
    {
      title: "Socially Responsible Investing",
      description:
        "Align your investments with your values through our socially responsible investing options. We offer a range of investment opportunities that focus on sustainability, ethical practices, and positive social impact.",
      icon: (
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="text-blue-500 w-[50px]"
        >
          <path d="M176 0c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16zM56 16h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM24 88h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24zM272 16c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80zM400 0c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zm-128-16c8.8 0 16 7.2 16 16 0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zm48 112v48h48c0-26.5-21.5-48-48-48zm48-112H48v48c26.5 0 48-21.5 48-48zm368 112c-26.5 0-48 21.5-48 48h48v-48zm-48-112c0 26.5 21.5 48 48 48v-48h-48zm-96 80c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z" />
        </svg>
      ),
    },
  ];

  const packages = [
    {
      type: "Premium",
      amount: 10000,
      time: "6 Hours",
      benefits: [
        "Min. Possible deposit: $300",
        "Max. Possible deposit: $9999",
        "Minimum return 500 %",
        "Maximum return 5000 %",
        "$60 Gift Bonus",
      ],
    },
    {
      type: "Advanced (Recommended)",
      amount: 5000,
      time: "12 Hours",
      benefits: [
        "Min. Possible deposit: $100",
        "Max. Possible deposit: $4999",
        "Minimum return 50 %",
        "Maximum return 1000 %",
        "$42 Gift Bonus",
      ],
    },
    {
      type: "Standard",
      amount: 1000,
      time: "2 Days",
      benefits: [
        "Min. Possible deposit: $70",
        "Max. Possible deposit: $999",
        "Minimum return 12.5%",
        "Maximum return 600%",
        "$24 Gift Bonus",
      ],
    },
    {
      type: "Starter",
      amount: 100,
      time: "90 Days",
      benefits: [
        "Min. Possible deposit: $10",
        "Max. Possible deposit: $99",
        "Minimum return 5 %",
        "Maximum return 98%",
        "$6 Gift Bonus",
      ],
    },
  ];
  return (
    <AppLayout>
      <div
        style={{ backgroundImage: "url('/bg.png')" }}
        className="bg-cover bg-center h-[700px] w-full mt-[80px]"
      >
        <div className="w-[50%] px-40 flex flex-col justify-end h-full pb-20 gap-10">
          <Title className={"text-white"}>Future-proof your finances</Title>
          <p className="text-gray-300">
            With FX Nest Investors, you can trade and invest securely, enjoying
            100% guaranteed returns on your investments
          </p>

          <div className="w-1/2">
            <PrimaryButton className="w-1/2">Get Started</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="py-10 bg-gray-100">
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
          width="100%"
          height="36px"
          scrolling="auto"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
          border="0"
        ></iframe>
      </div>

      <div
        style={{ backgroundImage: "url('/bg2.png')" }}
        className="px-40 py-10"
      >
        <p className="text-primary-500 text-center">Security</p>

        <h2 className="font-black text-[30px] text-gray-600 text-center">
          Guardian Secure: Where Safety Meets Trust
        </h2>

        <div className="bg-cover bg-center w-full mt-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {security.map((item) => (
            <div key={item.title} className="">
              <img className="w-[80px]" src={item.icon} />
              <h4 className="font-bold text-gray-600 text-[20px] mb-4 mt-2">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        // style={{ backgroundImage: "url('/bg2.png')" }}
        className="px-40 py-10"
      >
        <p className="text-primary-500 text-center">Benefits</p>
        <h2 className="font-black text-[30px] text-gray-600 text-center">
          Our Best Services
        </h2>
        <p>
          At FX Nest Investors, we offer a comprehensive suite of services
          designed to meet the diverse needs of our clients. Whether you’re a
          seasoned investor or just starting your journey, our range of services
          ensures you have the tools and support you need to achieve your
          financial goals.
        </p>

        <div className="bg-cover bg-center w-full mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((item) => (
            <div
              key={item.title}
              className="border-[1px] rounded-lg p-4 border-gray-100"
            >
              <div className="bg-blue-100 w-[70px] h-[70px] rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-600 text-[20px] mb-4 mt-2">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        // style={{ backgroundImage: "url('/bg2.png')" }}
        className="px-40 py-10"
      >
        <p className="text-primary-500 text-center font-bold">Packages</p>
        <h2 className="font-black text-[30px] text-gray-600 text-center">
          Tailored Investment Packages
        </h2>
        <p className="text-gray-400 text-center">
          Custom investment plans designed to fit your unique goals and
          preferences.
        </p>

        <div className="bg-cover bg-center w-full mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {packages.map((item) => (
            <div key={item.title} className="rounded-lg shadow-lg">
              <div className="bg-gradient-to-r from-primary-900 to-primary-600 rounded-lg flex flex-col items-center py-10 text-white">
                <h4 className="font-bold text-gray-300 text-[20px]">
                  {item.type}
                </h4>

                <h2 className="font-black text-[40px]">${item.amount} </h2>
                <span className="text-gray-400 text-[16px] font-bold">
                  {item.time}
                </span>
              </div>

              <div className="p-6">
                {item.benefits.map((ben) => (
                  <div key={ben} className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      className="text-primary-900"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <p className="text-gray-500">{ben}</p>
                  </div>
                ))}
                <PrimaryButton className="mt-10">Buy Plan</PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
