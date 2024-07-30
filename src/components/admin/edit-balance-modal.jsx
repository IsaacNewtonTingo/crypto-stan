import React from "react";
import Label from "../label";
import TextInput from "../text-input";
import PrimaryButton from "../primary-button";
import Title from "../title";

export default function EditBalanceModal({
  balance,
  setBalance,
  updateBalance,
  processing,
  disabled,
  setModal,
  user,
}) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full bg-[rgba(0,0,0,0.9)] md:inset-0 h-screen">
      <div className="w-[90%] md:w-[40%] bg-gray-50 rounded-lg p-6 gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold text-gray-900">
            Update Account Balance for{" "}
            <span className="text-orange-500">
              {user?.firstName} {user?.lastName}
            </span>
          </h2>

          <svg
            onClick={() => setModal(false)}
            fill="none"
            viewBox="0 0 24 24"
            className="w-[30px] text-red-200 hover:text-red-500 cursor-pointer"
          >
            <path
              fill="currentColor"
              d="M16.34 9.322a1 1 0 10-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 007.86 9.024l2.728 2.926-2.927 2.728a1 1 0 101.364 1.462l2.926-2.727 2.728 2.926a1 1 0 101.462-1.363l-2.727-2.926 2.926-2.728z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 110-18 9 9 0 010 18z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <form onSubmit={updateBalance}>
          <Label myStyles="mt-8">Account Balance*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="e.g 453749"
            required
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            type="number"
          />

          <PrimaryButton
            processing={processing}
            disabled={disabled}
            className="w-full mt-4"
          >
            Verify
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
