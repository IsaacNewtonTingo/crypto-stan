import React from "react";
import Container from "../components/container";
import PlanCard from "../components/plan-card";
import AppLayout from "../layouts/app-layout";

export default function Plans() {
  const packages = [
    {
      type: "Premium",
      amount: 10000,
      time: "6 Hours",
      benefits: [
        "Min. Possible deposit: $300",
        "Max. Possible deposit: $9999",
        "Minimum return 500%",
        "Maximum return 5000%",
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
        "Minimum return 50%",
        "Maximum return 1000%",
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
        "Minimum return 5%",
        "Maximum return 98%",
        "$6 Gift Bonus",
      ],
    },
  ];
  return (
    <AppLayout>
      <Container>
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
            <PlanCard item={item} key={item.type} />
          ))}
        </div>
      </Container>
    </AppLayout>
  );
}
