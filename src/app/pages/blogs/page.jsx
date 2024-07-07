"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React, { useEffect } from "react";
import Link from "next/link";
import { SingleBlogCard } from "@/app/components/HomeBlogs";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "@/app/redux/blogSlice";
import { useAppDispatch } from "@/app/hooks/reducHooks";
import useDeviceSize from "@/app/hooks/useDevice";

const Blogs = () => {
  const dispatch = useAppDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const isMobile = useDeviceSize() == "xs";
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <div>
      <Header />
      <div className="py-20 md:py-20 lg:py-20">
        <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8   gap-8 md:gap-10 lg:gap-14">
          <div
            style={{ margin: isMobile ? "0" : "2rem" }}
            className="grid  grid-cols-1 md:grid-cols-2  gap-x-20 gap-y-20"
          >
            {blogs?.result?.map((blog, index) => (
              <SingleBlogCard blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
