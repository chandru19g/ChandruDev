import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ link, onClick }) => (
  <Link to={link.path} onClick={onClick}>
    <p
      className={`border-whiteColor rounded-lg border-[1px] px-4 py-1 text-whiteColor font-medium uppercase hover:text-primaryColor hover:bg-secondaryColor hover:border-secondaryColor cursor-pointer ease-in-out duration-150 `}
    >
      {link.title}
    </p>
  </Link>
);

export default NavLinks;
