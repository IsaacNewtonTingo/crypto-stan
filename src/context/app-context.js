import React, { createContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    secureLocalStorage.getItem("userData")
      ? secureLocalStorage.getItem("userData")
      : null
  );

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
