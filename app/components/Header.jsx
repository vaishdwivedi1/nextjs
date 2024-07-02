import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="border-b bg-background bg-white sticky top-0 left-0 z-50">
      <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8 flex justify-between items-center h-20 relative overflow-x-clip">
        <Link className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  px-[18px] py-[10px]  w-full md:w-auto" target="" rel="" href="/">
          Vaishnavi Dwivedi
        </Link>
        <button className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-background text-gray-700 hover:text-gray-800 shadow-sm hover:bg-gray-50 h-9 w-9 md:hidden" aria-label="Toggle menu button">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </button>
        <ul className="flex flex-col md:flex-row gap-1.5 justify-center items-center absolute md:static w-screen md:w-auto nav-h-mobile md:h-auto top-20 bg-background transition-[left] ease-in-out duration-300 px-5 md:px-0 left-full">
          <li className="w-full md:w-auto">
            <Link className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-50 text-gray-500 hover:text-gray-600 px-[18px] py-[10px] text-base w-full md:w-auto" target="" rel="" href="/#about">
              About
            </Link>
          </li>

          <li className="w-full md:w-auto">
            <Link className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-50 text-gray-500 hover:text-gray-600 px-[18px] py-[10px] text-base w-full md:w-auto" target="" rel="" href="/pages/projects">
              Projects
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-50 text-gray-500 hover:text-gray-600 px-[18px] py-[10px] text-base w-full md:w-auto" target="" rel="noreferrer noopener" href="/pages/experience">
              Experience
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-50 text-gray-500 hover:text-gray-600 px-[18px] py-[10px] text-base w-full md:w-auto" target="" rel="noreferrer noopener" href="/pages/blogs">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
