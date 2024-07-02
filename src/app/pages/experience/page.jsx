import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FaLinkedin } from "react-icons/fa";
const experience = () => {
  return (
    <div>
      <Header />

      <div className="py-20 md:py-20 lg:py-20">
        <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full px-5 lg::px-8   gap-8 md:gap-10 lg:gap-14">
          <h2 className="text-3xl font-semibold text-center pb-8 m-0">My Experiences</h2>

          <div className="flex flex-col gap-8 lg:gap-10">
            <div>
              <h3 className="text-lg md:text-[20px] font-medium">
                <a
                  className="relative z-0 flex items-center gap-2
                before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 "
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/company/charitism/mycompany/"
                >
                  Charitism <FaLinkedin style={{ color: "#0a66c2" }} />
                </a>
              </h3>
              <p className="text-gray-500 text-base mt-2">Frontend Developer (Sep 2022 - May 2024) </p>
              <p className="text-gray-500 text-base mt-2">
                <span className="text-black font-medium">Tech:</span> NextJs, TypeScript, ReactJs, ReduxToolikit, Chakra Ui, Theme UI, Chakra UI, REST API{" "}
              </p>
              <br />
              <p className="text-black text-base mt-2 font-medium">Project#1 Charitism Client:</p>
              <p className="text-gray-500 text-base mt-2">Enabling users to view their donation's delivery date, cross-check donation details, and download 80G certificates seamlessly.</p>
              <p className="text-gray-500 text-base mt-2"> This initiative resulted in a 30% increase in user engagement and a remarkable 90% reduction in support queries.</p>
              <p className="text-gray-500 text-base mt-2"> Learned to optimize component rendering, utilize Redux for state management, and leverage hooks like useRef, while deepening understanding of HTML, CSS, and JS concepts </p>
              <p className="text-gray-500 text-base mt-2"> Used Axios library to integrate api and backend to the frentend.</p>
              <p className="text-gray-500 text-base mt-2"> Implemented an Amount-based Campaign system, opening new avenues for direct fundraising and enhancing transparency in NGO distribution.</p>
              <p className="text-gray-500 text-base mt-2">This effort led to a 40% increase in direct monetary contributions, on boarding 10 NGOs, and raising the average donation amount to 350 INR, highlighting the importance of transparency and user-friendly donation processes. </p>
              <br />
              <p className="text-black font-medium  mt-2">Project#2 Charitism Terminal:</p>
              <p className="text-gray-500 text-base mt-2">Orchestrated the development of a Tele Campaign platform, empowering sales teams to sell products conveniently and modify campaigns without disrupting ongoing marketing efforts.</p>
              <p className="text-gray-500 text-base mt-2"> Achieved a 10% improvement in sales team efficiency, optimizing logical functions and reducing code complexity.</p>
              <p className="text-gray-500 text-base mt-2">Strengthened skills in code optimization and efficient function writing. </p>
              <p className="text-gray-500 text-base mt-2"> Managed website updates to inform users about ongoing campaign impacts, resulting in a 10% growth in website traffic. </p>
              <p className="text-gray-500 text-base mt-2"> This experience enhanced knowledge of code improvement and development time reduction techniques, emphasizing the importance of user engagement and accessibility.</p>
            </div>
            <div>
              <h3 className="text-lg md:text-[20px] font-medium">
                <a
                  className="relative z-0 flex items-center gap-2
                before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 "
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/company/wwwdotcom/about/"
                >
                  wwwdotcom <FaLinkedin style={{ color: "#0a66c2" }} />
                </a>
              </h3>
              <p className="text-gray-500 text-base mt-2">Software Engineer (Nov 2022 - April 2023) </p>
              <p className="text-gray-500 text-base mt-2">
                <span className="text-black font-medium">Tech:</span> Javascript, Reactjs, Nodejs, Redux, MongoDB, Express, Material UI, Chakra UI{" "}
              </p>
              <br />
              <p className="text-black text-base mt-2 font-medium">Project#1 Balcony Life:</p>
              <p className="text-gray-500 text-base mt-2">Collaborated on a project, developing frontend and backend for a client's website.</p>
              <p className="text-gray-500 text-base mt-2"> Used ReactJs and integrate libraries like FontAwesome and Material UI for enhanced user experience.</p>
              <p className="text-gray-500 text-base mt-2"> Used MongoDb as database to store all the data. </p>
              <p className="text-gray-500 text-base mt-2"> Used NodeJS and ExpressJS to create API and build full fledged website </p>
              <p className="text-gray-500 text-base mt-2"> Used Axios library to integrate api and backend to the frentend.</p>
              <p className="text-gray-500 text-base mt-2"> And to make it complete it all I also integrated razorpay payment gateway.</p>
              <br />
              <p className="text-black font-medium  mt-2">Project#2 Balcony Life Admin:</p>
              <p className="text-gray-500 text-base mt-2">Collaborated on a project, developing frontend and backend for a admin's website.</p>
              <p className="text-gray-500 text-base mt-2"> Used ReactJs and integrate libraries like FontAwesome and Chakra UI for enhanced user experience.</p>
              <p className="text-gray-500 text-base mt-2"> Used MongoDb as database to store all the data. </p>
              <p className="text-gray-500 text-base mt-2"> Used NodeJS and ExpressJS to create API and build full fledged website </p>
              <p className="text-gray-500 text-base mt-2"> Used Axios library to integrate api and backend to the frentend.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default experience;
