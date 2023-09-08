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
import { getProductsData } from "@/lib/fetchingSanityData";
import SignInBtn from "../shared/SignInBtn";
const Btns = [
  { value: "Female", route: "female" },
  { value: "Male", route: "male" },
  { value: "Kids", route: "kids" },
  { value: "All Products", route: "all" },
];
const Header = async () => {
  const [openMenu, setOpenMenu] = useState(false);

  const data = await getProductsData();
  function handleMenuButton() {
    setOpenMenu((event) => !event);
  }
  // console.log(data);
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
            <Link href={`/category/`}>
              <li>Female</li>
            </Link>
            <Link href={`/category/`}>
              <li>Male</li>
            </Link>
            <Link href={`/category/`}>
              <li>Kids</li>
            </Link>
            <Link href="/products">
              <li>All Products</li>
            </Link>
          </ul>
        </div>
        <SignInBtn />
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
      <div className="flex  justify-between items-center lg:hidden bg-slate-400 p-4">
        <Link href="/">
          <Image src={Logo} alt="dyne logo" />
        </Link>

        <div
          onClick={handleMenuButton}
          className="cursor-pointer  hover:transition-all ease-in duration-300"
        >
          {openMenu ? <AiOutlineClose /> : <TfiMenuAlt className="" />}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-blue-400 ${
          openMenu ? "block" : "hidden"
        } md:hidden z-20 wrapper`}
      >
        <div className="flex flex-col h-screen w-64 top-0 justify-center items-center">
          <ul className="flex flex-col gap-y-7">
            <Link href="/category/female" onClick={() => setOpenMenu(false)}>
              <li>Female</li>
            </Link>
            <Link href="/category/male" onClick={() => setOpenMenu(false)}>
              <li>Male</li>
            </Link>
            <Link href="/category/kids" onClick={() => setOpenMenu(false)}>
              <li>Kids</li>
            </Link>
            <Link href="/products" onClick={() => setOpenMenu(false)}>
              <li>All Products</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
