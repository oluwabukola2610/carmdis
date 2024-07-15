import Image from "next/image";
import React from "react";

import Briefcase from "@/public/assets/svg/briefcase.svg";
import Clock from "@/public/assets/svg/clock.svg";
import Rental from "@/public/assets/svg/rental.svg";
import EventGo from "@/public/assets/svg/event-go.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import FadeUp from "@/components/common/FadeUp";

const Services = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-0 py-16 lg:py-20 lg:pt-44 flex flex-col gap-[44px]">
        <FadeUp>
          <div className="flex flex-col gap-4 text-center justify-center items-center max-w-[618px] mx-auto">
            <p className="text-carmedis bg-[#f4f5f4] px-[24px] py-[12px] rounded-full font-medium text-base">
              Our services
            </p>
            <h2 className="lg:text-[36px] text-[20px] text-[#000005] font-semibold leading-tight">
              We ensure top-quality repairs by utilizing advanced technology.
            </h2>
            <p className="text-[#595E5C] text-[14px] sm:text-base max-w-[600px]">
              Carmedis manages your vehicle repair end-to-end, from scheduling
              and diagnostics to repairs and invoicing. We are transforming the
              repair process.
            </p>
          </div>
        </FadeUp>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-[8px] border rounded-[2rem] xl:min-w-[530px] min-h-[507px] group cursor-pointer">
            <FadeUp>
              <div className="relative rounded-[2rem] xl:min-w-[530px] min-h-[507px] bg-[url('/Newimages/IMG_0407.JPG')] bg-cover sm:bg-cover bg-no-repeat">
                <div className="bg-white p-[24px] flex flex-col gap-4 justify-between overflow-hidden h-[171px] lg:min-w-[512px] group-hover:h-full group-hover:bg-[#4848EC] group-hover:text-white duration-300 w-full rounded-[2rem] absolute bottom-0">
                  <span className="flex flex-col gap-4">
                    <span className="p-4 rounded-xl bg-[#FFFFFF1A] w-max hidden group-hover:block">
                      <Image src={Briefcase} alt="briefcase" />
                    </span>

                    <span className="flex gap-4 items-center justify-between">
                      <p className="lg:text-3xl text-xl font-semibold">
                        Carmedis for Business
                      </p>
                      <HiOutlineArrowNarrowRight className="size-6 text-carmedis group-hover:hidden" />
                    </span>
                    <p className="text-base lg:text-lg text-gray-500 group-hover:text-white truncate group-hover:text-wrap">
                      Help employees get to work safely, comfortably, <br /> and
                      For businesses, maintaining a fleet of vehicles is crucial
                      to operational efficiency. Carmedis offers specialized
                      services tailored to the unique needs of businesses,
                      ensuring your fleet remains reliable and road-ready. We
                      provide fleet maintenance, emergency repairs, and
                      scheduled servicing to minimize downtime and maximize
                      productivity. Partner with Carmedis for Business and keep
                      your company moving forward.
                    </p>
                  </span>

                  <Link
                    href=""
                    className="bg-white px-[24px] py-[12px] rounded-2xl text-gray-700 font-medium w-max hidden group-hover:block"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="p-[8px] border rounded-[2rem] xl:min-w-[530px] min-h-[507px] group cursor-pointer">
            <FadeUp>
              <div className="relative rounded-[2rem] xl:min-w-[530px] min-h-[507px] bg-[url('/Newimages/www.png')] bg-cover sm:bg-cover bg-no-repeat">
                <div className="bg-white p-[24px] flex flex-col gap-4 justify-between overflow-hidden h-[171px] lg:min-w-[512px] group-hover:h-full group-hover:bg-[#299DCF] group-hover:text-white duration-300 w-full rounded-[2rem] absolute bottom-0">
                  <span className="flex flex-col gap-4">
                    <span className="p-4 rounded-xl bg-[#FFFFFF1A] w-max hidden group-hover:block">
                      <Image src={Clock} alt="clock" />
                    </span>

                    <span className="flex gap-4 items-center justify-between">
                      <p className="lg:text-3xl text-xl font-semibold">
                        Carmedis for Individuals
                      </p>
                      <HiOutlineArrowNarrowRight className="size-6 text-carmedis group-hover:hidden" />
                    </span>
                    <p className="text-base lg:text-lg text-gray-500 group-hover:text-white truncate group-hover:text-wrap">
                      Experience the efficiency and convenience. <br />
                      Your car is an essential part of your daily life, and at
                      Carmedis, we are dedicated to keeping it in top condition.
                      Our comprehensive repair and maintenance services cater to
                      all your individual needs. From routine oil changes to
                      major repairs, our expert technicians use the latest tools
                      and technology to ensure your vehicle runs smoothly and
                      safely. Choose Carmedis for Individuals and experience
                      unparalleled service and quality.
                    </p>
                  </span>

                  <Link
                    href=""
                    className="bg-white px-[24px] py-[12px] rounded-2xl text-gray-700 font-medium w-max hidden group-hover:block"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="p-[8px] border rounded-[2rem] xl:min-w-[530px] min-h-[507px] group cursor-pointer">
            <FadeUp>
              <div className="relative rounded-[2rem] xl:min-w-[530px] min-h-[507px] bg-[url('/Newimages/13123.jpg')] bg-cover sm:bg-cover bg-no-repeat">
                <div className="bg-white p-[24px] flex flex-col gap-4 justify-between overflow-hidden h-[171px] lg:min-w-[512px] group-hover:h-full group-hover:bg-[#5B27AF] group-hover:text-white duration-300 w-full rounded-[2rem] absolute bottom-0">
                  <span className="flex flex-col gap-4">
                    <span className="p-4 rounded-xl bg-[#FFFFFF1A] w-max hidden group-hover:block">
                      <Image src={Rental} alt="rental" />
                    </span>

                    <span className="flex gap-4 items-center justify-between">
                      <p className="lg:text-3xl text-xl font-semibold">
                        Towing Service
                      </p>
                      <HiOutlineArrowNarrowRight className="size-6 text-carmedis group-hover:hidden" />
                    </span>
                    <p className="text-base lg:text-lg text-gray-500 group-hover:text-white truncate group-hover:text-wrap">
                      Unlock the freedom to go anywhere, anytime <br />
                      At Carmedis, we understand that breakdowns can happen
                      anytime and anywhere. Thats why we offer reliable and
                      efficient towing services to get you back on the road as
                      quickly as possible. Whether its a flat tire, engine
                      trouble, or an accident, our skilled team is ready to
                      assist you 24/7. Trust Carmedis Towing Service to handle
                      your vehicle with care and professionalism.
                    </p>
                  </span>

                  <Link
                    href=""
                    className="bg-white px-[24px] py-[12px] rounded-2xl text-gray-700 font-medium w-max hidden group-hover:block"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="p-[8px] border rounded-[2rem] xl:min-w-[530px] min-h-[507px] group cursor-pointer">
            <FadeUp>
              <div className="relative rounded-[2rem] xl:min-w-[530px] min-h-[507px] bg-[url('/Newimages/au.jpg')] bg-cover sm:bg-cover bg-no-repeat">
                <div className="bg-white p-[24px] flex flex-col gap-4 justify-between overflow-hidden h-[171px] lg:min-w-[512px] group-hover:h-full group-hover:bg-[#0DAC5C] group-hover:text-white duration-300 w-full rounded-[2rem] absolute bottom-0">
                  <span className="flex flex-col gap-4">
                    <span className="p-4 rounded-xl bg-[#FFFFFF1A] w-max hidden group-hover:block">
                      <Image src={EventGo} alt="Event Go" />
                    </span>

                    <span className="flex gap-4 items-center justify-between">
                      <p className="lg:text-3xl text-xl font-semibold">
                        Skanpro Remote Diagnostic
                      </p>
                      <HiOutlineArrowNarrowRight className="size-6 text-carmedis group-hover:hidden" />
                    </span>
                    <p className="text-base lg:text-lg text-gray-500 group-hover:text-white truncate group-hover:text-wrap">
                      Stay ahead of potential issues with Skanpro Remote
                      Diagnostic by Carmedis.
                      <br /> Our cutting-edge diagnostic technology allows us to
                      monitor your vehicles performance in real-time,
                      identifying problems before they become serious. With
                      Skanpro, you can enjoy peace of mind knowing that your car
                      is under constant surveillance by experts, ensuring
                      optimal performance and safety. Embrace the future of
                      vehicle care with Skanpro Remote Diagnostic.
                    </p>
                  </span>

                  <Link
                    href=""
                    className="bg-white px-[24px] py-[12px] rounded-2xl text-gray-700 font-medium w-max hidden group-hover:block"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
