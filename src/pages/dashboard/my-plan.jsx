import React, { useContext, useEffect, useState } from "react";
import PlanCard from "../../components/plan-card";
import toast from "react-hot-toast";
import axios from "axios";
import { AppContext } from "../../context/app-context";
import LoadingData from "../../components/loading-data";

export default function MyPlan() {
  const { userData } = useContext(AppContext);
  const [packages, setPackages] = useState([]);
  const [myPlan, setMyPlan] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    getPlans();
    if (userData) {
      getMyPlan();
    }
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

  async function getMyPlan() {
    try {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/plan/user-plan?user=${userData._id}`;
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.status === "Success") {
        setMyPlan(response.data.data[0]);
      } else {
        toast.error(response.data.message);
      }
      setLoadingData(false);
    } catch (error) {
      setLoadingData(false);

      toast.error("An error occured while getting plan");
    }
  }

  async function buyPlan(plan) {
    try {
      setProcessing(true);
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/plan`;
      const data = {
        plan,
        user: userData._id,
      };
      const response = await axios.post(url, data, { withCredentials: true });
      if (response.data.status === "Success") {
        setMyPlan(response.data.data);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      setProcessing(false);
    } catch (error) {
      console.log(error);
      setProcessing(false);
      toast.error("An error occured while getting plan");
    }
  }
  return (
    <div>
      {loadingData && <LoadingData />}
      <p className="text-primary-500 text-center font-bold">Packages</p>
      <h2 className="font-black text-[30px] text-white text-center">
        Tailored Investment Packages
      </h2>
      <p className="text-gray-400 text-center">
        Custom investment plans designed to fit your unique goals and
        preferences.
      </p>

      <div className="bg-cover bg-center w-full mt-14 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {packages.map((item) => (
          <PlanCard
            buyPlan={buyPlan}
            item={item}
            key={item._id}
            processing={processing}
            myPlan={myPlan}
          />
        ))}
      </div>
    </div>
  );
}
