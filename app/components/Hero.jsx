"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <header className="py-12 lg:py-20">
      <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8">
        <h1 className="max-[360px]:text-[27px] text-[31px] leading-tight md:text-[46px] lg:text-[54px] lg:leading-tight font-medium lg:max-w-[90%]">
          Solving Problems, Developing Features, and Blogging{" "}
          <span className="relative -z-10">My Way Out</span>
        </h1>
        <p className="text-base lg:text-lg text-gray-500 md:max-w-[72%] mt-4 md:mt-5 lg:mt-6">
          I am Vaishnavi Dwivedi, a Software Development Engineer with diverse
          interests ranging from frontend to backend development, machine
          learning to artificial intelligence, and of course, hacking. This is
          me and my knowledge base. Go on, it will be worth it!
        </p>
        <div className="flex gap-3 flex-col-reverse md:flex-row mt-7 md:mt-9 lg:mt-11">
          <a
            className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-background text-gray-700 hover:text-gray-800 shadow-sm hover:bg-gray-50 text-base px-5 py-3 lg:text-lg lg:px-7 lg:py-4"
            href="#about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down "
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>{" "}
            Know more
          </a>
          <a
            className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary-700 text-base px-5 py-3 lg:text-lg lg:px-7 lg:py-4"
            href="mailto:contact@techwithkunal.com"
          >
            Get in touch
          </a>
        </div>

        <SwiperComponent
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <img
              alt="mern"
              loading="lazy"
              decoding="async"
              className="mt-10 lg:mt-16 min-h-64 object-cover rounded-md"
              style={{ color: "transparent", width: "100%", height: "100%" }}
              src={
                "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/aff00d52-4eb3-4c9c-b9ce-d571c5eb1a4a.jpeg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="blog"
              loading="lazy"
              decoding="async"
              className="mt-10 lg:mt-16 min-h-64 object-cover rounded-md"
              style={{ color: "transparent", width: "100%", height: "100%" }}
              src={
                "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/2107e011-65d3-499c-8084-66ff8917cd55.jpeg"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="programmer"
              loading="lazy"
              decoding="async"
              className="mt-10 lg:mt-16 min-h-64 object-cover rounded-md"
              style={{
                color: "transparent",
                width: "100%",
                height: "100%",
                padding: "0.5rem",
              }}
              src={
                "https://cdn.dribbble.com/userupload/11977867/file/original-f0804e8b7bb036eaf1ab73d86ea936ff.png?resize=752x"
              }
            />
          </SwiperSlide>
        </SwiperComponent>
      </div>
    </header>
  );
};

export default Hero;
