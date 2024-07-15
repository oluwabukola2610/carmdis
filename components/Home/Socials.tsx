import Image from "next/image";
import React from "react";
import Link from "next/link";

import Facebook from "@/public/assets/svg/facebook-icon.svg";
import Twitter from "@/public/assets/svg/twitter-x-icon.svg";
import Instagram from "@/public/assets/svg/instagram-icon.svg";
import Phone from "@/public/assets/svg/phone-icon.svg";
import FadeUp from "@/components/common/FadeUp";

const Socials = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full">
      {/* white bg */}
      <div className="w-full lg:flex-1 lg:min-h-full flex flex-col items-center justify-center bg-white px-4 md:px-8 lg:px-0 py-16 lg:py-20">
        <div className="max-w-screen-xl lg:w-max mx-auto">
          <FadeUp>
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-4 px-4 md:px-8 max-w-[451px] mx-auto">
              <p className="text-carmedis bg-[#f4f5f4] px-[24px] py-[12px] rounded-full font-semibold text-base w-max">
                Socials
              </p>
              <h2 className="lg:text-[36px] text-[20px] text-[#000005] font-semibold leading-tight">
                Connect with Us
              </h2>
              <p className="text-[#595E5C] text-[14px] sm:text-base max-w-[600px]">
                Join us in our community and our Social media, to stay updated
                about us.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* gray bg */}
      <div className="w-full lg:flex-1 h-full bg-[#f4f5f4] flex px-4 md:px-8 lg:px-0 py-16 lg:py-20">
        <div className="px-4 max-w-[600px] flex justify-start items-start">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 w-full">
              <div className="flex flex-col gap-6 p-4 lg:border-r">
                {/* lg:min-w-[262px] */}
                <span className="border rounded-2xl p-3 bg-white group w-max">
                  <Image
                    src={Facebook}
                    alt="Facebook"
                    className="group-hover:scale-110 duration-150"
                  />
                </span>
                <span className="flex flex-col gap-2 w-full">
                  <h3 className="font-semibold lg:text-[22px] text-[20px] text-[#161616]">
                    Follow us on Facebook
                  </h3>
                  <span>
                    <p className="text-base text-[#595E5C]">
                      Get Shuttlers news, company information and resources
                    </p>
                    <Link
                      href=""
                      className="text-base text-carmedis font-medium underline"
                    >
                      @shuttlers_ng
                    </Link>
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-6 p-4">
                {/* lg:min-w-[262px] */}
                <span className="border rounded-2xl p-3 bg-white group w-max">
                  <Image
                    src={Twitter}
                    alt="Twitter"
                    className="group-hover:scale-110 duration-150"
                  />
                </span>
                <span className="flex flex-col gap-2 w-full">
                  <h3 className="font-semibold lg:text-[22px] text-[20px] text-[#161616]">
                    Follow us on X
                  </h3>
                  <span>
                    <p className="text-base text-[#595E5C]">
                      Get Shuttlers news, company information and resources
                    </p>
                    <Link
                      href=""
                      className="text-base text-carmedis font-medium underline"
                    >
                      @shuttlers_ng
                    </Link>
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-6 p-4 lg:border-r">
                {/* lg:min-w-[262px] */}
                <span className="border rounded-2xl p-3 bg-white group w-max">
                  <Image
                    src={Instagram}
                    alt="Instagram"
                    className="group-hover:scale-110 duration-150"
                  />
                </span>
                <span className="flex flex-col gap-2 w-full">
                  <h3 className="font-semibold lg:text-[22px] text-[20px] text-[#161616]">
                    Follow us on Instagram
                  </h3>
                  <span>
                    <p className="text-base text-[#595E5C]">
                      Get Shuttlers news, company information and resources
                    </p>
                    <Link
                      href=""
                      className="text-base text-carmedis font-medium underline"
                    >
                      @shuttlers_ng
                    </Link>
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-6 p-4">
                {/* lg:min-w-[262px] */}
                <span className="border rounded-2xl p-3 bg-white group w-max">
                  <Image
                    src={Phone}
                    alt="Phone"
                    className="group-hover:scale-110 duration-150"
                  />
                </span>
                <span className="flex flex-col gap-2 w-full">
                  <h3 className="font-semibold lg:text-[22px] text-[20px] text-[#161616]">
                    Call Us
                  </h3>
                  <span>
                    <p className="text-base text-[#595E5C]">
                      Speak with any of our customer support.
                    </p>
                    <Link
                      href="tel:07000700080"
                      className="text-base text-carmedis font-medium underline"
                    >
                      07000700080
                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Socials;
