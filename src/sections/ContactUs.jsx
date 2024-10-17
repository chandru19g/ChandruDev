import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import contactBg from "../assets/contact-bg.png";

export const ContactUs = () => {
  const techs = [
    { name: "Mobile App", slug: "mobileapp" },
    { name: "Website", slug: "website" },
    { name: "Backend", slug: "backend" },
    { name: "Full-Stack App/Website", slug: "fullstack" },
    { name: "Others", slug: "others" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    slugName: "mobileapp",
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSlugChange = (slug) => {
    setFormData({ ...formData, slugName: slug });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
  };

  return (
    <section id="contact" data-aos="zoom-in-up">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center md:px-4 py-8 md:py-24 text-whiteColor">
        <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
        <div className="flex flex-col-reverse md:flex-row md:my-16 my-12 w-full">
          <div
            className="hidden md:flex w-1/2 justify-center items-center p-10 text-5xl font-extrabold rounded-l-3xl"
            style={{
              backgroundImage: `url(${contactBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            Let's discuss something cool together
          </div>
          <div className="bg-whiteColor w-full md:w-1/2 md:px-12 py-12 px-6 md:rounded-r-3xl text-primaryColor">
            <h3 className="text-2xl font-medium mb-4">I'm interested in...</h3>
            <ul className="flex flex-wrap gap-3 mb-8">
              {techs.map((tech) => (
                <li
                  key={tech.slug}
                  className={`cursor-pointer px-3 sm:px-6 py-2 text-xl font-medium rounded-xl border-2 ease-in-out duration-300 delay-200 ${
                    formData.slugName === tech.slug
                      ? "bg-secondaryColor text-primaryColor border-secondaryColor"
                      : "text-purpleColor text-opacity-50 border-primaryColor border-opacity-50"
                  }`}
                  onClick={() => handleSlugChange(tech.slug)}
                >
                  {tech.name}
                </li>
              ))}
            </ul>
            <form className="flex flex-col gap-16 py-8" onSubmit={handleSubmit}>
              {["name", "email", "message"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  value={formData[field]}
                  required={true}
                  onChange={handleInputChange}
                  placeholder={`Your ${
                    field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
                  }`}
                  className="border-b-2 border-opacity-40 border-primaryColor bg-transparent outline-none pb-2 placeholder:text-primaryColor placeholder:text-opacity-40 placeholder:text-2xl text-xl pl-1"
                />
              ))}
              <input
                type="submit"
                value="Send Message"
                className="self-start bg-secondaryColor text-primaryColor text-2xl font-medium py-6 px-14 rounded-2xl hover:cursor-pointer hover:bg-opacity-75"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
