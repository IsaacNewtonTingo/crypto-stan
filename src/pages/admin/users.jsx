import React, { useState } from "react";
import OverviewCard from "../../components/overview-card";
import Title from "../../components/title";
import moment from "moment";

export default function Users() {
  const [totalUsers, setTotalUsers] = useState({
    total: 24,
    active: 24,
    difference: 56,
    percentage: 12,
  });
  const usersIcon = (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      className="w-[70px] text-primary-100"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 2.5a3 3 0 013 3v2a3 3 0 11-6 0v-2a3 3 0 013-3zm7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 001 1h12a1 1 0 001-1z" />
        <path
          fill="currentColor"
          d="M12.52 2.678A3.001 3.001 0 0114.5 5.5v1c0 1.297-.848 2.581-2 3 .674-.919 1.01-2.086 1.01-3.5s-.331-2.523-.99-3.322zM17.5 17.5h1a1 1 0 001-1v-.728c0-2.17-1.71-3.83-3.847-4.667 0 0 2.847 2.395 1.847 6.395z"
        />
      </g>
    </svg>
  );

  const transactions = [
    {
      _id: 1,
      first_name: "King",
      last_name: "James",
      amount: "243.99",
      created_at: "10/10/2012",
      type: "Deposit",
      status: 1,
    },
    {
      _id: 2,
      first_name: "King",
      last_name: "James",
      amount: "10.99",
      created_at: "10/10/2012",
      type: "Withdrawal",
      status: 0,
    },
    {
      _id: 3,
      first_name: "King",
      last_name: "James",
      amount: "100.99",
      created_at: "10/10/2012",
      type: "Withdrawal",
      status: 2,
    },
  ];
  /**
   * All users
   * Net amount
   * Pending withrawals
   * Pending Deposits
   * recent transactions
   */
  return (
    <div>
      <Title className={"text-white"}>Welcome back John Doe</Title>
      <h2 className="text-gray-500">
        Happy to see you again. Get update of your asset today, good luck!!!
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
        <OverviewCard
          title={"All Users"}
          content={`${totalUsers.total}`}
          icon={usersIcon}
          sub={`${totalUsers.difference > 0 ? "+" : "-"}${totalUsers.total}(${
            totalUsers.percentage
          }%)`}
          subColor={`${
            totalUsers.difference > 0 ? "text-green-400" : "text-red-400"
          }`}
        />

        <OverviewCard
          title={"Active Users"}
          content={`$${totalUsers.active}`}
          icon={usersIcon}
          sub={""}
          subColor={`${"text-green-400"}`}
        />
        <OverviewCard
          title={"Inactive Users"}
          content={`$${totalUsers.active}`}
          icon={usersIcon}
          sub={""}
          subColor={`${"text-green-400"}`}
        />
      </div>

      <h2 className="text-white font-bold mt-10">All users</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-200">
          <thead className="text-xs text-gray-100 uppercase bg-primary-900 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
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
                <td className="px-6 py-4">
                  {item.first_name} {item.last_name}
                </td>
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
