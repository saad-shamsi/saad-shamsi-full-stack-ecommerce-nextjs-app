"use client";
import React from "react";
import Logo from "../../../public/logo.webp";
// import { GoSearch } from "react-icons/go";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="wrapper bg-slate-500 items-center ">
      {/* main div */}
      <div className="flex justify-between p-8">
        {/* logo */}
        <div>
          <Image src={Logo} alt="dyne logo" />{" "}
        </div>
        {/* list items list div */}
        <div>
          <ul className="flex gap-x-12 text-xl">
            <li>Female</li>
            <li>Male</li>
            <li>Kids</li>
            <li>All Products</li>
          </ul>
        </div>
        {/* search box */}{" "}
        <div className="">
          <input
            type="text"
            className="px-14 py-2 rounded-lg  "
            placeholder="What you looking for"
          />
        </div>
        {/* cart */}
        <div className="text-xl">cart</div>
        {/* main div end*/}
      </div>
    </nav>
  );
};
export default Header;
