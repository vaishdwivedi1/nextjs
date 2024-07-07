"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import Link from "next/link";
import useDeviceSize from "@/app/hooks/useDevice";

const Projects = () => {
  const isMobile = useDeviceSize() == "xs";
  return (
    <div>
      <Header />
      <div className="py-20 md:py-20 lg:py-20">
        <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8   gap-8 md:gap-10 lg:gap-14">
          <h2 className="text-3xl font-semibold text-center pb-8 m-0">
            My Projects
          </h2>

          <div
            style={{ margin: isMobile ? "0" : "2rem" }}
            className="grid m-8 grid-cols-1 md:grid-cols-2  gap-x-20 gap-y-20"
          >
            <SingleProjectCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

const projectData = [
  {
    img: "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/03cd93b8-2da4-4b3a-b9a1-953880af2c03.png",
    heading: "E-commerce Website Project",
    techUsed: "Tech used: MERN stack, Tailwind",
    projectReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    techReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    projectUrl: "https://e-com-backend-2.vercel.app/",
    githubUrl: "https://github.com/vaishdwivedi1/e-commerce/tree/main",
  },
  {
    img: "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/03cd93b8-2da4-4b3a-b9a1-953880af2c03.png",
    heading: "Blogging Website Project",
    techUsed: "Tech used: MERN stack, Tailwind",
    projectReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    techReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    projectUrl: "https://blogging-website-coral.vercel.app/",
    githubUrl: "https://github.com/vaishdwivedi1/blogging-website",
  },
  {
    img: "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/03cd93b8-2da4-4b3a-b9a1-953880af2c03.png",
    heading: "Chat Application",
    techUsed: "Tech used: MERN stack, Tailwind",
    projectReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    techReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    projectUrl: "https://chat-ecru-nine.vercel.app/chats",
    githubUrl: "https://github.com/vaishdwivedi1/chat",
  },
  {
    img: "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/03cd93b8-2da4-4b3a-b9a1-953880af2c03.png",
    heading: "Context API Application",
    techUsed: "Tech used: MERN stack, Tailwind",
    projectReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    techReason:
      "I know every resume has an e-commerce website, but my reason was to handle a very complicated project. This challenge led me to improve my system design, component creation, and logic-building skills.",
    projectUrl: "https://context-api-two-sable.vercel.app/",
    githubUrl: "https://github.com/vaishdwivedi1/context-api",
  },
];
const SingleProjectCard = () => {
  return (
    <>
      {projectData.map((project) => (
        <div className="rounded-md bg-gray-50 p-5 md:p-5 lg:p-6 transform motion-safe:hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center items-center text-white bg-primary-500 rounded-xl transition duration-300 ease-in-out">
            <img
              alt="mern"
              loading="lazy"
              decoding="async"
              className="min-h-64 object-cover rounded-md w-full h-60 transition duration-300 ease-in-out hover:brightness-75"
              style={{ color: "transparent", width: "100%", height: "100%" }}
              src={project.img}
            />
          </div>
          <h3 className="text-lg md:text-[20px] font-medium mt-8 md:mt-8 lg:mt-8 transition duration-300 ease-in-out">
            {project.heading}{" "}
          </h3>
          <p className="text-gray-500 text-base mt-2 transition duration-300 ease-in-out">
            {project.techUsed}{" "}
          </p>
          <p className="text-black-600 mt-2 transition duration-300 ease-in-out">
            Reason to build this project:
          </p>
          <p className="text-gray-500 text-base mt-2 transition duration-300 ease-in-out">
            {project.projectReason}{" "}
          </p>
          <p className="text-black-600 mt-2 transition duration-300 ease-in-out">
            Reason to use this stack:
          </p>
          <p className="text-gray-500 text-base mt-2 transition duration-300 ease-in-out">
            {project.techReason}{" "}
          </p>

          <div className="flex justify-between">
            <a
              className="mt-4 inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary-700 text-base px-5 py-3 lg:text-lg lg:px-7 lg:py-4"
              href={project.projectUrl}
            >
              See Live
            </a>
            <a
              style={{ border: "1px solid #e5e5e5" }}
              className="mt-4 inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-black shadow hover:bg-primary-700 text-base px-5 py-3 lg:text-lg lg:px-7 lg:py-4"
              href={project.githubUrl}
            >
              Github
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
