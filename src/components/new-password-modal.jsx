import React from "react";
import Title from "./title";
import Label from "./label";
import TextInput from "./text-input";
import PrimaryButton from "./primary-button";

export default function NewPasswordModal({
  email,
  code,
  setCode,
  setNewPasswordModal,
  verify,
  processing,
  password,
  confirmPassword,
  setConfirmPassword,
  setPassword,
  resend,
}) {
  return (
    <div className="fixed left-0 right-0 z-50 flex items-center justify-center w-full bg-[rgba(0,0,0,0.9)] md:inset-0 h-screen">
      <div className="w-[90%] md:w-[30%] bg-gray-50 rounded-lg p-6 gap-4">
        <div className="flex items-center justify-between">
          <Title className="text-[30px] text-gray-700">Confirm OTP</Title>

          <svg
            onClick={() => setNewPasswordModal(false)}
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
        <p className="text-gray-500 mt-4">
          Enter the One Time Password sent to {email} to complete the
          registration process{" "}
        </p>

        <form onSubmit={verify}>
          <Label myStyles="mt-8">Code*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="e.g 453749"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="number"
          />

          <Label myStyles="mt-4">New Password*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Label myStyles="mt-4">Confirm New Password*</Label>
          <TextInput
            className="h-[50px] w-full mt-2"
            placeholder="********"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />

          <PrimaryButton processing={processing} className="w-full mt-4">
            Verify
          </PrimaryButton>
        </form>

        <p className="text-center mt-4 text-gray-500">
          Didn&apos;t receive code?
          <button
            disabled={processing}
            onClick={resend}
            className={`${
              processing ? "opacity-50" : "text-myBlue hover:text-orange-500 "
            }`}
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
