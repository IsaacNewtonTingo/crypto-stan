import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";
import { AppContext } from "../context/app-context";
import TextInput from "../components/text-input";
import Label from "../components/label";
import Title from "../components/title";
import ConfirmCodeModal from "../components/confirm-code-modal";
import PrimaryButton from "../components/primary-button";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { userData, setUserData, nextRoute, setNextRoute } =
    useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [processing, setprocessing] = useState(false);
  const [modal, setModal] = useState(false);
  const [activePath, setActivePath] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if (userData) {
    //   navigate("/");
    // }
    setActivePath(window.location.href);
  }, [navigate, userData]);

  async function signup(e) {
    e.preventDefault();
    if (!firstName) {
      toast.error("First name is required");
    } else if (!lastName) {
      toast.error("Last name is required");
    } else if (!email) {
      toast.error("Email is required");
    } else if (!password) {
      toast("Password is required");
    } else if (confirmPassword !== password) {
      toast.error("Passwords don't match");
    } else {
      setprocessing(true);

      const data = {
        email,
        password,
        firstName,
        lastName,
      };

      const url = `${process.env.API_ENDPOINT}/api/user/auth/signup`;
      const headers = {
        "auth-token": process.env.TOKEN,
      };

      await axios
        .post(url, data, { headers })
        .then((response) => {
          setprocessing(false);

          if (response.data.status === "Success") {
            setModal(true);
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          setprocessing(false);

          toast.error(error.message);
        });
    }
  }

  async function verify(e) {
    e.preventDefault();
    if (!firstName) {
      toast.error("First name is required");
    } else if (!lastName) {
      toast.error("Last name is required");
    } else if (!email) {
      toast.error("Email is required");
    } else if (!password) {
      toast.error("Password is required");
    } else if (confirmPassword !== password) {
      toast.error("Passwords don't match");
    } else if (!code) {
      toast.error("OTP is required");
    } else {
      setprocessing(true);

      const data = {
        email,
        password,
        firstName,
        lastName,
        verificationCode: code,
      };

      const url = `${process.env.API_ENDPOINT}/api/user/auth/verify-code`;
      const headers = {
        "auth-token": process.env.TOKEN,
      };

      await axios
        .post(url, data, { headers })
        .then((response) => {
          setprocessing(false);

          if (response.data.status === "Success") {
            toast.success(response.data.message);

            setUserData(response.data.data);
            secureLocalStorage.setItem("userData", response.data.data);

            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setCode("");

            setModal(false);

            if (nextRoute) {
              navigate(nextRoute);

              setNextRoute(null);
              secureLocalStorage.setItem("nextRoute", null);
            } else if (
              response.data.roleID === "superAdmin" ||
              response.data.roleID === "admin" ||
              response.data.roleID === "shopAdmin"
            ) {
              navigate("/admin");
            } else {
              navigate("/");
            }
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          setprocessing(false);

          toast.error(error.message);
        });
    }
  }

  return (
    <div className="flex">
      {/* <Head>
        <title>Signup - Custom Football Jerseys Kenya.</title>
        <meta
          name="description"
          content="Create an account using your email address to enjoy the full Custom Football Jerseys Kenya functionality. "
        />
        <meta property="og:title" content="Signup to Custom Jerseys Kenya" />
        <meta
          property="og:description"
          content="Create an account using your email address to enjoy the full Custom Football Jerseys Kenya functionality. "
        />
        <meta property="og:url" content="https://customjerseys.co.ke/signup" />
        <meta property="og:image" content="/custom-jerseys-og-image.png" />
      </Head> */}
      <Toaster />

      <div className="w-full lg:w-[30%] bg-gray-50 min-h-screen p-10">
        <div className="flex items-center justify-center">
          <img
            onClick={() => navigate("/")}
            src="/crypto-stan-logo.png"
            alt="Crypto Stan Kenya logo"
            className="object-contain w-[30%] cursor-pointer"
          />
        </div>

        <Title className="text-[30px] mt-4 text-gray-700">
          Create an account
        </Title>

        <form onSubmit={signup} className="mt-10">
          <Label>First Name*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="e.g John"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Label myStyles="mt-4">Last Name*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="e.g Doe"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <Label myStyles="mt-4">Email Address*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="e.g johndoe@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <Label myStyles="mt-4">Password*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Label myStyles="mt-4">Confirm Password*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="********"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />

          <PrimaryButton processing={processing} className="w-full mt-4">
            {processing ? "Processing..." : "Create Account"}
          </PrimaryButton>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Already have an account ?{" "}
          <Link className="text-myBlue font-bold hover:underline" to={"/login"}>
            Login
          </Link>
        </p>
      </div>

      <div className="hidden w-[70%] bg-gray-100 p-10 lg:flex items-center">
        <img
          src="/custom-jerseys-kenya-login-shopping-image.png"
          alt=" Custom Jerseys Kenya signup"
          className="w-full h-full object-contain"
        />
      </div>

      {modal && (
        <ConfirmCodeModal
          email={email}
          code={code}
          setCode={setCode}
          setModal={setModal}
          verify={verify}
          processing={processing}
          resend={signup}
        />
      )}
    </div>
  );
}
