"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaBuffer } from "react-icons/fa6";
const dataNav = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/gioi-thieu", icon: <HiViewColumns /> },
  {
    name: "services",
    path: "/bao-gia",
    icon: <MdOutlineAttachMoney />,
  },
  { name: "work", path: "/allbums", icon: <FaBuffer /> },
  {
    name: "contact",
    path: "/lien-he",
    icon: <HiUser />,
  },
];
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-max bottom-0 items-center xl:justify-center gap-y-4 fixed   mt-auto xl:right-[3%] z-50 top-0 w-full  xl:w-fit xl:max-w-md xl:h-screen ">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center  md:px-40 xl:px-0 h-min xl:h-max   bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full xl:w-min text-white ">
        {dataNav.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`px-4 py-2 ${
              item.path === pathname && "text-yellow-400"
            } relative flex group hover:text-gray-400 transition-all duration-300`}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:block">
              <div className="bg-white relative flex text-primary items-center p-[6px]">
                <div className="text-[12px]">{item.name}</div>
              </div>
            </div>
            <div className=""> {item.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
