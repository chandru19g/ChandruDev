import React from "react";
import { Link } from "react-router-dom";
import Divider from "../components/UI/Divider";

const Intro = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 py-4 text-whiteColor md:py-24">
        <div className="text-xl font-semibold">Chandru</div>
        <div className="text-2xl font-bold text-secondaryColor pt-2 text-center">
          Android/iOS App Developer | Full-Stack web Developer
        </div>
        <div className="text-center md:w-3/4 text-xl text-greyColor pt-2">
          I create seamless mobile and web applications, specializing in
          Android/iOS development using Flutter and full-stack web development
          with the MERN stack. My focus is on delivering user-friendly and
          high-performance solutions that bring your ideas to life.
        </div>
        <Link
          className="bg-secondaryColor px-3 py-1 rounded-lg text-primaryColor my-10 text-xl font-medium"
          to="#contact"
        >
          Get in touch
        </Link>
      </div>
      <Divider className={`border-secondaryColor mx-0`} />
    </section>
  );
};

export default Intro;
