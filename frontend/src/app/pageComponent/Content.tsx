"use client";

import React from "react";
import FloatingPhone from "@/components/ui/floating-phone";
import { div } from "framer-motion/client";
import RotatingText from "@/components/TextAnimations/RotatingText/RotatingText";
import Squares from "@/components/Backgrounds/Squares/Squares";
// import CircularText from "@/components/TextAnimations/CircularText/CircularText";
import Image from "next/image";

const Content = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#1F1F1F]">
      <div className="absolute left-32 top-[40%] -translate-y-1/2 flex flex-col mb-3">
        <div className="relative">
          <div className="absolute inset-0 -m-8">
            {/* <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="#fff"
              hoverFillColor="#222"
            /> */}
          </div>
          <div className="relative z-10">
            <h3 className="text-[#ffd53a]">merotrade</h3>
            {/* <div className="w-35 h-35 ">
              <CircularText
                text="merotrade*merotrade*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class text-black text-xs font-bold"
              />
            </div> */}
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl font-bold text-white">
                Your Trades, Your Legacy{" "}
                {/* <span className="text-[#ffd53a]"> — Share, Inspire, Earn.</span> */}
              </h1>
              <div className="flex text-4xl font-bold text-[#ffd53a] ml-[30rem]">
                <span className="pt-1">—</span>
                <RotatingText
                  texts={["Share", "Inspire", "Earn"]}
                  mainClassName="px-2 sm:px-2 md:px-3  bg-transparent  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={1500}
                />
              </div>
              <div className="flex gap-4">
                <button className="bg-[#ffd53a] hover:bg-[#ffe56f] flex text-black font-semibold py-2 px-6 rounded-lg transition-colors duration-200 w-fit">
                  View Traders
                  <Image
                    src="/images/profile.svg"
                    alt="arrow"
                    width={25}
                    height={25}
                    className="ml-2"
                  />
                </button>
                <button className="bg-[#ffd53a] hover:bg-[#ffe56f] flex text-black font-semibold py-2 px-6 rounded-lg transition-colors duration-200 w-fit">
                  Get Started With MeroTrade
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={25}
                    height={25}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen flex items-center justify-end pr-32">
        <FloatingPhone />
      </div>
    </div>
  );
};

export default Content;
