import React, { createContext, useContext } from "react";

const NavLinksContext = createContext([]);

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const NavLinksProvider = ({ children }) => {
  return (
    <NavLinksContext.Provider value={navLinks}>
      {children}
    </NavLinksContext.Provider>
  );
};

export const useNavLinks = () => {
  return useContext(NavLinksContext);
};
