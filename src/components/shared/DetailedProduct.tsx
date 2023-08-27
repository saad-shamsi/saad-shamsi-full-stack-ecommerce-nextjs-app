"use client";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import AddToCartProduct from "@/components/shared/AddToCartProduct";
import Image, { StaticImageData } from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

import { IProduct } from "@/lib/fetchingSanityData";
const DetailedProduct = ({ filteredData }: { filteredData: IProduct }) => {
  const [quantity, setQuantity] = useState<number>(5);
  function handleSubtractQuantity() {
    setQuantity(quantity - 1);
  }
  function handleAddQuantity() {
    setQuantity(quantity + 1);
  }
  async function handleAddToCart() {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: "new id hy meri",
          product_id: filteredData._id,
          product_title: filteredData.product,
          image_url: urlForImage(filteredData.image).url(),
          product_price: filteredData.price * quantity,
          product_quantity: quantity,
        }),
      });
      return response;
    } catch (error: any) {
      return error.json({ message: error.message });
    }
  }
  console.log(handleAddToCart);
  return (
    <section className="wrapper text-[#212121] flex flex-col md:flex-row  pt-10 items-start justify-center gap-16 md:gap-5">
      <div className="flex-1 ">
        <Image
          src={urlForImage(filteredData.image).url()}
          alt={filteredData.alt}
          width={600}
          height={900}
          className=" object-cover object-top  "
        />
      </div>
      <div className="flex-1 xl:pt-32 pt-5">
        <h2 className="text-3xl leading-8 tracking-wider font-medium  space-x-4">
          {filteredData.product}
        </h2>
        <div className="mt-1 font-semibold text-xl text-gray-400">
          {filteredData.category.category}
        </div>

        <p className="pt-7 font-semibold text-lg">SELECT SIZE</p>
        <div className="pt-2 ">
          <ul className="size flex ">
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>
        <div className="flex gap-5 items-center  pt-7">
          <p className="font-semibold text-lg">Quantity:</p>
          <div className="flex items-center justify-center gap-5 ">
            <button onClick={handleSubtractQuantity} disabled={quantity === 1}>
              <AiOutlineMinusCircle size={30} />
            </button>
            <p className="font-semibold text-lg">{quantity}</p>
            <button>
              <AiOutlinePlusCircle size={30} onClick={handleAddQuantity} />
            </button>
          </div>
          {/* icons + - and quantity */}
        </div>
        <div className="flex  items-center gap-5 pt-7">
          <div
            className="border flex items-center
          justify-center gap-5 rounded px-3 py-2 bg-black text-white cursor-pointer"
          >
            <FaShoppingCart color="white" size={20} />
            <button className="text-lg font-medium" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
          <h5 className="text-3xl font-bold leading-relaxed tracking-wider   text-[#212121]">
            ${filteredData.price}.00
          </h5>
        </div>
      </div>
    </section>
  );
};

export default DetailedProduct;
