import React from "react";
import featuredBg from "../../../assets/pexels-faik-akmd-1025469-1-_2_.webp";
import kidPic from "../../../assets/kids-home-playing-with-toys-_1_-_1_.webp";

import { AiTwotoneStar } from 'react-icons/ai';

const FeaturedSection = () => {
  const backgroundStyles = {
    backgroundImage: `url(${featuredBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };

  return (
    <div className="h-[100vh] font-bold w-full flex md:gap-10 xl:gap-15 items-center bg-fixed" style={backgroundStyles}>
      <div className="hidden lg:block w-[45vw]">
        <img className="rounded-lg" src={kidPic} alt="" />
      </div>
      <div className=" lg:w-[55vw] px-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#f0f388]">
          Perfect Solution For Your Small Kid's Entertainment
        </h2>
        <div className="mt-2 md:mt-6 bg-yellow-200 h-1 w-[60vw] lg:w-[18vw]"></div>
        <div className="flex mt-8 md:mt-10 text-2xl md:text-5xl">
          <AiTwotoneStar color="#ffe960" />
          <AiTwotoneStar color="#ffe960" />
          <AiTwotoneStar color="#ffe960" />
          <AiTwotoneStar color="#ffe960" />
          <AiTwotoneStar color="#ffe960" />
        </div>
        <p className="text-white text-lg md:text-2xl lg:text-4xl mt-1 md:mt-3">
          10,000 Parents Have Chosen SmartKiddo Toys for their children and 95% gave 5-star reviews.
        </p>
      </div>
    </div>
  );
};

export default FeaturedSection;
