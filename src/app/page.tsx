"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import HomeBlogs from "@/app/components/HomeBlogs";
import NewsLetter from "@/app/components/NewsLetter";
import Testimonial from "@/app/components/Testimonial";
import { useEffect } from "react";
import { getAllBlogs } from "./redux/blogSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./hooks/reducHooks";
export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HomeBlogs />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  );
}
