import React, { useContext, useEffect, useState } from "react";
import OverviewCard from "../../components/overview-card";
import Title from "../../components/title";
import moment from "moment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app-context";
import axios from "axios";
import LoadingData from "../../components/loading-data";

export default function Admin() {
  const { userData } = useContext(AppContext);
  const [totalUsers, setTotalUsers] = useState();
  const [transactions, setTransactions] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  const depositIcon = (
    <svg
      className="w-[100px] text-primary-100"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.375 10.9376C9.12636 10.9376 8.8879 10.8388 8.71209 10.663C8.53627 10.4872 8.4375 10.2487 8.4375 10.0001V3.51568L7.85078 4.1024C7.67466 4.27852 7.43579 4.37746 7.18672 4.37746C6.93765 4.37746 6.69878 4.27852 6.52266 4.1024C6.34654 3.92628 6.24759 3.68741 6.24759 3.43834C6.24759 3.18927 6.34654 2.95039 6.52266 2.77427L8.71016 0.586774C8.79725 0.499375 8.90075 0.430027 9.0147 0.38271C9.12866 0.335392 9.25083 0.311035 9.37422 0.311035C9.49761 0.311035 9.61978 0.335392 9.73374 0.38271C9.84769 0.430027 9.95118 0.499375 10.0383 0.586774L12.2258 2.77427C12.4019 2.95039 12.5008 3.18927 12.5008 3.43834C12.5008 3.68741 12.4019 3.92628 12.2258 4.1024C12.0497 4.27852 11.8108 4.37746 11.5617 4.37746C11.3126 4.37746 11.0738 4.27852 10.8977 4.1024L10.3125 3.51568V10.0001C10.3125 10.2487 10.2137 10.4872 10.0379 10.663C9.8621 10.8388 9.62364 10.9376 9.375 10.9376ZM15.3125 9.49381V7.50006C15.3125 7.08565 15.1479 6.68823 14.8549 6.3952C14.5618 6.10218 14.1644 5.93756 13.75 5.93756H12.8125C12.5639 5.93756 12.3254 6.03633 12.1496 6.21214C11.9738 6.38796 11.875 6.62642 11.875 6.87506C11.875 7.1237 11.9738 7.36215 12.1496 7.53797C12.3254 7.71378 12.5639 7.81256 12.8125 7.81256H13.4375V13.1485C12.961 12.8737 12.4072 12.7638 11.8618 12.8357C11.3165 12.9076 10.8101 13.1574 10.4211 13.5463C10.0321 13.9352 9.78227 14.4415 9.71023 14.9868C9.63819 15.5321 9.748 16.086 10.0227 16.5626C10.0312 16.5782 10.0406 16.593 10.05 16.6079L11.7891 19.2641C11.9253 19.4724 12.1387 19.6179 12.3822 19.6689C12.6258 19.7198 12.8797 19.6718 13.0879 19.5356C13.2961 19.3994 13.4417 19.186 13.4926 18.9424C13.5435 18.6988 13.4956 18.445 13.3594 18.2368L11.6406 15.6071C11.5601 15.462 11.5405 15.291 11.5862 15.1315C11.6318 14.972 11.7389 14.8372 11.884 14.7567C12.029 14.6762 12.2001 14.6566 12.3596 14.7023C12.5191 14.7479 12.6539 14.855 12.7344 15.0001C12.743 15.0157 12.7523 15.0305 12.7625 15.0454L13.5938 16.3188C13.7048 16.4863 13.8668 16.6136 14.0558 16.6821C14.2447 16.7505 14.4507 16.7564 14.6433 16.6989C14.8359 16.6414 15.0048 16.5235 15.1253 16.3627C15.2458 16.2018 15.3114 16.0065 15.3125 15.8055V12.0313C16.1179 13.0145 16.5595 14.2455 16.5625 15.5165V18.7501C16.5625 18.9987 16.6613 19.2372 16.8371 19.413C17.0129 19.5888 17.2514 19.6876 17.5 19.6876C17.7486 19.6876 17.9871 19.5888 18.1629 19.413C18.3387 19.2372 18.4375 18.9987 18.4375 18.7501V15.5196C18.434 14.3389 18.1486 13.1762 17.605 12.1281C17.0615 11.08 16.2755 10.1769 15.3125 9.49381ZM5.9375 5.93756H5C4.5856 5.93756 4.18817 6.10218 3.89515 6.3952C3.60212 6.68823 3.4375 7.08565 3.4375 7.50006V15.6251C3.4375 15.8737 3.53627 16.1122 3.71209 16.288C3.8879 16.4638 4.12636 16.5626 4.375 16.5626C4.62364 16.5626 4.8621 16.4638 5.03791 16.288C5.21373 16.1122 5.3125 15.8737 5.3125 15.6251V7.81256H5.9375C6.18614 7.81256 6.4246 7.71378 6.60041 7.53797C6.77623 7.36215 6.875 7.1237 6.875 6.87506C6.875 6.62642 6.77623 6.38796 6.60041 6.21214C6.4246 6.03633 6.18614 5.93756 5.9375 5.93756Z"
        fill="currentcolor"
      />
    </svg>
  );
  const withdrawIcon = (
    <svg
      className="w-[100px] text-primary-100"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4375 15.5195V18.75C18.4375 18.9986 18.3387 19.2371 18.1629 19.4129C17.9871 19.5887 17.7486 19.6875 17.5 19.6875C17.2514 19.6875 17.0129 19.5887 16.8371 19.4129C16.6613 19.2371 16.5625 18.9986 16.5625 18.75V15.5195C16.5602 14.2475 16.1186 13.0153 15.3125 12.0312V15.8023C15.3114 16.0033 15.2458 16.1986 15.1253 16.3595C15.0048 16.5203 14.8359 16.6382 14.6433 16.6957C14.4507 16.7532 14.2447 16.7473 14.0558 16.6789C13.8668 16.6105 13.7048 16.4831 13.5938 16.3156L12.7602 15.0422C12.7501 15.0275 12.7407 15.0124 12.732 14.9969C12.6515 14.8518 12.5167 14.7447 12.3572 14.6991C12.1978 14.6534 12.0267 14.673 11.8816 14.7535C11.7366 14.834 11.6295 14.9688 11.5838 15.1283C11.5382 15.2878 11.5578 15.4589 11.6383 15.6039L13.357 18.2336C13.4267 18.3366 13.4752 18.4524 13.4996 18.5743C13.5241 18.6961 13.5241 18.8217 13.4996 18.9436C13.4751 19.0654 13.4266 19.1812 13.357 19.2842C13.2873 19.3872 13.1979 19.4752 13.0938 19.5433C12.9898 19.6114 12.8733 19.6581 12.751 19.6807C12.6288 19.7033 12.5033 19.7014 12.3818 19.675C12.2603 19.6487 12.1452 19.5984 12.0434 19.5272C11.9415 19.456 11.8548 19.3652 11.7883 19.2602L10.0492 16.6039C10.0398 16.5891 10.0305 16.5742 10.0219 16.5586C9.74872 16.082 9.64014 15.5287 9.71292 14.9842C9.7857 14.4397 10.0358 13.9344 10.4245 13.5463C10.8133 13.1581 11.319 12.9089 11.8636 12.837C12.4082 12.7651 12.9613 12.8745 13.4375 13.1484V5.3125H12.8125C12.5639 5.3125 12.3254 5.21373 12.1496 5.03791C11.9738 4.8621 11.875 4.62364 11.875 4.375C11.875 4.12636 11.9738 3.8879 12.1496 3.71209C12.3254 3.53627 12.5639 3.4375 12.8125 3.4375H13.75C14.1644 3.4375 14.5618 3.60212 14.8549 3.89515C15.1479 4.18817 15.3125 4.5856 15.3125 5V9.49375C16.2755 10.1768 17.0615 11.08 17.605 12.128C18.1486 13.1761 18.434 14.3389 18.4375 15.5195ZM6.875 4.375C6.875 4.12636 6.77623 3.8879 6.60041 3.71209C6.4246 3.53627 6.18614 3.4375 5.9375 3.4375H5C4.5856 3.4375 4.18817 3.60212 3.89515 3.89515C3.60212 4.18817 3.4375 4.5856 3.4375 5V15.625C3.4375 15.8736 3.53627 16.1121 3.71209 16.2879C3.8879 16.4637 4.12636 16.5625 4.375 16.5625C4.62364 16.5625 4.8621 16.4637 5.03791 16.2879C5.21373 16.1121 5.3125 15.8736 5.3125 15.625V5.3125H5.9375C6.18614 5.3125 6.4246 5.21373 6.60041 5.03791C6.77623 4.8621 6.875 4.62364 6.875 4.375ZM12.2258 9.1C12.4019 8.92388 12.5008 8.68501 12.5008 8.43594C12.5008 8.18687 12.4019 7.948 12.2258 7.77188C12.0497 7.59575 11.8108 7.49681 11.5617 7.49681C11.3126 7.49681 11.0738 7.59575 10.8977 7.77188L10.3125 8.35938V1.25C10.3125 1.00136 10.2137 0.762903 10.0379 0.587087C9.8621 0.411272 9.62364 0.3125 9.375 0.3125C9.12636 0.3125 8.8879 0.411272 8.71209 0.587087C8.53627 0.762903 8.4375 1.00136 8.4375 1.25V8.35938L7.85078 7.77188C7.67466 7.59575 7.43579 7.49681 7.18672 7.49681C6.93765 7.49681 6.69878 7.59575 6.52266 7.77188C6.34654 7.948 6.24759 8.18687 6.24759 8.43594C6.24759 8.55927 6.27188 8.68139 6.31908 8.79533C6.36627 8.90927 6.43545 9.01279 6.52266 9.1L8.71016 11.2875C8.79725 11.3749 8.90075 11.4442 9.0147 11.4916C9.12866 11.5389 9.25083 11.5632 9.37422 11.5632C9.49761 11.5632 9.61978 11.5389 9.73374 11.4916C9.84769 11.4442 9.95118 11.3749 10.0383 11.2875L12.2258 9.1Z"
        fill="currentcolor"
      />
    </svg>
  );
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
  const usersIcon = (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      className="w-[100px] text-primary-100"
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

  const navigate = useNavigate();

  useEffect(() => {
    if (
      userData &&
      (userData.roleID == "superAdmin" || userData.roleID == "admin")
    ) {
      getUsers();
      getTransactions();
    } else {
      navigate("/login");
    }
  }, []);

  async function getUsers() {
    try {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/user`;
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.status == "Success") {
        setTotalUsers(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occured while getting users");
    }
  }

  async function getTransactions() {
    try {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/transactions/admin-transactions/`;
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.status === "Success") {
        setTransactions(response.data.data);
      } else {
        toast.error(response.data.message);
      }
      setLoadingData(false);
    } catch (error) {
      setLoadingData(false);

      toast.error("an error occured while getting transactions");
    }
  }

  return (
    <div>
      {loadingData && <LoadingData />}

      <Title className={"text-white"}>
        Welcome back {userData.firstName} {userData.lastName}
      </Title>
      <h2 className="text-gray-500">
        Happy to see you again. Get update of your asset today, good luck!!!
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
        <OverviewCard
          title={"Total Balance"}
          content={`$${transactions?.balance}`}
          icon={balanceIcon}
          // sub={`${totalBalance.difference}(${totalBalance.percentage}%)`}
          // subColor={`${
          //   totalBalance.difference > 0 ? "text-green-400" : "text-red-400"
          // }`}
        />
        <OverviewCard
          title={"All Users"}
          content={`${totalUsers?.total}`}
          icon={usersIcon}
          sub={``}
          subColor={``}
        />

        <OverviewCard
          title={"Total Deposits"}
          content={`$${transactions?.deposits?.amount}`}
          icon={depositIcon}
          sub={transactions?.deposits?.count}
          subColor={`${"text-green-400"}`}
        />

        <OverviewCard
          title={"Total Withdrawals"}
          content={`$${transactions?.withdrawals?.amount}`}
          icon={withdrawIcon}
          sub={transactions?.withdrawals?.count}
          subColor={`${"text-green-400"}`}
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
            {transactions?.data?.map((item, index) => (
              <tr
                key={item._id}
                className="odd:bg-gray-900 even:bg-primary-900"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  {item.user.firstName} {item.user.lastName}
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
