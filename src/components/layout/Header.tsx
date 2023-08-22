"use client";
import React from "react";
import Logo from "../../../public/logo.webp";
// import { GoSearch } from "react-icons/go";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <nav className="wrapper  items-center ">
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
        <div className="flex items-center px-3 border-none  bg-white rounded-lg">
          <BiSearch />
          <input
            type="text"
            className="w-96 py-0.5 rounded  px-2 mx-3    "
            placeholder="What you looking for"
          />
        </div>
        {/* cart */}
        <div className="text-xl">
          <AiOutlineShoppingCart size={24} />
        </div>
        {/* main div end*/}
      </div>
    </nav>
  );
};
export default Header;
