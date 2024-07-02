"use client";

import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { ImQuotesLeft } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Testimonial = React.memo(() => {
  const swiperRef = useRef();
  const [campaignCode, setCampaignCode] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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
          Stories of those who’ve already helped us
        </h1>
      </div>
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
        comment: `Great initiative by @charitism Thank you buddies for making my birthday more special with this kind and thoughtful gift.
                These people are spreading love in the form of the most important thing and that is 'FOOD' .
                So give as much as you can and spread love.
                There is complete transparency as the organisation sends you pictures of all the people who receive your packet with your name clearly labelled on the packet.`,
        linkedInProfile: "https://www.linkedin.com/in/vishal-nath-chauhan/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
    ],
    [
      {
        id: 3,
        name: "Sachin Yadav",
        comment: `Small acts when multiplied can transform the world.
                I am sharing this to encourage others to donate .
                Go ahead and make a contribution. The satisfaction is worth it.
                This platform @charitism is very transparent , I tested it.
                Happy birthday to me!
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
        comment: `Thank you so much kiddos for such a lovely wishes ....these are the real wishes on my birthday and these are the real happiness .....
                Thank you so much @shubhamsjain for doing such special things on my bday....i am so grateful that i have u as my lifepartner .....thanku once again @charitism
                Thanku everyone.
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
        comment: `Great initiative by @charitism Thank you buddies for making my birthday more special with this kind and thoughtful gift.
                These people are spreading love in the form of the most important thing and that is 'FOOD' .
                So give as much as you can and spread love.
                There is complete transparency as the organisation sends you pictures of all the people who receive your packet with your name clearly labelled on the packet.`,
        linkedInProfile: "https://www.linkedin.com/in/vishal-nath-chauhan/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
    ],
    [
      {
        id: 8,
        name: "Sachin Yadav",
        comment: `Small acts when multiplied can transform the world.
                I am sharing this to encourage others to donate .
                Go ahead and make a contribution. The satisfaction is worth it.
                This platform @charitism is very transparent , I tested it.
                Happy birthday to me!
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
        comment: `Thank you so much kiddos for such a lovely wishes ....these are the real wishes on my birthday and these are the real happiness .....
                Thank you so much @shubhamsjain for doing such special things on my bday....i am so grateful that i have u as my lifepartner .....thanku once again @charitism
                Thanku everyone.
                `,
        linkedInProfile:
          "https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/",
        imageUrl:
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/090b44dd-e731-4d41-9b43-cc93d13ed7fa.png",
      },
    ],
  ],
};
