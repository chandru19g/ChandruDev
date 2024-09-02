import React from "react";
import NavLinks from "../Navbar/NavLinks";
import { Link } from "react-router-dom";
import NameLogo from "../UI/NameLogo";

export default function () {
  const navLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-blueGreyColor w-full">
      <div className="h-full max-w-screen-xl mx-auto flex flex-col items-center justify-between px-4 py-6 ">
        <NameLogo />
        <div className="flex flex-row py-4">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 space-x-2 mt-0">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link
                  className="text-greyColor font-semibold text-lg"
                  to={navLink.path}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-b-2 border-whiteColor mx-4" />
      <div className="h-full max-w-screen-xl mx-auto flex flex-col text-greyColor text-lg items-center justify-between px-4 py-6">
        © 2024 Chandru. All rights reserved
      </div>
    </div>
  );
}
