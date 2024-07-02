"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useAppDispatch } from "@/app/hooks/reducHooks";
import { getSingleBlog } from "@/app/redux/blogSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleBlog = ({ params }) => {
  const id = useParams();
  const dispatch = useAppDispatch();
  const blog = useSelector((state) => state.blog.blog);

  useEffect(() => {
    dispatch(getSingleBlog({ payload: id.blog }));
  }, []);

 
  return (
    <>
      <Header />
      <div className="container mx-auto pt-10">
        <article className="flex flex-col items-start gap-10 pb-10">
          <div className="prose md:prose-xl dark:prose-invert prose-h1:text-center mx-auto max-w-screen-lg px-5">
            <h1 className="font-medium">{blog?.title}</h1>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 px-2 text-slate-700 dark:text-neutral-300 md:px-0">
            <div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
              <div
                className="overflow-hidden rounded-full  bg-slate-200  dark:bg-white/20 md:mr-3 h-10 w-10 md:h-12 md:w-12"
                style={{ zIndex: "1" }}
              >
                <a
                  href="https://hashnode.com/@kunalk"
                  className="relative block h-full w-full"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt="Vaishnavi"
                        aria-hidden="true"
                        src="https://charitism-campaigns.s3.ap-south-1.amazonaws.com/cbd26a41-a35f-4183-a3dc-0695e952b1da.jpeg"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                  </span>
                </a>
              </div>
              <a
                href="https://hashnode.com/@vaishD"
                className="ml-2 font-semibold text-slate-600 dark:text-white md:ml-0"
              >
                <span>Vaishnavi Dwivedi</span>
              </a>
            </div>
            <div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
              {blog?.date ? (
                <>
                  <span className="mx-3 hidden font-bold text-slate-500 md:block">
                    ·
                  </span>
                  <time dateTime="2024-05-25T19:27:57.870Z">
                    {blog?.date} ||{" "}
                  </time>
                </>
              ) : null}

              <span className="mx-3 hidden font-bold text-slate-500 md:block">
                ·
              </span>
              <p className="flex flex-row items-center">
                <svg
                  className="mr-2 h-5 w-5 fill-current opacity-75"
                  viewBox="0 0 576 512"
                >
                  <path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"></path>
                </svg>
                <span>{calculateMinRead(blog?.content)} min read</span>
              </p>
            </div>
          </div>
          <div className="w-full px-5 sm:mx-0">
            <div className="sm:mx-0">
              <div className="relative pt-[52.5%]">
                <img
                  alt="Cover Image"
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="fill"
                  className="w-full rounded-md border object-cover hover:opacity-90 dark:border-neutral-800"
                  src={blog?.img}
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: blog?.content }}
            className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
          ></div>

          <div className="mx-auto w-full px-5 md:max-w-screen-md mb-5 mt-10 flex flex-col gap-16">
            <div className="flex-1 px-2">
              <div className="flex flex-col flex-wrap items-start md:flex-nowrap">
                <h3 className="mb-4 w-full border-b-1-1/2 pb-2 text-base font-medium tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400 ">
                  Written by
                </h3>
                <div className="flex w-full flex-col gap-12">
                  <div className="flex w-full flex-1 flex-col md:flex-row">
                    <div className="mb-4 flex w-full flex-1 flex-row md:mb-0 ">
                      <div className="mr-4 flex flex-row md:mb-0">
                        <a
                          href="https://hashnode.com/@vaishD"
                          className="block h-10 w-10 overflow-hidden rounded-full border dark:border-slate-800 md:h-14 md:w-14"
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: "0px",
                              margin: "0px",
                              padding: "0px",
                              position: "relative",
                              maxWidth: "100%",
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                              }}
                            >
                              <img
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27256%27%20height=%27256%27/%3e"
                                style={{
                                  display: "block",
                                  maxWdith: "100%",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                }}
                              />
                            </span>
                            <img
                              alt="Vaishnavi Dwivedi"
                              src="https://charitism-campaigns.s3.ap-south-1.amazonaws.com/cbd26a41-a35f-4183-a3dc-0695e952b1da.jpeg"
                              decoding="async"
                              data-nimg="intrinsic"
                              className="block"
                              style={{
                                position: "absolute",
                                inset: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                              }}
                            />
                            <noscript></noscript>
                          </span>
                        </a>
                      </div>
                      <div className="flex flex-1 flex-col justify-center md:justify-start">
                        <div className="flex flex-row items-center md:mb-1">
                          <h1 className="font-sans text-lg font-semibold text-slate-800 dark:text-slate-100">
                            <a href="https://hashnode.com/@kunalk">
                              Vaishnavi Dwivedi
                            </a>
                          </h1>
                        </div>
                        <div className="hidden pr-2 md:block">
                          <div className="prose text-slate-600 dark:prose-dark dark:text-slate-300">
                            <p>
                              I am Vaishnavi Dwivedi, a Software Development
                              Engineer with diverse interests ranging from
                              frontend to backend development, machine learning
                              to artificial intelligence, and of course,
                              hacking. This is me and my knowledge base. Go on,
                              it will be worth it! life.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 block md:hidden">
                      <div className="prose text-slate-600 dark:prose-dark ">
                        <p>
                          I am Vaishnavi Dwivedi, a Software Development
                          Engineer with diverse interests ranging from frontend
                          to backend development, machine learning to artificial
                          intelligence, and of course, hacking. This is me and
                          my knowledge base. Go on, it will be worth it!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed z-50 bottom-10 right-10">
            <button className="flex flex-row items-center justify-start gap-2 rounded-full border px-2 py-2 text-sm font-semibold transition-colors duration-200 md:px-5 md:py-3 md:text-base text-slate-950 bg-transparent dark:border-neutral-800 hover:bg-slate-50 dark:bg-transparent dark:hover:bg-neutral-800 dark:text-white md:justify-center  !bg-white dark:!bg-neutral-950">
              <div className="flex flex-row items-center gap-2">
                <div className="shrink-0">
                  <svg
                    className="w-5 h-5 fill-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M13.137 7.1a.75.75 0 1 0 0-1.5v1.5Zm6.765 5.58a.75.75 0 0 0-1.5 0h1.5Zm-17.4-3.13a.75.75 0 1 0-.69 1.332l.69-1.332Zm14.092 2.155a.75.75 0 0 0-.833-1.248l.833 1.248Zm-.312-6.095a.75.75 0 0 0 0 1.5v-1.5ZM22 7.109a.75.75 0 0 0 0-1.5v1.5Zm-3.609 2.108a.75.75 0 1 0 1.5 0h-1.5Zm1.5-5.717a.75.75 0 0 0-1.5 0h1.5ZM8.277 13.377l-.344.666.344-.666Zm1.85.785.118-.74-.117.74Zm3.02-1.058-.417-.624.416.624Zm-1.752.987-.2-.723.2.723Zm7.007 3.695c0 .638-.517 1.155-1.155 1.155v1.5a2.656 2.656 0 0 0 2.655-2.655h-1.5Zm-1.155 1.155H3.906v1.5h13.34v-1.5Zm-13.341 0a1.156 1.156 0 0 1-1.156-1.155h-1.5a2.656 2.656 0 0 0 2.656 2.655v-1.5ZM2.75 17.786v-9.53h-1.5v9.53h1.5Zm0-9.53c0-.638.517-1.155 1.156-1.155V5.6A2.656 2.656 0 0 0 1.25 8.256h1.5Zm1.156-1.155h9.23V5.6h-9.23v1.5Zm15.996 10.685V12.68h-1.5v5.106h1.5ZM1.812 10.88l6.12 3.162.69-1.332-6.12-3.162-.69 1.332Zm11.75 2.847 3.032-2.024-.833-1.248-3.031 2.024.833 1.248Zm2.72-6.62h2.86v-1.5h-2.86v1.5Zm2.86 0H22v-1.5h-2.859v1.5Zm.75 2.11v-2.86h-1.5v2.86h1.5Zm0-2.86V3.5h-1.5v2.859h1.5Zm-11.96 7.685c.87.45 1.453.76 2.078.86l.235-1.482c-.33-.052-.662-.214-1.624-.71l-.688 1.332Zm4.798-1.563c-.9.601-1.213.8-1.535.888l.4 1.446c.61-.168 1.154-.543 1.968-1.086l-.833-1.248Zm-2.72 2.423a3.75 3.75 0 0 0 1.584-.09l-.399-1.445a2.257 2.257 0 0 1-.95.053l-.235 1.482Z"
                    ></path>
                  </svg>
                </div>
                Subscribe
              </div>
            </button>
          </div>
        </article>
      </div>

      {/* <h1>{params.blog}</h1> */}
      <Footer />
    </>
  );
};

