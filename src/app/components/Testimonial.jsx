"use client";

import React, { useRef, useState } from "react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { ImQuotesLeft } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useDeviceSize from "../hooks/useDevice";
const Testimonial = React.memo(() => {
  const swiperRef = useRef();
  const [campaignCode, setCampaignCode] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const isMobile = useDeviceSize() == "xs";
  const stories = storiesList["HOME"];

  const onInit = (Swiper) => {
    swiperRef.current = Swiper;
  };
  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };
  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="mt-20">
      <div className=" text-center">
        <p
          className="text-3xl font-semibold mt-4 md:mt-6"
          style={{ letterSpacing: "0.105rem" }}
        >
          TESTIMONIALS
        </p>
        <h1 className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5">
          Stories of my colleagues
        </h1>
      </div>

      {isMobile ? (
        <MobileTesti />
      ) : (
        <div
          className="mt-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SwiperComponent
            speed={1000}
            onInit={onInit}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            centeredSlides={true}
            loop={true}
            freeMode={true}
            slidesPerView={2.5}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={10}
            style={{
              maxWidth: "100%",
              width: "100%",
              paddingTop: "7rem",
              paddingBottom: "7rem",
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {stories.map((cardDetails, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-[60vh] flex-col gap-4 !items-center content-center justify-center !justify-items-center">
                  {cardDetails.length === 2 ? (
                    <>
                      <TestimonialCaurosalCard
                        cardDetails={cardDetails[0]}
                        key={cardDetails[0].id}
                      />
                      <TestimonialCaurosalCard
                        cardDetails={cardDetails[1]}
                        key={cardDetails[1].id}
                      />
                    </>
                  ) : (
                    <div
                      className="flex h-auto self-center justify-self-center items-center justify-center"
                      style={{
                        display: "flex",
                        height: "auto",
                        alignSelf: "center !important",
                        justifySelf: "center !important",
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                    >
                      <TestimonialCaurosalCard
                        cardDetails={cardDetails[0]}
                        key={cardDetails[0].id}
                      />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      )}
    </div>
  );
});
export const TestimonialCaurosalCard = React.memo((props) => {
  const { cardDetails } = props;
  const { name, tag, date, comment, linkedInProfile, imageUrl } = cardDetails;

  const navigate = useRouter();

  const goToProfile = () => navigate.push(`${linkedInProfile}`);

  return (
    <div
      spacing="0.8rem"
      className={`shadow-xl  bg-white p-6 gap-6 border border-gray-300 rounded-lg `}
      style={{ maxWidth: "32rem" }}
    >
      <div style={{ gap: "0.4rem" }}>
        <DoubleQuotes />
        <p style={{ letterSpacing: "1%" }}>{comment}</p>
      </div>
      <div style={{ justifyContent: "start !important" }} spacing="0.5rem">
        <img src={imageUrl} alt="profile" className={`w-8 h-8 rounded-full`} />
        <div
          onClick={goToProfile}
          className="flex  items-center space-x-1 mt-1 cursor-pointer"
        >
          <FaLinkedin color="#0a66c2" /> <p>{name}</p>
        </div>
      </div>
    </div>
  );
});
export default Testimonial;
export const DoubleQuotes = React.memo(() => (
  <div style={{ width: "4rem", alignSelf: "flex-start" }}>
    <ImQuotesLeft className={`text-gray-400 text-base`} />
  </div>
));

export const storiesList = {
  HOME: [
    [
      {
        id: 1,
        name: "Neha Sharma",
        comment: `Working with her was a great experience. She is incredibly smart and tackles problems with efficiency and creativity. Thanks to her expertise, my website is running very smoothly and looks amazing. I highly recommend her services to anyone needing a reliable developer.`,
        linkedInProfile: "https://www.linkedin.com/in/nehaasharmaaa/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/f63f8088-c9e7-4389-bec8-2a8d0b6a021a.webp",
      },
      {
        id: 2,
        name: "Vishal nath chauhan",
        comment: `I was her team leader at Charitism, and she was a very efficient team member. She learned quickly and was always eager to explore new technologies and concepts. She took full responsibility for her mistakes and communicated well with other team members and teams to achieve better outcomes. It was a great experience working with her.
                  `,
        linkedInProfile: "https://www.linkedin.com/in/vishal-nath-chauhan/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
    ],
    [
      {
        id: 3,
        name: "Sachin Yadav",
        comment: `I worked with her at Charitism. She communicates very well and is always eager to learn and improve. We worked on many projects together, and it was always a good experience. She is a team player.
                  `,
        linkedInProfile: "https://www.linkedin.com/in/syd/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
      {
        id: 4,
        name: "Honey Singh",
        comment: `I highly recommend Vaishnavi, an exceptional Frontend Developer. She possesses a unique blend of technical expertise, creativity, and attention to detail. Vaishnavi consistently delivers high-quality work, bringing designs to life with precision and optimizing user experiences.

Her proactive problem-solving and innovative solutions exceed expectations. Vaishnavi’s collaborative spirit and excellent communication skills enhance team dynamics. Her dedication to learning and staying ahead of industry trends is truly inspiring.`,
        linkedInProfile: "https://www.linkedin.com/in/honey-singh-59b333238/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/f63f8088-c9e7-4389-bec8-2a8d0b6a021a.webp",
      },
    ],
    [
      {
        id: 5,
        name: "Shahid",
        tag: "Sponsor a Child's Education to transform their life.",
        date: "Jan 29, 2021",
        comment: `I am currently working with her at Pocketful. She is remarkable in her technical knowledge and always eager to learn new things, never backing down from hard work. Though she is new, she communicates very well with the team.
                  `,
        linkedInProfile:
          "https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
    ],
    [
      {
        id: 6,
        name: "Neha Sharma",
        comment: `Working with her was a great experience. She is incredibly smart and tackles problems with efficiency and creativity. Thanks to her expertise, my website is running very smoothly and looks amazing. I highly recommend her services to anyone needing a reliable developer.`,
        linkedInProfile: "https://www.linkedin.com/in/nehaasharmaaa/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/f63f8088-c9e7-4389-bec8-2a8d0b6a021a.webp",
      },
      {
        id: 7,
        name: "Vishal nath chauhan",
        comment: `I was her team leader at Charitism, and she was a very efficient team member. She learned quickly and was always eager to explore new technologies and concepts. She took full responsibility for her mistakes and communicated well with other team members and teams to achieve better outcomes. It was a great experience working with her.
                  `,
        linkedInProfile: "https://www.linkedin.com/in/vishal-nath-chauhan/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
    ],
    [
      {
        id: 8,
        name: "Sachin Yadav",
        comment: `I worked with her at Charitism. She communicates very well and is always eager to learn and improve. We worked on many projects together, and it was always a good experience. She is a team player.
                  `,
        linkedInProfile: "https://www.linkedin.com/in/syd/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
      {
        id: 9,
        name: "Honey Singh",
        comment: `I highly recommend Vaishnavi, an exceptional Frontend Developer. She possesses a unique blend of technical expertise, creativity, and attention to detail. Vaishnavi consistently delivers high-quality work, bringing designs to life with precision and optimizing user experiences.

Her proactive problem-solving and innovative solutions exceed expectations. Vaishnavi’s collaborative spirit and excellent communication skills enhance team dynamics. Her dedication to learning and staying ahead of industry trends is truly inspiring.`,
        linkedInProfile: "https://www.linkedin.com/in/honey-singh-59b333238/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/f63f8088-c9e7-4389-bec8-2a8d0b6a021a.webp",
      },
    ],
    [
      {
        id: 10,
        name: "Shahid",
        tag: "Sponsor a Child's Education to transform their life.",
        date: "Jan 29, 2021",
        comment: `I am currently working with her at Pocketful. She is remarkable in her technical knowledge and always eager to learn new things, never backing down from hard work. Though she is new, she communicates very well with the team.
                  `,
        linkedInProfile:
          "https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
    ],
  ],
};
export const storiesList2 = {
  HOME: [
    {
      id: 1,
      name: "Neha Sharma",
      comment: `Working with her was a great experience. She is incredibly smart and tackles problems with efficiency and creativity. Thanks to her expertise, my website is running very smoothly and looks amazing. I highly recommend her services to anyone needing a reliable developer.`,
      linkedInProfile: "https://www.linkedin.com/in/nehaasharmaaa/",
      imageUrl:
        "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/f63f8088-c9e7-4389-bec8-2a8d0b6a021a.webp",
    },
    {
      id: 2,
      name: "Vishal nath chauhan",
      comment: `I was her team leader at Charitism, and she was a very efficient team member. She learned quickly and was always eager to explore new technologies and concepts. She took full responsibility for her mistakes and communicated well with other team members and teams to achieve better outcomes. It was a great experience working with her.
                `,
      linkedInProfile: "https://www.linkedin.com/in/vishal-nath-chauhan/",
      imageUrl:
        "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
    },
    {
      id: 3,
      name: "Sachin Yadav",
      comment: `I worked with her at Charitism. She communicates very well and is always eager to learn and improve. We worked on many projects together, and it was always a good experience. She is a team player.
                `,
      linkedInProfile: "https://www.linkedin.com/in/syd/",
      imageUrl:
        "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
    },
    {
      id: 4,
      name: "Honey Singh",
      comment: `I highly recommend Vaishnavi, an exceptional Frontend Developer. She possesses a unique blend of technical expertise, creativity, and attention to detail. Vaishnavi consistently delivers high-quality work, bringing designs to life with precision and optimizing user experiences.

Her proactive problem-solving and innovative solutions exceed expectations. Vaishnavi’s collaborative spirit and excellent communication skills enhance team dynamics. Her dedication to learning and staying ahead of industry trends is truly inspiring.`,
      linkedInProfile: "https://www.linkedin.com/in/honey-singh-59b333238/",
      imageUrl:
        "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/f63f8088-c9e7-4389-bec8-2a8d0b6a021a.webp",
    },
    {
      id: 5,
      name: "Shahid",
      tag: "Sponsor a Child's Education to transform their life.",
      date: "Jan 29, 2021",
      comment: `I am currently working with her at Pocketful. She is remarkable in her technical knowledge and always eager to learn new things, never backing down from hard work. Though she is new, she communicates very well with the team.
                `,
      linkedInProfile:
        "https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/",
      imageUrl:
        "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
    },
  ],
};
export const MobileTesti = () => {
  const swiperRef = useRef();
  const stories = storiesList2["HOME"];

  const onInit = (Swiper) => {
    swiperRef.current = Swiper;
  };
  return (
    <div className="container mt-12 p-4">
      <SwiperComponent
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        speed={1000}
        onInit={onInit}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {stories.map((cardDetails, index) => (
          <SwiperSlide key={index}>
            <div className="flex  flex-col gap-4 !items-center content-center justify-center !justify-items-center">
              <div
                className="flex h-auto self-center justify-self-center items-center justify-center"
                style={{
                  display: "flex",
                  height: "auto",
                  alignSelf: "center !important",
                  justifySelf: "center !important",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <TestimonialCaurosalCard
                  cardDetails={cardDetails}
                  key={cardDetails.id}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </SwiperComponent>
    </div>
  );
};
