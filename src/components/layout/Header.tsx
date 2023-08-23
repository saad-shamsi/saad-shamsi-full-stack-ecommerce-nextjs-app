"use client";
import React from "react";
import Logo from "../../../public/logo.webp";
// import { GoSearch } from "react-icons/go";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="wrapper  items-center ">
      {/* main div */}
      <div className="flex justify-between p-8">
        {/* logo */}
        <div>
          <Link href="/">
            <Image src={Logo} alt="dyne logo" />{" "}
          </Link>
        </div>
        {/* list items list div */}
        <div>
          <ul className="flex gap-x-12 text-xl">
            <Link href="category/female">
              <li>Female</li>
            </Link>
            <Link href="category/male">
              <li>Male</li>
            </Link>
            <Link href="category/kids">
              <li>Kids</li>
            </Link>
            <Link href="/products">
              <li>All Products</li>
            </Link>
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
