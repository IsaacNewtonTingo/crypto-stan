import React, { useEffect, useState } from "react";
import Container from "../components/container";
import PlanCard from "../components/plan-card";
import AppLayout from "../layouts/app-layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Plans() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPlans();
  }, []);

  async function getPlans() {
    try {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/plan`;
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.status === "Success") {
        setPackages(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occured while getting plans");
    }
  }
  return (
    <AppLayout>
      <Container>
        <Toaster />
        <p className="text-primary-500 text-center font-bold">Packages</p>
        <h2 className="font-black text-[30px] text-gray-600 text-center">
          Tailored Investment Packages
        </h2>
        <p className="text-gray-400 text-center">
          Custom investment plans designed to fit your unique goals and
          preferences.
        </p>

        <div className="bg-cover bg-center w-full mt-10 grid grid-cols-1 lg:grid-cols-4 gap-2">
          {packages.map((item) => (
            <PlanCard item={item} key={item._id} />
          ))}
        </div>
      </Container>
    </AppLayout>
  );
}
