"use client";

import Image from "next/image";
import React from "react";

import Dot from "@/public/assets/svg/pickup-dot.svg";
import Search from "@/public/assets/svg/search.svg";
import Location from "@/public/assets/svg/location.svg";
import Calendar from "@/public/assets/svg/calendar.svg";

const SelectTrip = () => {
  return (
    <section className="max-w-[1200px] mx-auto bg-[#FAFAFA] rounded-box px-2 py-4 border border-gray-300">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab bg-black/5 text-black [--tab-bg:white] [--tab-border-color:white]"
          aria-label="One way
          "
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content shadow-md bg-white rounded-b-box p-6"
        >
          <div>
            <div className="flex gap-4 justify-between">
              <span className="flex gap-2 items-start flex-1 border-r">
                <span className="py-0.5">
                  <Image src={Dot} alt="dot" />
                </span>
                <span className="flex flex-col w-full">
                  <label htmlFor="pickup" className="text-sm font-semibold">
                    Pick up location
                  </label>
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter address"
                    className="border-none py-1 focus:ring-0 focus:outline-none bg-white text-gray-400 w-full"
                  />
                </span>
              </span>

              <span className="flex gap-2 items-start flex-1 border-r">
                <span className="py-0.5">
                  <Image src={Location} alt="location" />
                </span>
                <span className="flex flex-col w-full">
                  <label
                    htmlFor="destination"
                    className="text-sm font-semibold"
                  >
                    Destination location
                  </label>
                  <input
                    id="destination"
                    type="text"
                    placeholder="Enter address"
                    className="border-none py-1 focus:ring-0 focus:outline-none bg-white text-gray-400 w-full"
                  />
                </span>
              </span>

              <span className="flex gap-2 items-start flex-1">
                <span className="py-0.5">
                  <Image src={Calendar} alt="calendar" />
                </span>
                <span className="flex flex-col w-full">
                  <label htmlFor="date" className="text-sm font-semibold">
                    First trip
                  </label>
                  <input
                    id="date"
                    type="date"
                    placeholder="Pick a date"
                    className="border-none py-1 focus:ring-0 focus:outline-none bg-white text-gray-400 w-full"
                  />
                </span>
              </span>

              <span className="flex gap-2 items-start flex-none">
                <button
                  type="submit"
                  className="rounded-xl bg-black hover:bg-black/90 p-4 flex justify-center items-center active:scale-95 duration-150"
                  title="Search"
                >
                  <Image src={Search} alt="Search" />
                </button>
              </span>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab bg-black/5 text-black [--tab-bg:white] [--tab-border-color:white]"
          aria-label="Return trip"
        />
        <div
          role="tabpanel"
          className="tab-content shadow-md bg-white rounded-b-box p-6"
        >
          <div>
            <div className="flex gap-4 justify-between">
              <span className="flex gap-2 items-start flex-1 border-r">
                <span className="py-0.5">
                  <Image src={Dot} alt="dot" />
                </span>
                <span className="flex flex-col w-full">
                  <label htmlFor="pickup" className="text-sm font-semibold">
                    Pick up location
                  </label>
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter address"
                    className="border-none py-1 focus:ring-0 focus:outline-none bg-white text-gray-400 w-full"
                  />
                </span>
              </span>

              <span className="flex gap-2 items-start flex-1 border-r">
                <span className="py-0.5">
                  <Image src={Location} alt="location" />
                </span>
                <span className="flex flex-col w-full">
                  <label
                    htmlFor="destination"
                    className="text-sm font-semibold"
                  >
                    Destination location
                  </label>
                  <input
                    id="destination"
                    type="text"
                    placeholder="Enter address"
                    className="border-none py-1 focus:ring-0 focus:outline-none bg-white text-gray-400 w-full"
                  />
                </span>
              </span>

              <span className="flex gap-2 items-start flex-1 border-r">
                <span className="py-0.5">
                  <Image src={Calendar} alt="calendar" />
                </span>
                <span className="flex flex-col w-full">
                  <label htmlFor="firstDate" className="text-sm font-semibold">
                    First trip
                  </label>
                  <input
                    id="firstDate"
                    type="date"
                    placeholder="Pick a date"
                    className="border-none py-1 focus:ring-0 focus:outline-none bg-white text-gray-400 w-full"
                  />
                </span>
              </span>

              <span className="flex gap-2 items-start flex-1">
                <span className="py-0.5">
                  <Image src={Calendar} alt="calendar" />
                </span>
                <span className="flex flex-col w-full">
                  <label htmlFor="returnDate" className="text-sm font-semibold">
                    Return trip
                  </label>
                  <input
                    id="returnDate"
                    type="date"
                    placeholder="Pick a date"
                    className="border-none py-1 focus:ring-0 focus:outline-none bg-white text-gray-400 w-full"
                  />
                </span>
              </span>

              <span className="flex gap-2 items-start flex-none">
                <button
                  type="submit"
                  className="rounded-xl bg-black hover:bg-black/90 p-4 flex justify-center items-center active:scale-95 duration-150"
                  title="Search"
                >
                  <Image src={Search} alt="Search" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectTrip;
