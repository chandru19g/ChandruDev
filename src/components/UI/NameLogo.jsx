import React from "react";
import { Link } from "react-router-dom";

export default function NameLogo() {
  const handleNavClick = (path) => {
    document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link
      to={"#"}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick("#");
      }}
      className="text-secondaryColor uppercase text-lg font-semibold"
    >
      Chandru
    </Link>
  );
}
