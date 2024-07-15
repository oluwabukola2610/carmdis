"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import GooglePlay from "@/public/assets/svg/google-play.svg";
import Screens from "@/public/Newimages/img1.png";
import AppStore from "@/public/assets/svg/app-store.svg";
import Logo from "@/public/assets/images/Main-logo-2-blue-bkg.png";
import LinkedIn from "@/public/assets/svg/linkedin-icon-gray.svg";
import Facebook from "@/public/assets/svg/facebook-icon-gray.svg";
import Instagram from "@/public/assets/svg/instagram-icon-gray.svg";
import Twitter from "@/public/assets/svg/x-icon-gray.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavs = [
    {
      label: "Solutions",
      items: [
        {
          href: "",
          name: "EventGo",
        },
        {
          href: "",
          name: "Charter a Vehicle",
        },
        {
          href: "",
          name: "Business",
        },
        {
          href: "",
          name: "Daily",
        },
        {
          href: "",
          name: "Drive for us",
        },
        {
          href: "",
          name: "Vehicle Partner",
        },
      ],
    },
    {
      label: "Contact Us",

      items: [
        {
          href: "",
          name: "For Support, complaints or enquiry: ",
        },
        {
          href: "mailto:hello@carmedis.com",
          name: "hello@carmedis.com",
        },
        {
          href: "tel:+2347048181777",
          name: <span>+2347048181777 </span>,
        },
        {
          href: "tel:+234 708 347 9407",
          name: <span>+234 708 347 9407 </span>,
        },
        {
          href: "tel:+234 912 307 2092",
          name: <span>+234 912 307 2092</span>,
        },
        {
          href: "",
          name: "Mainland Office 2nd Floor, office 1, 2 Alegbe Cl, Mende Maryland Ikeja, Lagos Nigeria.",
        },
      ],
    },
    {
      label: "Workshop",
      items: [
        {
          href: "",
          name: "Carmedis Automobile Workshop  Oladimeji Alo Street, Lekki Phase 1, Lagos, Eti-Osa, Lekki 105102, Lagos",
        },
        {
          href: "",
          name: "Carmedis, Inc. 1207 Delaware Avenue Wilmington, DE 19806 US",
        },
        // {
        //   href: "",
        //   name: "FAQs",
        // },
        // {
        //   href: "",
        //   name: "Careers",
        // },
        // {
        //   href: "",
        //   name: "Shuttlers community",
        // },
      ],
    },
  ];

  return (
    <section className="bg-[rgb(13,76,163)] text-white divide-y-2 divide-[#E9E9E94D] py-8 lg:py-16">
      <footer className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-col divide-y-[1px]">
        {/* download mobile app */}
        <div className="flex flex-col md:flex-row gap-8 justify-between pb-8">
          <div className="flex flex-col gap-14">
            <span className="flex flex-col gap-6 max-w-[457px]">
              <h2 className="lg:text-[32px] text-[20px] font-semibold leading-tight">
                Enjoy Convenience with Mobile Mech.
              </h2>
              <p className="text-[14px] sm:text-base max-w-[600px]">
                Our mobile mechanics save you time by coming to your location.
                There’s no need to drive to a workshop, wait in line, or arrange
                for alternative transportation while your car is being fixed.
              </p>
            </span>
            <span className="flex gap-x-3 justify-center lg:justify-start w-max">
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
            </span>
          </div>
          <div className="px-4 lg:px-0">
            <Image
              src={Screens}
              alt="screens"
              className="lg:max-w-[475px] hover:scale-105 duration-200"
            />
          </div>
        </div>

        {/* links */}
        <div className="flex gap-8 flex-col lg:flex-row lg:justify-between py-8">
          <div className="flex flex-col gap-7 lg:max-w-[300px]">
            <Link href="/">
              <Image src={Logo} width={75} height={60} alt="Logo" />
            </Link>
            <p className="text-[14px] sm:text-base max-w-[600px]">
              Connect with an Auto Mechanic and service Shop near you in Real
              Time. Carmedis is a great way to make your car repair and
              maintenance plans stress-free.
            </p>

            <div className="flex gap-4 items-center">
              <Link href="" className="w-max hover:scale-[1.05] duration-200">
                <Image src={LinkedIn} alt="LinkedIn" />
              </Link>
              <Link href="" className="w-max hover:scale-[1.05] duration-200">
                <Image src={Facebook} alt="Facebook" />
              </Link>
              <Link href="" className="w-max hover:scale-[1.05] duration-200">
                <Image src={Instagram} alt="Instagram" />
              </Link>
              <Link href="" className="w-max hover:scale-[1.05] duration-200">
                <Image src={Twitter} alt="Twitter" />
              </Link>
            </div>
          </div>

          {/* links */}
          <div className="flex- mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 lg:gap-">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="font-medium text-[#B9BCC8] sm:pb-2">
                  {item.label}
                </h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="hover:underline hover:scale-105 duration-200 capitalize"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-center lg:text-start">
              © {currentYear} {""}
              <Link href="" className="hover:underline duration-150">
               Carmedis, Inc. 
              </Link>
              . &nbsp; All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
