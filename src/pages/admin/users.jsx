import React, { useContext, useEffect, useRef, useState } from "react";
import OverviewCard from "../../components/overview-card";
import Title from "../../components/title";
import moment from "moment";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../../context/app-context";
import { Link, useNavigate } from "react-router-dom";
import EditBalanceModal from "../../components/admin/edit-balance-modal";
import LoadingData from "../../components/loading-data";

export default function Users() {
  const { userData } = useContext(AppContext);
  const [totalUsers, setTotalUsers] = useState({
    data: [],
    total: 0,
    active: 0,
    inactive: 0,
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

  const [activeItem, setActiveItem] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  const [balance, setBalance] = useState(0);
  const [processing, setProcessing] = useState(0);
  const [loadingData, setLoadingData] = useState(true);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      userData &&
      (userData.roleID == "superAdmin" || userData.roleID == "admin")
    ) {
      getUsers();
    } else {
      navigate("/login");
      setLoadingData(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
      setLoadingData(false);
    } catch (error) {
      setLoadingData(false);

      toast.error("An error occured while getting users");
    }
  }

  function toggleDropdown(item) {
    setActiveItem(item);
    setDropdown(!dropdown);
    setBalance(item.accountBalance);
  }

  function toggleEditModal(item) {
    setModal(!modal);
  }

  async function updateBalance(e) {
    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/api/user`;
      const data = {
        balance,
        userID: userData._id,
        clientID: activeItem._id,
      };
      setProcessing(true);
      const response = await axios.put(url, data, { withCredentials: true });
      if (response.data.status === "Success") {
        toast.success(response.data.message);
        setModal(false);
        getUsers();
        setActiveItem(null);
        setDropdown(false);
      } else {
        toast.error(response.data.message);
      }
      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      toast.error("An error occured while updating balance");
    }
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  return (
    <div>
      <Toaster />
      {loadingData && <LoadingData />}

      <Title className={"text-white"}>Welcome back John Doe</Title>
      <h2 className="text-gray-500">
        Happy to see you again. Get update of your asset today, good luck!!!
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
        <OverviewCard
          title={"All Users"}
          content={`${totalUsers.total}`}
          icon={usersIcon}
          sub={``}
          subColor={`${
            totalUsers.difference > 0 ? "text-green-400" : "text-red-400"
          }`}
        />

        <OverviewCard
          title={"Active Users"}
          content={`${totalUsers.active}`}
          icon={usersIcon}
          sub={""}
          subColor={`${"text-green-400"}`}
        />
        <OverviewCard
          title={"Inactive Users"}
          content={`${totalUsers.inactive}`}
          icon={usersIcon}
          sub={""}
          subColor={`${"text-green-400"}`}
        />
      </div>

      <h2 className="text-white font-bold mt-10">All users</h2>

      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-200 overflow-auto">
          <thead className="text-xs text-gray-100 uppercase bg-primary-900 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Account Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Date Joined
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="overflow-auto">
            {totalUsers.data.map((item, index) => (
              <tr
                key={item._id}
                className="odd:bg-gray-900 even:bg-primary-900"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  {item.firstName} {item.lastName}
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap "
                >
                  {item.email}
                </th>
                <td className="px-6 py-4">${item.accountBalance}</td>
                <td className="px-6 py-4">
                  {moment(item.createdAt).format("lll")}
                </td>

                <td className={`px-6 py-4 font-bold relative`}>
                  <svg
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={() => toggleDropdown(item)}
                  >
                    <g fill="currentColor" fillRule="evenodd">
                      <path d="M11.5 10.5 A1 1 0 0 1 10.5 11.5 A1 1 0 0 1 9.5 10.5 A1 1 0 0 1 11.5 10.5 z" />
                      <path d="M11.5 5.5 A1 1 0 0 1 10.5 6.5 A1 1 0 0 1 9.5 5.5 A1 1 0 0 1 11.5 5.5 z" />
                      <path d="M11.5 15.5 A1 1 0 0 1 10.5 16.5 A1 1 0 0 1 9.5 15.5 A1 1 0 0 1 11.5 15.5 z" />
                    </g>
                  </svg>

                  {dropdown && activeItem._id == item._id && (
                    <ul
                      ref={dropdownRef}
                      className="bg-white rounded-lg text-gray-500"
                    >
                      <button
                        onClick={() => navigate(`${item._id}`)}
                        to={`${item._id}`}
                        className="w-full text-left p-4 hover:bg-gray-100"
                      >
                        View Details
                      </button>
                      <br />

                      <button
                        onClick={() => toggleEditModal(item)}
                        className="w-full text-left p-4 hover:bg-gray-100"
                      >
                        Update Balance
                      </button>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <EditBalanceModal
          processing={processing}
          balance={balance}
          disabled={!balance || processing}
          setBalance={setBalance}
          updateBalance={updateBalance}
          setModal={setModal}
          user={activeItem}
        />
      )}
    </div>
  );
}
