import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { useGoogleLogin } from "@react-oauth/google";
import LoadingData from "../components/loading-data";
import Title from "../components/title";
import { AppContext } from "../context/app-context";
import Label from "../components/label";
import TextInput from "../components/text-input";
import PrimaryButton from "../components/primary-button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const {
    userData,
    setUserData,
    setMenuOpen,
    nextRoute,
    setNextRoute,
    setLastLogin,
    setActivePath,
  } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setprocessing] = useState(false);
  const [processingGoogle, setProccessingGoogle] = useState(false);

  const router = useNavigate();

  useEffect(() => {
    // if (userData) {
    //   if (
    //     userData.roleID === "superAdmin" ||
    //     userData.roleID === "admin" ||
    //     userData.roleID === "shopAdmin"
    //   ) {
    //     router.push("/admin");
    //   } else {
    //     router.push("/");
    //   }
    // }
    setActivePath(window.location.href);
  }, [router, userData]);

  async function login(e) {
    try {
      e.preventDefault();
      if (!email) {
        toast.error("Email is required");
      } else if (!password) {
        toast.error("Password is required");
      } else {
        const data = {
          email,
          password,
        };
        setprocessing(true);

        const url = `${process.env.API_ENDPOINT}/api/user/auth/login`;
        const headers = {
          "auth-token": process.env.TOKEN,
        };

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
        setprocessing(false);

        if (responseData.status === "Success") {
          setUserData(responseData.data);
          secureLocalStorage.setItem("userData", responseData.data);
          secureLocalStorage.setItem("lastLogin", new Date());
          setLastLogin(new Date());
          setMenuOpen(false);

          if (nextRoute) {
            router.push(nextRoute);

            setNextRoute(null);
            secureLocalStorage.setItem("nextRoute", null);
          } else if (
            responseData.data.roleID === "superAdmin" ||
            responseData.data.roleID === "admin" ||
            responseData.data.roleID === "shopAdmin"
          ) {
            router.push("/admin");
          } else {
            router.push("/");
          }
        } else {
          toast.error(responseData.message);
        }
      }
    } catch (error) {
      setprocessing(false);
      toast.error("An error occurred while logging in");
    }
  }

  async function googleLogin() {
    try {
      setProccessingGoogle(true);
      submit();
    } catch (error) {
      setProccessingGoogle(false);

      toast.error("An error occured while logging in with google");
    }
  }

  const submit = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setProccessingGoogle(true);
      const accessToken = codeResponse.access_token;
      //get user data
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          //handle login
          const googleData = res.data;
          const headers = {
            "auth-token": process.env.TOKEN,
          };
          const apiRes = await axios.post(
            `${process.env.API_ENDPOINT}/api/user/auth/google-login`,
            googleData,
            { headers }
          );

          if (apiRes.data.status === "Success") {
            setUserData(apiRes.data.data);
            secureLocalStorage.setItem("userData", apiRes.data.data);
            setMenuOpen(false);
            setProccessingGoogle(false);
            secureLocalStorage.setItem("lastLogin", new Date());
            setLastLogin(new Date());

            if (nextRoute) {
              router.push(nextRoute);

              setNextRoute(null);
              secureLocalStorage.setItem("nextRoute", null);
            } else if (
              apiRes.data.roleID === "superAdmin" ||
              apiRes.data.roleID === "admin" ||
              apiRes.data.roleID === "blogAdmin" ||
              apiRes.data.roleID === "blogger"
            ) {
              router.push("/admin");
            } else {
              router.push("/");
            }
          } else {
            toast.error(apiRes.data.message);
            setProccessingGoogle(false);
          }
        })
        .catch((err) => {
          setProccessingGoogle(false);
          toast.error("An error occured");
        });
    },
    onError: (error) => {
      setProccessingGoogle(false);
      toast.error("An error occured");
    },
  });

  return (
    <div className="flex">
      {/* <Head>
        <title>Login - Custom Jerseys Kenya</title>
        <meta
          name="description"
          content="Do you have an account? Log in to Custom Jerseys Kenya and have access to unlimited ecommerce site features."
        />

        <meta property="og:title" content="Login to Custom Jerseys Kenya" />
        <meta
          property="og:description"
          content="Do you have an account? Log in to Custom Jerseys Kenya and have access to unlimited ecommerce site features."
        />
        <meta property="og:url" content="https://customjerseys.co.ke/login" />
        <meta property="og:image" content="/custom-jerseys-og-image.png" />
      </Head> */}

      <Toaster />
      {processingGoogle && <LoadingData />}
      <div className="w-full lg:w-[30%] bg-gray-50 min-h-screen p-10">
        <div className="flex items-center justify-center">
          <img
            onClick={() => router.push("/")}
            src="/crypto-stan-logo.png"
            alt="Crypto Stan logo"
            className="object-contain w-[30%] cursor-pointer"
          />
        </div>

        <Title className="text-[30px] mt-10 text-gray-700">LOGIN</Title>

        <form onSubmit={login} className="mt-10">
          <Label>Email Address*</Label>
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

          <p className="mt-4 text-center text-gray-400">
            Forgot password ?{" "}
            <Link
              className="text-myBlue font-bold hover:underline"
              href={"/forgot-password"}
            >
              Reset
            </Link>
          </p>

          <PrimaryButton processing={processing} className="w-full mt-4">
            Login
          </PrimaryButton>
        </form>

        <div className="flex items-center justify-center mt-4 gap-4">
          <hr
            style={{ width: "100%", height: "1px", backgroundColor: "black" }}
          />
          <p className="text-gray-400">OR</p>
          <hr
            style={{ width: "100%", height: "1px", backgroundColor: "black" }}
          />
        </div>

        <button
          onClick={googleLogin}
          className="h-[50px] border-2 border-myBlue rounded-lg w-full flex items-center justify-center gap-4 px-10 mt-4 hover:border-blue-800 hover:font-bold transition-font"
        >
          <img
            src="/google-logo.png"
            alt="google-logo-custom-jerseys-kenya"
            className="w-[30px] h-[30px]"
          />
          <span className="text-myBlue">Login with Google</span>
        </button>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account ?{" "}
          <Link
            className="text-myBlue font-bold hover:underline"
            to={"/signup"}
          >
            Sigup
          </Link>
        </p>
      </div>

      <div className="hidden w-[70%] bg-gray-100 p-10 lg:flex items-center">
        <img
          src="/custom-jerseys-kenya-login-shopping-image.png"
          className="w-full h-full object-contain"
          alt="custom-jerseys-kenya-login-shopping-image"
        />
      </div>
    </div>
  );
}
