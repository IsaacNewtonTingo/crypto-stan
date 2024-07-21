import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";
import Whatsapp from "./whatsapp";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/app-context";
import PromoAlert from "./promo-alert";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default function AppLayout({ children }) {
  const { promoAlert, setPromoAlert, featuredPromo, setFeaturedPromo } =
    useContext(AppContext);
  const router = useRouter();
  const excludedPages = ["/signup", "/login", "/admin", "/forgot-password"];

  const shouldUseLayout = !excludedPages.some((route) =>
    router.pathname.startsWith(route)
  );

  useEffect(() => {
    getFeatureedPromoCode();
  }, []);

  async function getFeatureedPromoCode() {
    try {
      const response = await axios.get(
        `${process.env.API_ENDPOINT}/api/promo-code/get-featured`
      );
      if (response.data.status == "Success") {
        setFeaturedPromo(response.data.data);
        secureLocalStorage.setItem("featuredPromo", response.data.data);
        if (response.data.data) {
          setPromoAlert(true);
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occured while getting featured promo code");
    }
  }
  return (
    <>
      {shouldUseLayout && (
        <>
          <Header />
          <Toaster />
          {promoAlert && featuredPromo && <PromoAlert data={featuredPromo} />}
          <main className="min-h-screen">{children}</main>

          <Whatsapp />

          <Footer />
        </>
      )}

      {!shouldUseLayout && children}
    </>
  );
}
