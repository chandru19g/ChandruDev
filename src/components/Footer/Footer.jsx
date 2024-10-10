import React from "react";
import { Link } from "react-router-dom";
import NameLogo from "../UI/NameLogo";
import Divider from "../UI/Divider";

import { useNavLinks } from "../../data/NavLinksContext";

import gitHub from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import medium from "../../assets/medium.png";

export default function () {
  const navLinks = useNavLinks();

  const socialMediaIcons = [
    {
      icon: gitHub,
      path: "https://github.com/chandru19g",
    },
    {
      icon: linkedIn,
      path: "https://www.linkedin.com/in/chandru-g-156a831b1/",
    },
    {
      icon: instagram,
      path: "https://www.instagram.com/chandruappdev/",
    },
    {
      icon: medium,
      path: "https://medium.com/@chandru1918g",
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
                  className="text-greyColor hover:text-whiteColor font-semibold text-lg"
                  to={navLink.path}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row py-6">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 space-x-2 mt-0">
            {socialMediaIcons.map((socialMediaIcon, index) => (
              <li key={index}>
                <Link
                  className="text-greyColor hover:text-whiteColor font-semibold text-lg"
                  to={socialMediaIcon.path}
                  target="_blank"
                >
                  <img src={socialMediaIcon.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Divider />
      <div className="h-full max-w-screen-xl mx-auto flex flex-col text-greyColor text-lg items-center justify-between px-4 py-6">
        © 2024 Chandru. All rights reserved.
      </div>
    </div>
  );
}
