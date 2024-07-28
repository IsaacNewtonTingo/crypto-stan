import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app-context";
import Title from "../../components/title";
import moment from "moment";
import OverviewCard from "../../components/overview-card";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import ContactModal from "../../components/dashboard/contact-modal";
import LoadingData from "../../components/loading-data";

export default function Deposit() {
  const { userData } = useContext(AppContext);
  const [transactions, setTransactions] = useState(null);
  const [contactModal, setContactModal] = useState(false);
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

  const callIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-[100px] text-primary-100"
    >
      <path d="M16.57 22a2 2 0 001.43-.59l2.71-2.71a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0l-1.6 1.59a7.55 7.55 0 01-3-1.59 7.62 7.62 0 01-1.59-3l1.59-1.6a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0L2.59 6A2 2 0 002 7.43 15.28 15.28 0 006.3 17.7 15.28 15.28 0 0016.57 22zM6 5.41L8.59 8 7.3 9.29a1 1 0 00-.3.91 10.12 10.12 0 002.3 4.5 10.08 10.08 0 004.5 2.3 1 1 0 00.91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 01-8.87-3.71A13.28 13.28 0 014 7.41zM20 11h2a8.81 8.81 0 00-9-9v2a6.77 6.77 0 017 7z" />
      <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" />
    </svg>
  );

  async function getTransactions() {
    try {
      setLoadingData(true);

      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/transactions?type=deposit&user=${userData?._id}`;
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

  function toggleContactManager() {
    setContactModal(!contactModal);
  }

  async function contactManager(e) {
    try {
      e.preventDefault();
      setProcessing(true);
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/transactions/contact-manager`;
      const data = {
        userID: userData._id,
        amount,
      };
      const response = await axios.post(url, data, { withCredentials: true });
      if (response.data.status === "Success") {
        setAmount("");
        setContactModal(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      toast.error("an error occured while contacting");
    }
  }
  return (
    <div>
      <Title className={"text-white"}>Deposit</Title>
      <h2 className="text-gray-500">
        In order to make a deposit, please contact your area manager{" "}
        <span className="text-white font-bold">Syed Omar</span>
      </h2>
      {loadingData && <LoadingData />}

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
        <OverviewCard
          title={"Total Deposit"}
          content={`USD. ${transactions?.total}`}
          icon={balanceIcon}
          sub={``}
          subColor={``}
        />
        <OverviewCard
          title={"Contact line manager"}
          content={`Deposit`}
          icon={callIcon}
          sub={``}
          subColor={``}
          onClick={() => toggleContactManager()}
          className={
            "hover:scale-[1.05] transition-tranform duration-300 hover:border-[1px] hover:border-primary-500"
          }
        />
      </div>

      <h2 className="text-white font-bold mt-10">Deposit History</h2>

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

      {contactModal && (
        <ContactModal
          toggleContactModal={toggleContactManager}
          amount={amount}
          setAmount={setAmount}
          contactManager={contactManager}
          processing={processing}
        />
      )}
    </div>
  );
}
