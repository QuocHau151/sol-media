import Link from "next/link";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="fixed top-[2%] left-0 z-50 w-full">
      <div className=" flex items-center justify-between mx-4">
        <h1 className="text-white">LOGO</h1>
        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <CiFacebook size={25} color="white" />
          </Link>
          <Link href="">
            <CiInstagram size={25} color="white" />
          </Link>
          <Link href="">
            <FaBehance size={25} color="white" />
          </Link>
          <Link href="">
            <FaTiktok size={25} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
