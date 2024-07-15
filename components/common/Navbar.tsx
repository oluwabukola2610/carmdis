"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/Main-logo-2-blue-bkg.png";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { HiMiniClock } from "react-icons/hi2";

const solutionNavs = [
  {
    label: "Products",
    navs: [
      {
        title: "Analytics",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Reports",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
  {
    label: "Resources",
    navs: [
      {
        title: "Blog",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Community",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
];

const productNavs = [
  {
    label: "Products",
    navs: [
      {
        title: "Analytics",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Reports",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
  {
    label: "Resources",
    navs: [
      {
        title: "Blog",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Community",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
];

const opportunityNavs = [
  {
    label: "Products",
    navs: [
      {
        title: "Analytics",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Reports",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
  {
    label: "Resources",
    navs: [
      {
        title: "Blog",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Community",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
];

const resourcesNavs = [
  {
    label: "Products",
    navs: [
      {
        title: "Analytics",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Reports",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
  {
    label: "Resources",
    navs: [
      {
        title: "Blog",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
      {
        title: "Community",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "",
        icon: <HiMiniClock className="size-6" />,
      },
    ],
  },
];

const Navbar = () => {
  const [state, setState] = useState(false);
  const [dropdownState, setDropdownState] = useState<{
    isActive: boolean;
    idx: number | null;
  }>({ isActive: false, idx: null });
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(); // Check the screen size on initial load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  const navigation = [
    {
      title: "Solutions",
      path: "",
      isDropdown: true,
      navs: solutionNavs,
    },
    { title: "Products", path: "", isDropdown: true, navs: productNavs },
    { title: "Opportunity", path: "", isDropdown: true, navs: opportunityNavs },
    { title: "Resources", path: "", isDropdown: true, navs: resourcesNavs },
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && !target.closest(".nav-menu")) {
        setDropdownState({ isActive: false, idx: null });
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleHover = (idx: number | null, isActive: boolean) => {
    if (!isMobile) {
      setDropdownState({ isActive, idx });
    }
  };

  const handleClick = (idx: number | null) => {
    if (isMobile) {
      setDropdownState({
        idx,
        isActive: !dropdownState.isActive,
      });
    }
  };

  return (
    <>
      <nav
        className={`z-20 bg-white w-full top-0 sticky md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-[1200px] border-b mx-auto md:flex md:px-8 xl:px-0">
          <div className="flex items-center justify-between py-3 md:py-6 md:block">
            <Link href="/">
              <Image src={Logo} width={75} height={60} alt="Logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800 relative w-10 h-10 focus:outline-none bg-white"
                onClick={() => setState(!state)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      state ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      state ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      state ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => handleHover(idx, true)}
                  onMouseLeave={() => handleHover(null, false)}
                >
                  {item.isDropdown ? (
                    <button
                      className="w-full flex items-center justify-between gap-1 text-black hover:font-medium hover:text-carmedis"
                      onClick={() => handleClick(idx)}
                    >
                      {item.title}
                      {dropdownState.idx == idx && dropdownState.isActive ? (
                        <IoChevronUp className="size-4" />
                      ) : (
                        <IoChevronDown className="size-4" />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className="block text-black hover:font-medium hover:text-carmedis"
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.isDropdown &&
                  dropdownState.idx == idx &&
                  dropdownState.isActive ? (
                    <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:-mt-1">
                      <ul className="max-w-[1200px] bg-white mx-auto grid items-center gap-6 md:p-8 xl:px-0 md:grid-cols-2 lg:grid-cols-3">
                        {item?.navs?.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <p className="text-carmedis text-sm">
                              {dropdownItem.label}
                            </p>
                            <ul className="mt-5 space-y-6">
                              {dropdownItem.navs.map((navItem, idx) => (
                                <li key={idx} className="group">
                                  <Link
                                    href={navItem.path}
                                    className="flex gap-3 items-center"
                                  >
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-carmedis flex items-center justify-center duration-150 group-hover:bg-carmedis group-hover:text-white md:w-14 md:h-14">
                                      {navItem.icon}
                                    </div>
                                    <div>
                                      <span className="text-gray-800 duration-200 group-hover:text-carmedis text-sm font-medium md:text-base">
                                        {navItem.title}
                                      </span>
                                      <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                                        {navItem.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                {/* <li>
                  <Link
                    href=""
                    className="block py-3 text-center text-black hover:font-medium 700 hover:text-carmedis border rounded-lg md:border-none active:scale-95 duration-150"
                  >
                    Log in
                  </Link>
                </li> */}
                <li>
                  <Link
                    href=""
                    className="block py-3 px-4 font-medium text-center text-white bg-carmedis hover:bg-carmedis active:bg-carmedis active:shadow-none rounded-2xl shadow md:inline active:scale-95 duration-150"
                  >
                    Request for Car Repair Expert
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Logo from "@/public/assets/svg/shuttlers-logo-black.svg";

// import NavLinks from "./NavLinks";
// import { IoChevronDown, IoChevronUp, IoClose, IoMenu } from "react-icons/io5";
// import { HiMiniClock } from "react-icons/hi2";

// const solutionNavs = [
//   {
//     label: "Products",
//     navs: [
//       {
//         title: "Analytics",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Reports",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     navs: [
//       {
//         title: "Blog",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Community",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
// ];

// const productNavs = [
//   {
//     label: "Products",
//     navs: [
//       {
//         title: "Analytics",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Reports",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     navs: [
//       {
//         title: "Blog",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Community",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
// ];

// const opportunityNavs = [
//   {
//     label: "Products",
//     navs: [
//       {
//         title: "Analytics",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Reports",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     navs: [
//       {
//         title: "Blog",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Community",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
// ];

// const resourcesNavs = [
//   {
//     label: "Products",
//     navs: [
//       {
//         title: "Analytics",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Reports",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     navs: [
//       {
//         title: "Blog",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//       {
//         title: "Community",
//         desc: "Duis aute irure dolor in reprehenderit",
//         path: "",
//         icon: <HiMiniClock className="size-6" />,
//       },
//     ],
//   },
// ];

// const Navbar = () => {
//   const [state, setState] = useState(false);
//   const [dropdownState, setDropdownState] = React.useState<{
//     isActive: boolean;
//     idx: number | null;
//   }>({ isActive: false, idx: null });

//   // const [dropdownState, setDropdownState] = useState({
//   //   isActive: false,
//   //   idx: null,
//   // });

//   const navigation = [
//     {
//       title: "Solutions",
//       path: "",
//       isDropdown: true,
//       navs: solutionNavs,
//     },
//     { title: "Products", path: "", isDropdown: true, navs: productNavs },
//     { title: "Opportunity", path: "", isDropdown: true, navs: opportunityNavs },
//     { title: "Resources", path: "", isDropdown: true, navs: resourcesNavs },
//   ];

//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (target && !target.closest(".nav-menu")) {
//         setDropdownState({ isActive: false, idx: null });
//       }
//     };

//     document.addEventListener("click", handleClick);
//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);

//   return (
//     <>
//       <nav
//         className={`z-20 bg-white w-full top-0 sticky md:border-none ${
//           state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
//         }`}
//       >
//         <div className="items-center gap-x-14 px-4 max-w-[1200px] border-b mx-auto md:flex md:px-8 xl:px-0">
//           <div className="flex items-center justify-between py-3 md:py-6 md:block">
//             <Link href="/">
//               <Image
//                 src={Logo}
//                 width={162}
//                 height={30}
//                 // className="w-[114px] h-[64px]"
//                 alt="Logo"
//               />
//             </Link>
//             <div className="md:hidden">
//               <button
//                 className="text-gray-500 hover:text-gray-800 relative w-10 h-10 focus:outline-none bg-white"
//                 onClick={() => setState(!state)}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                   <span
//                     className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
//                       state ? "rotate-45" : "-translate-y-1.5"
//                     }`}
//                   ></span>
//                   <span
//                     className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
//                       state ? "opacity-0" : ""
//                     }`}
//                   ></span>
//                   <span
//                     className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
//                       state ? "-rotate-45" : "translate-y-1.5"
//                     }`}
//                   ></span>
//                 </div>
//               </button>
//             </div>
//             {/* <div className="md:hidden">
//               <button
//                 className="text-gray-500 hover:text-gray-800"
//                 onClick={() => setState(!state)}
//               >
//                 {state ? (
//                   <CgClose className="size-6" />
//                 ) : (
//                   <HiOutlineMenuAlt3 className="size-6" />
//                 )}
//               </button>
//             </div> */}
//           </div>
//           <div
//             className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               state ? "block" : "hidden"
//             }`}
//           >
//             <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
//               {navigation.map((item, idx) => {
//                 return (
//                   <li key={idx}>
//                     {item.isDropdown ? (
//                       <button
//                         className="w-full flex items-center justify-between gap-1 text-black hover:font-medium hover:text-carmedis"
//                         onClick={() =>
//                           setDropdownState({
//                             idx,
//                             isActive: !dropdownState.isActive,
//                           })
//                         }
//                       >
//                         {item.title}
//                         {dropdownState.idx == idx && dropdownState.isActive ? (
//                           <IoChevronUp className="size-4" />
//                         ) : (
//                           <IoChevronDown className="size-4" />
//                         )}
//                       </button>
//                     ) : (
//                       <Link
//                         href={item.path}
//                         className="block text-black hover:font-medium hover:text-carmedis"
//                       >
//                         {item.title}
//                       </Link>
//                     )}
//                     {item.isDropdown &&
//                     dropdownState.idx == idx &&
//                     dropdownState.isActive ? (
//                       <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:-mt-1">
//                         <ul className="max-w-[1200px] bg-white mx-auto grid items-center gap-6 md:p-8 xl:px-0 md:grid-cols-2 lg:grid-cols-3">
//                           {item?.navs?.map((dropdownItem, idx) => (
//                             <li key={idx}>
//                               <p className="text-carmedis text-sm">
//                                 {dropdownItem.label}
//                               </p>
//                               <ul className="mt-5 space-y-6">
//                                 {dropdownItem.navs.map((navItem, idx) => (
//                                   <li key={idx} className="group">
//                                     <Link
//                                       href={navItem.path}
//                                       className="flex gap-3 items-center"
//                                     >
//                                       <div className="w-12 h-12 rounded-full bg-indigo-50 text-carmedis flex items-center justify-center duration-150 group-hover:bg-carmedis group-hover:text-white md:w-14 md:h-14">
//                                         {navItem.icon}
//                                       </div>
//                                       <div>
//                                         <span className="text-gray-800 duration-200 group-hover:text-carmedis text-sm font-medium md:text-base">
//                                           {navItem.title}
//                                         </span>
//                                         <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
//                                           {navItem.desc}
//                                         </p>
//                                       </div>
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ) : (
//                       ""
//                     )}
//                   </li>
//                 );
//               })}
//               <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
//                 <li>
//                   <Link
//                     href=""
//                     className="block py-3 text-center text-black hover:font-medium 700 hover:text-carmedis border rounded-lg md:border-none active:scale-95 duration-150"
//                   >
//                     Log in
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href=""
//                     className="block py-3 px-4 font-medium text-center text-white bg-carmedis hover:bg-carmedis active:bg-carmedis active:shadow-none rounded-2xl shadow md:inline active:scale-95 duration-150"
//                   >
//                     Create account
//                   </Link>
//                 </li>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {state ? (
//         <div
//           className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
//           onClick={() => setState(false)}
//         ></div>
//       ) : (
//         ""
//       )}
//     </>
//   );
// };
// export default Navbar;
