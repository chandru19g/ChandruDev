import React from "react";
import NavLinks from "./NavLinks";
import NameLogo from "../UI/NameLogo";
import { handleNavClick, useNavLinks } from "../../data/NavLinksContext";

export default function Navbar() {
  const navLinks = useNavLinks();

  return (
    <nav className="w-full z-50 top-0">
      <div className="h-full max-w-screen-xl mx-auto flex flex-row items-center justify-between px-4 py-4">
        <NameLogo />
        <div className="block w-auto" id="navbar">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 space-x-2 mt-0">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLinks
                  link={navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(navLink.path);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
