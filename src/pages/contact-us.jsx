import Line from "../components/line";
import PrimaryButton from "../components/primary-button";
import PrimaryInput from "../components/primary-input";
import axios from "axios";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import Title from "../components/title";
import Container from "../components/container";
import AppLayout from "../layouts/app-layout";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const headers = {
    "auth-token": process.env.TOKEN,
  };

  const captchaRef = useRef(null);

  async function submit(e) {
    try {
      e.preventDefault();
      const token = captchaRef.current.getValue();

      if (!token) {
        toast.error("Please verify you're not a robot");
      } else if (!fullName) {
        toast.error("Name is required");
      } else if (!email) {
        toast.error("Email is required");
      } else if (!message) {
        toast.error("Message is required");
      } else {
        setProcessing(true);
        const data = {
          name: fullName,
          email,
          phoneNumber,
          message,
        };
        const response = await axios.post(
          `${process.env.API_ENDPOINT}/api/contact-us`,
          data,
          { headers }
        );
        setProcessing(false);
        if (response.data.status === "Success") {
          toast.success(response.data.message);
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      setProcessing(false);
      toast.error("An error occured");
    }
  }
  return (
    <AppLayout>
      <Container>
        {/* <Head>
        <title>Contact Us - Msichana Empowerment Kuria</title>
        <meta
          name="description"
          content="Get in touch with Msichana Empowerment Kuria. Whether you have questions, need information, or want to get involved, contact us today. We're here to support and engage with our community as we work together to empower girls and young women in Kuria."
        />

        <meta
          property="og:title"
          content="Contact Us - Msichana Empowerment Kuria"
        />
        <meta
          property="og:description"
          content="Get in touch with Msichana Empowerment Kuria. Whether you have questions, need information, or want to get involved, contact us today. We're here to support and engage with our community as we work together to empower girls and young women in Kuria."
        />
        <meta
          property="og:url"
          content="https://msichanaempowermentkuria.org/contact-us"
        />
        <meta
          property="og:image"
          content="/msichana-empowerment-kuria-logo-bg.png"
        />
      </Head> */}

        <Toaster />

        <div className="pt-10 pb-10 flex grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          <div className="w-1/2">
            <Title className={"text-primary-900"}>CONTACT US</Title>
            <Line />

            <p>
              Have questions or need assistance? Our dedicated support team at
              FX Nest Investors is here to help. Reach out to us through any of
              the contact methods below, and we'll get back to you promptly. We
              look forward to assisting you with all your trading and investment
              needs.
            </p>

            <div className="flex items-center gap-2 relative mt-10">
              <a
                href="https://web.facebook.com/msichanaempowermentkuria"
                target="_blank"
              >
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="text-myBlue w-[40px] hover:text-blue-400 hover:scale-[1.1] transition-transform duration-300"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384 196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
                </svg>
              </a>

              <a
                href="mailto:info@msichanaempowermentkuria.org"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-red-800 w-[57px] hover:text-orange-400 hover:scale-[1.1] transition-transform duration-300"
                >
                  <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
              </a>

              <a
                href="https://web.facebook.com/msichanaempowermentkuria"
                target="_blank"
              >
                <svg
                  viewBox="0 0 860 1000"
                  fill="currentColor"
                  className="text-blue-500 w-[40px] hover:text-blue-600 hover:scale-[1.1] transition-transform duration-300"
                >
                  <path d="M752 80c29.333 0 54.667 10.333 76 31s32 45.667 32 75v646c0 29.333-10.667 54.667-32 76s-46.667 32-76 32H590V630h114V496H590v-70c0-20 9.333-30 28-30h86V244h-96c-49.333 0-90.667 18-124 54s-50 80-50 132v66H330v134h104v310H108c-29.333 0-54.667-10.667-76-32S0 861.333 0 832V186c0-29.333 10.667-54.333 32-75s46.667-31 76-31h644" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/msichanaempowermentkuria/"
                target="_blank"
              >
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="text-orange-500 w-[40px] hover:text-orange-600 hover:scale-[1.1] transition-transform duration-300"
                >
                  <path d="M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z" />
                </svg>
              </a>

              <a href="https://x.com/MsichanaKuria" target="_blank">
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="text-blue-600 w-[40px] hover:text-blue-900 hover:scale-[1.1] transition-transform duration-300"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                </svg>
              </a>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="bg-gradient-to-r from-gray-900 to-primary-900 p-6 lg:p-10 rounded-lg w-1/2"
          >
            <PrimaryInput
              placeholder={"Enter Full Name"}
              className={"mt-2 w-full"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <PrimaryInput
              placeholder={"Enter Email"}
              className={"mt-2 w-full"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="h-[100px] rounded-lg border-[1px] border-white bg-transparent px-6 text-white text-sm w-full mt-2 pt-6"
            ></textarea>

            <ReCAPTCHA
              style={{
                width: 300,
              }}
              className="mt-2 w-[300px]"
              sitekey="6Le4dK0pAAAAAGht2ia06-ezkvdFOG6tOUXivIvK"
              ref={captchaRef}
            />

            <PrimaryButton processing={processing} className={"mt-4 w-full"}>
              <span className="font-bold">Submit to get in touch</span>
            </PrimaryButton>
          </form>
        </div>
      </Container>
    </AppLayout>
  );
}
