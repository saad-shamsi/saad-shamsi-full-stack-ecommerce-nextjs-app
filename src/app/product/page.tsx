"use client";
import Image from "next/image";

import { Inter } from "next/font/google";
import { client } from "@/lib/client";
const inter = Inter({ subsets: ["latin"] });
import imageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import ProductCard from "@/components/shared/ProductCard";

import StripeCheckout from "@/components/shared/StripeCheckout";
import Link from "next/link";
const builder = imageUrlBuilder(client);

export interface IProduct {
  title: string;
  description: string;
  image: IImage;
  price: number;
  _id: string;
}
export const getCardData = async () => {
  const res = await fetch("http://localhost:3000/api/cart");
  const data = await res.json();
  return data;
};

function urlFor(source: any) {
  return builder.image(source);
}
export async function getProductsData() {
  const res = client.fetch(`*[_type=="product"]{
    price,
      _id,
      product,
      image,
      alt,
      category ->{
        category
  },
  gender ->{
    gender
  }
   
  }`);
  return res;
}

export default async function ProudctCardDetails() {
  const data: IProduct[] = await getProductsData();

  return (
    <>
      <StripeCheckout />
      <Link
        href="/products"
        className=" grid lg:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(1,auto)] gap-x-10 gap-y-14 justify-center  "
      >
        {data.map((item) => {
          return (
            <div key={item._id} className=" ">
              <ProductCard item={item} />
            </div>
          );
        })}
      </Link>
    </>
  );
}
