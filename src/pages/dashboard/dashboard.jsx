import React, { useContext, useEffect, useState } from "react";
import DashboardContainer from "../../components/dashboard/container";
import Title from "../../components/title";
import moment from "moment";
import OverviewCard from "../../components/overview-card";
import { AppContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { userData } = useContext(AppContext);
  const [totalBalance, setTotalBalance] = useState(24536.55);

  const navigate = useNavigate();

  const balanceIcon = (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className="w-[100px] text-primary-100"
    >
      <path
        fillRule="evenodd"
        d="M11 15a4 4 0 100-8 4 4 0 000 8zm5-4a5 5 0 11-10 0 5 5 0 0110 0z"
      />
      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
      <path d="M1 0a1 1 0 00-1 1v8a1 1 0 001 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 00-2-2V3a2 2 0 002-2h10a2 2 0 002 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 00-1-1H1z" />
      <path d="M9.998 5.083L10 5a2 2 0 10-3.132 1.65 5.982 5.982 0 013.13-1.567z" />
    </svg>
  );

  const transactions = [
    {
      _id: 1,
      amount: "243.99",
      created_at: "10/10/2012",
      type: "Deposit",
      status: 1,
    },
    {
      _id: 2,
      amount: "10.99",
      created_at: "10/10/2012",
      type: "Withdrawal",
      status: 0,
    },
    {
      _id: 3,
      amount: "100.99",
      created_at: "10/10/2012",
      type: "Withdrawal",
      status: 2,
    },
  ];

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Title className={"text-white"}>Welcome back John Doe</Title>
      <h2 className="text-gray-500">
        Happy to see you again. Get update of your asset today, good luck!!!
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
        <OverviewCard
          title={"Total Balance"}
          content={`USD. ${userData.accountBalance}`}
          icon={balanceIcon}
          sub={``}
          subColor={``}
        />
        <OverviewCard
          title={"Total Transactions"}
          content={`USD. ${userData.accountBalance}`}
          icon={balanceIcon}
          sub={``}
          subColor={``}
        />
      </div>

      <h2 className="text-white font-bold mt-10">Transaction History</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-200">
          <thead className="text-xs text-gray-100 uppercase bg-primary-900 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) => (
              <tr
                key={item._id}
                className="odd:bg-gray-900 even:bg-primary-900"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap "
                >
                  ${item.amount}
                </th>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">
                  {moment(item.created_at).format("lll")}
                </td>
                <td
                  className={`px-6 py-4 font-bold ${
                    item.status == 0
                      ? "text-red-500"
                      : item.status == 1
                      ? "text-green-500"
                      : "text-orange-500"
                  }`}
                >
                  {item.status == 0
                    ? "Failed"
                    : item.status == 1
                    ? "Complete"
                    : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
