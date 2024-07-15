import React from "react";
import Link from "next/link";
import Image from "next/image";

import Forbes from "@/public/assets/svg/forbes.svg";
import TechPoint from "@/public/assets/svg/techpoint-africa.svg";
import WorldEconomicForum from "@/public/assets/svg/world-economic-forum.svg";
import BlockTE from "@/public/assets/svg/block-te.svg";
import GovUK from "@/public/assets/svg/gov-uk.svg";
import GooglePlay from "@/public/assets/svg/google-play.svg";
import AppStore from "@/public/assets/svg/app-store.svg";
import Highway from "@/public/Newimages/app.webp";
import FadeUp from "@/components/common/FadeUp";

const PressAndTrip = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-0 py-16 lg:py-20 flex flex-col gap-[94px]">
        <div className="flex flex-col gap-[44px]">
          {/* <div className="flex flex-col gap-4 text-center justify-center items-center max-w-md mx-auto">
            <h2 className="lg:text-[36px] text-[20px] text-[#000005] font-semibold leading-tight">
              Shuttlers in the press
            </h2>
            <p className="text-gray-500">
              Read all about shuttlers and what we have been doing.
            </p>
          </div> */}

          {/* companies */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:divide-x-2">
            <span className="p-4 flex justify-center items-center">
              <Image src={Forbes} alt="Forbes" />
            </span>
            <span className="p-4 flex justify-center items-center">
              <Image src={TechPoint} alt="Forbes" />
            </span>
            <span className="p-4 flex justify-center items-center">
              <Image src={WorldEconomicForum} alt="Forbes" />
            </span>
            <span className="p-4 flex justify-center items-center">
              <Image src={BlockTE} alt="Block TE" />
            </span>
            <span className="p-4 flex justify-center items-center col-span-2 sm:col-span-1">
              <Image src={GovUK} alt="Gov UK" />
            </span>
          </div> */}
        </div>

        {/* <div className="relative rounded-[2rem] w-full flex py-16 p-[64px] lg:px-[56px] justify-center items-center min-h-[350px] lg:min-h-[338px] bg-[url('/assets/images/route-overlay.webp')] bg-cover bg-no-repeat"> */}
        <div className="relative rounded-[2rem] w-full flex items-center lg:items-start min-h-[350px] lg:min-h-[338px] bg-[#f4f5f4]">
          <div className="flex-1 flex flex-col gap-10 text-[#0D4CA3] py-16 p-[64px] lg:px-[56px]">
            <FadeUp>
              <h2 className="lg:text-[48px] text-[32px] font-extrabold leading-tight text-center lg:text-start">
                Focused on  providing top-notch automotive repair and maintenance services.
              </h2>
            </FadeUp>

            <div className="flex gap-x-3 justify-center lg:justify-start">
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
          </div>

          <div className="flex-1 hidden lg:flex my-auto">
            <Image
              src={Highway}
              alt="Traffic Highway"
              className="h-full rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressAndTrip;
