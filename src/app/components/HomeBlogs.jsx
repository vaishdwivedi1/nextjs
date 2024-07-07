"use client";

import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../redux/blogSlice";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch } from "../hooks/reducHooks";
import useDeviceSize from "../hooks/useDevice";

const HomeBlogs = () => {
  const dispatch = useAppDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const isMobile = useDeviceSize() == "xs";
  return (
    <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8">
      <SwiperComponent
        spaceBetween={25}
        slidesPerView={isMobile ? 1 : 3}
        pagination={{ type: "bullets", clickable: true }}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        // loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {blogs?.result?.map((blog, index) => (
          <SwiperSlide>
            <SingleBlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export const SingleBlogCard = (props) => {
  const { blog } = props;
  const navigate = useRouter();
  const truncatedContent = getFirst50Words(blog?.content);
  return (
    <Link href={`/pages/blogs/${blog?._id}`}>
      <div className="rounded-md bg-gray-50  md:p-5 lg:p-6 p-5">
        <div className="flex justify-center items-center text-white bg-primary-500 rounded-xl ">
          <img
            alt="mern"
            loading="lazy"
            decoding="async"
            className=" min-h-64 object-cover rounded-md"
            style={{ color: "transparent", width: "100%", height: "100%" }}
            src={blog?.img}
          />
        </div>
        <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
          {blog?.title}
        </h3>
        <p className="text-gray-500 text-base mt-2"></p>
        <div
          className="text-gray-500 text-base mt-2"
          dangerouslySetInnerHTML={{ __html: truncatedContent }}
        />
      </div>
    </Link>
  );
};
const getFirst50Words = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  const textContent = tempElement.textContent || tempElement.innerText || "";

  // Split the text content into words
  const words = textContent.split(/\s+/).slice(0, 50).join(" ");

  // Create a new HTML string with the first 50 words
  return words;
};
export default HomeBlogs;