export default SingleBlog;

function calculateMinRead(content, wordsPerMinute = 200) {
  // Split content into words (considering various word boundaries)
  const words = content?.match(/\b\w+\b/g);

  // Calculate number of words
  const wordCount = words ? words?.length : 0;

  // Calculate reading time in minutes
  const minRead = Math.ceil(wordCount / wordsPerMinute);

  return minRead;
}

{
  /* <div className="w-full px-5">
            <div className="mx-auto w-full max-w-screen-md rounded-lg border border-b-4 border-r-4 p-5 text-base leading-snug dark:border-neutral-800 dark:text-neutral-50 md:p-8 md:text-lg">
              <h2 className="mb-5 text-lg font-bold md:text-xl">
                Table of contents
              </h2>
              <ul className="mt-5 flex flex-col gap-5 pl-5 font-medium text-slate-800 dark:text-neutral-200">
                <li>
                  <a
                    href="#heading-ai-copilots"
                    className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                  >
                    AI Copilots
                  </a>
                </li>
                <li>
                  <a
                    href="#heading-ai-copilots-future-roles"
                    className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                  >
                    AI Copilots: Future Roles
                  </a>
                </li>
                <li>
                  <a
                    href="#heading-need-for-copilots"
                    className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                  >
                    Need for Copilots
                  </a>
                  <ul className="mt-5 flex flex-col gap-5 pl-5 font-medium text-slate-800 dark:text-neutral-200">
                    <li>
                      <a
                        href="#heading-concerns-about-developer-cognition"
                        className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                      >
                        Concerns About Developer Cognition
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#heading-pieces"
                    className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                  >
                    Pieces
                  </a>
                  <ul className="mt-5 flex flex-col gap-5 pl-5 font-medium text-slate-800 dark:text-neutral-200">
                    <li>
                      <a
                        href="#heading-pieces-live-context"
                        className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                      >
                        Pieces - Live Context
                      </a>
                    </li>
                    <li>
                      <a
                        href="#heading-live-context-use-cases"
                        className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                      >
                        Live Context: Use Cases
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#heading-github-copilot-vs-pieces-copilot"
                    className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                  >
                    GitHub Copilot Vs Pieces Copilot+
                  </a>
                </li>
                <li>
                  <a
                    href="#heading-conclusion"
                    className="hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 underline dark:hover:bg-neutral-800"
                  >
                    Conclusion
                  </a>
                </li>
              </ul>
            </div>
          </div> */
}
