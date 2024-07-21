import React, { createContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    secureLocalStorage.getItem("userData") || null
  );
  const [activePath, setActivePath] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [nextRoute, setNextRoute] = useState("");
  const [lastLogin, setLastLogin] = useState(
    secureLocalStorage.getItem("lastLogin") || null
  );

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,

        nextRoute,
        setNextRoute,

        menuOpen,
        setMenuOpen,

        activePath,
        setActivePath,

        lastLogin,
        setLastLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
