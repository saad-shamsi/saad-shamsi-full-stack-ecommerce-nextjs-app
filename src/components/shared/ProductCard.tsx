"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "@/lib/client";
import { Image as IImage } from "sanity";
const inter = Inter({ subsets: ["latin"] });
import imageUrlBuilder from "@sanity/image-url";
import { urlForImage } from "../../../sanity/lib/image";
const builder = imageUrlBuilder(client);
import { FC } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { IProduct } from "@/lib/fetchingSanityData";
const ProductCard: any = async ({ item }: { item: any }) => {
  return (
    <div className="min-h-[250px]  hover:scale-110 hover:translate-y-3 duration-300 cursor-pointer ">
      {/* <Swiper
        spaceBetween={0}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {/* <Image
              src={urlForImage(item.image).url()}
              alt={item.alt}
              width={380}
              height={250}
              className=" object-cover object-top  "
            /> */}
      <Image
        src={urlForImage(item.image).url()}
        alt={item.alt}
        width={380}
        height={250}
        className=" object-cover object-top  "
      />

      <div className="mt-1 font-semibold text-xl max-w-xs text-black ">
        {item.product}
      </div>
      <div className="mt-1 text-lg text-gray-500 ">{item.gender?.gender}</div>

      <div className="text-lg font-medium mt-2  text-black">${item.price}</div>

      {/* </SwiperSlide> */}
      {/* </Swiper> */}
    </div>
  );
};
export default ProductCard;
export async function AddToCart({ item }: { item: IProduct }) {
  const HandleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      }),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div
      onClick={() => HandleAddToCart()}
      className="border rounded px-3 py-2 bg-blue-600 text-white cursor-pointer"
    >
      Add to Cart
    </div>
  );
}
