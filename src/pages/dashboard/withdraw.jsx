import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app-context";
import Title from "../../components/title";
import moment from "moment";
import OverviewCard from "../../components/overview-card";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import WithdrawalModal from "../../components/dashboard/withdrawal-modal";
import LoadingData from "../../components/loading-data";

export default function Withdraw() {
  const { userData } = useContext(AppContext);
  const [transactions, setTransactions] = useState(null);
  const [withdrawalModal, setWithdrawalModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [processing, setProcessing] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login");
      setLoadingData(false);
    } else {
      getTransactions();
    }
  }, []);

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

  const addIcon = (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className="w-[100px] text-primary-100"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 176v160M336 256H176"
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

  async function getTransactions() {
    try {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/transactions?type=withdrawal&user=${userData?._id}`;
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

  function toggleWithdrawalModal() {
    setWithdrawalModal(!withdrawalModal);
  }
  return (
    <div>
      {loadingData && <LoadingData />}

      <Title className={"text-white"}>Withdraw</Title>
      <h2 className="text-gray-500">Have a look at your withdrawal records</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
        <OverviewCard
          title={"Total Withdrawal"}
          content={`USD. ${transactions?.total}`}
          icon={balanceIcon}
          sub={``}
          subColor={``}
        />
        <OverviewCard
          title={"Make a withdrawal"}
          content={`Withdraw`}
          icon={withdrawIcon}
          sub={``}
          subColor={``}
          onClick={toggleWithdrawalModal}
          className={
            "hover:scale-[1.05] transition-tranform duration-300 hover:border-[1px] hover:border-primary-500"
          }
        />
      </div>

      <h2 className="text-white font-bold mt-10">Withdrawal History</h2>

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
            {transactions?.data?.map((item, index) => (
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
                  {moment(item.createdAt).format("lll")}
                </td>
                <td
                  className={`px-6 py-4 font-bold ${
                    item.status === 0
                      ? "text-red-700"
                      : item.status === 1
                      ? "text-green-500"
                      : "text-orange-400"
                  }`}
                >
                  {item.status === 0
                    ? "Failed"
                    : item.status === 1
                    ? "Complete"
                    : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {withdrawalModal && (
        <WithdrawalModal
          processing={processing}
          amount={amount}
          setAmount={setAmount}
          toggleWithdrawalModal={toggleWithdrawalModal}
        />
      )}
    </div>
  );
}
