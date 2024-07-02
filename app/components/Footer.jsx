import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 md:pt-12 lg:pt-14 pb-6 md:pb-8 lg:pb-10 bg-gray-800 text-gray-200">
      <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8">
        <div className="flex justify-between items-start gap-20 md:10 flex-col md:flex-row">
          <Link className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50    px-[18px] py-[10px]  w-full md:w-auto" target="" rel="" href="/">
            Vaishnavi Dwivedi
          </Link>
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 w-full md:w-[70%] lg:w-[60%]">
            <div className="space-y-4">
              <h3 className="text-gray-400 font-semibold text-sm">Socials</h3>
              <ul className="space-y-3">
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="_blank" rel="noreferrer noopener" href="https://hashnode.com/@vaishD">
                    Hashnode
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/vaisd/">
                    LinkedIn
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="_blank" rel="noreferrer noopener" href="https://github.com/vaishdwivedi1">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-gray-400 font-semibold text-sm">Skills</h3>
              <ul className="space-y-3">
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="_blank" rel="noreferrer noopener" href="/pages/projects">
                    HTML/CSS/JS
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="_blank" rel="noreferrer noopener" href="/pages/projects">
                    ReactJS/NextJS
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="_blank" rel="noreferrer noopener" href="/pages/projects">
                    NodeJs/ExpressJs
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="_blank" rel="noreferrer noopener" href="/pages/projects">
                    MERN Stack
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-gray-400 font-semibold text-sm">Resources</h3>
              <ul className="space-y-3">
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="" rel="noreferrer noopener" href="/">
                    Home
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="" rel="noreferrer noopener" href="/pages/blogs">
                    Blog
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="" rel="noreferrer noopener" href="/pages/experience">
                    Experience
                  </Link>
                </li>
                <li className="font-medium text-base">
                  <Link className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left" target="" rel="noreferrer noopener" href="/pages/projects">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 mt-12">
          <p className="text-gray-400 text-center">© 2024 Vaishnavi Dwivedi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
