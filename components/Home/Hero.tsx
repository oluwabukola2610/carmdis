"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Animation from "@/public/Newimages/img2.jpg";
import GooglePlay from "@/public/assets/svg/google-play.svg";
import AppStore from "@/public/assets/svg/app-store.svg";
import FadeUp from "@/components/common/FadeUp";

const Hero = () => {
  const [words, setWords] = useState([
    "Rain",
    "Event",
    "Employee",
    "Somewhere",
  ]);

  return (
    // <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]">
    // <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px] lg:min-h-screen">
    //   <div className="flex">
    //     <div>Hero</div>
    //     <div>
    //       <Image src={Animation} alt="Animation" width={472} />
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="max-w-[1200px] mx-auto px-4 py-16 lg:py-24 lg:pb-10 gap-8 text-black overflow-hidden md:px-8 xl:px-0 flex flex-col md:flex-row lg:justify-between">
        <div className="flex-1 space-y-5">
          <div className="text-3xl sm:text-4xl lg:text-6xl text-gray-800 font-bold">
            <div className="scroller h-[1.3em] leading-[1.2em] relative overflow-hidden">
              <span className="text-carmedis  drop-shadow-2xl">
                {words[0]}
                <br />
                {words[1]}
                <br />
                {words[2]}
                <br />
                {words[3]}
              </span>
            </div>
            Ensure Your Vehicle Stays On The Road
          </div>

          {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold">
            <div className="text-carmedis [text-shadow:_0_1.5px_0_rgb(0_0_0_/_40%)]">
              Daily Weekly Monthly
            </div>
            transportation made easy with us
          </h1> */}
          <FadeUp>
            <p className="text-gray-600 text-base">
              Carmedis is a platform that collaborates with company-owned and
              carefully vetted partner workshops to deliver high-quality,
              affordable auto care on a large scale in realtime
            </p>
          </FadeUp>

          <FadeUp>
            <div className="flex gap-x-3 px-2">
              <Link href="" className="">
                <Image
                  src={AppStore}
                  alt="App Store"
                  className="hover:scale-[1.05] duration-200"
                />
              </Link>
              <Link href="" className="">
                <Image
                  src={GooglePlay}
                  alt="Google Play"
                  className="hover:scale-[1.05] duration-200"
                />
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Animation */}
        <div className="flex-none block">
          <Image
            src={Animation}
            alt="Animation"
            className="sm:max-w-lg md:max-w-sm lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
