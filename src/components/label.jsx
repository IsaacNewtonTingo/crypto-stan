import { AppContext } from "../context/app-context";
import React, { useContext } from "react";

export default function Label(props) {
  const { theme } = useContext(AppContext);
  return (
    <p className={`text-sm text-gray-700 font-bold ${props.myStyles} `}>
      {props.children}
    </p>
  );
}
