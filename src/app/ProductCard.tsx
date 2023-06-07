"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "@/lib/client";
import { Image as IImage } from "sanity";

const inter = Inter({ subsets: ["latin"] });
import imageUrlBuilder from "@sanity/image-url";
import { urlForImage } from "../../sanity/lib/image";
const builder = imageUrlBuilder(client);
import { FC } from "react";

const ProductCard: any = async ({ item }: { item: any }) => {
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
    <div className="min-h-[250px]   ">
      <div>
        <Image
          src={urlForImage(item.image).url()}
          alt="product image"
          width={200}
          height={500}
          className="object-cover object-top "
        />
      </div>
      <div className="mt-1 font-semibold text-xl max-w-xs text-black ">
        {item.product}
      </div>
      <div className="mt-1 text-lg text-gray-500 ">{item.gender?.gender}</div>

      <div className="text-lg font-medium mt-2  text-black">${item.price}</div>
      {/* <div
        onClick={() => HandleAddToCart()}
        className="border rounded px-3 py-2 bg-blue-600 text-white cursor-pointer"
      >
        Add to Cart
      </div> */}
    </div>
  );
};
export default ProductCard;
