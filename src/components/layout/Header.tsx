"use client";
import React from "react";
import Logo from "../../../public/logo.webp";
// import { GoSearch } from "react-icons/go";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenuButton() {
    setOpenMenu((event) => !event);
  }
  return (
    <nav className="wrapper  items-center ">
      {/* main div */}
      <div className="lg:flex hidden justify-between p-8 ">
        {/* logo */}
        <div>
          <Link href="/">
            <Image src={Logo} alt="dyne logo" />{" "}
          </Link>
        </div>
        {/* list items list div */}
        <div>
          <ul className="flex flex-row md:flex md:items-center xs:hidden  gap-x-12 text-xl">
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
            className="max-w-96 py-0.5 rounded  px-2 mx-3    "
            placeholder="What you looking for"
          />
        </div>
        {/* cart */}
        <div className="text-xl">
          <AiOutlineShoppingCart size={24} />
        </div>
        {/* main div end*/}
      </div>

      {/* MObile menu */}
      <div className="flex wrapper justify-between items-center bg-slate-400 p-4">
        <Link href="/">
          <Image src={Logo} alt="dyne logo" />
        </Link>

        <div onClick={handleMenuButton}>
          {openMenu ? <AiOutlineClose /> : <TfiMenuAlt className="" />}
        </div>
      </div>

      {/* Conditional rendering of the mobile menu */}
      {openMenu && (
        <div className="fixed inset-0 bg-blue-400 md:hidden z-20 wrapper">
          <ul className="flex flex-col gap-y-7 h-screen w-full top-18 justify-center items-center">
            <Link href="category/female" onClick={() => setOpenMenu(false)}>
              <li>Female</li>
            </Link>
            <Link href="category/male" onClick={() => setOpenMenu(false)}>
              <li>Male</li>
            </Link>
            <Link href="category/kids" onClick={() => setOpenMenu(false)}>
              <li>Kids</li>
            </Link>
            <Link href="/products" onClick={() => setOpenMenu(false)}>
              <li>All Products</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Header;
