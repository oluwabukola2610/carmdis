import React from "react";
import Link from "next/link";
import FadeUp from "@/components/common/FadeUp";

const Routes = () => {
  
  return (
    <section className="bg-[#f3F3F4]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-0 py-16 lg:py-20 flex flex-col gap-[44px]">
        <div className="flex flex-col gap-4 text-center justify-center items-center max-w-md mx-auto">
          <h2 className="lg:text-[36px] text-[20px] text-[#000005] font-semibold leading-tight">
            Experience a simpler, better way to commute
          </h2>
        </div>


        {/* <div className="relative rounded-[2rem] w-full flex py-16 p-[64px] lg:px-[56px] justify-center items-center min-h-[350px] lg:min-h-[338px] bg-[url('/assets/images/route-overlay.webp')] bg-cover bg-no-repeat">
         
          <div className="flex flex-col gap-10 text-white text-center items-center">
            <FadeUp>
              <span className="max-w-md flex flex-col gap-4">
                <h2 className="lg:text-[40px] text-[24px] font-bold leading-tight">
                  All of our routes displayed at a glance
                </h2>
                <p className="">
                  We are bringing all our routes to you. Simply search for a
                  route along your way and book a ride.
                </p>
              </span>
            </FadeUp>
            <Link
              href=""
              className="bg-white px-[24px] py-[12px] rounded-2xl text-gray-700 font-medium w-max"
            >
              View all routes
            </Link>
          </div>
        </div> */}
        <div className="elementor-wrapper m-auto elementor-open-inline">
          <iframe
            className="elementor-video"
            // frameborder="0"
            // allowfullscreen=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            title="Car Owner Explainer Video   Carmedis"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/w7Lc6uc4w1M?controls=1&amp;rel=0&amp;playsinline=1&amp;modestbranding=1&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.carmedis.com&amp;widgetid=1"
            id="widget2"
          ></iframe>{" "}
        </div>
      </div>
    </section>
  );
};

export default Routes;
