import Image from "next/image";

import { Inter } from "next/font/google";
import { client } from "@/lib/client";
const inter = Inter({ subsets: ["latin"] });
import imageUrlBuilder from "@sanity/image-url";
import { getProductsData } from "@/lib/fetchingSanityData";
import ProductCard from "../components/shared/ProductCard";
import Hero from "@/components/widgets/Hero";
import Promotion from "@/components/widgets/Promotion";
import Feature from "@/components/widgets/Feature";
import NewsLetter from "@/components/widgets/NewsLetter";
import StripeCheckout from "@/components/shared/StripeCheckout";
import { IProduct } from "./product/page";
import Link from "next/link";
import SwiperSlider from "@/components/shared/SwiperSlider";

export default async function Home() {
  const data = await getProductsData();

  return (
    <>
      <Hero />
      <Promotion />
      <StripeCheckout />

      <SwiperSlider />
      <Feature />
      <NewsLetter />
    </>
  );
}

{
  /* {item.image.map((img: any) => (
                <div key={img._id}><img src={urlFor().width(200).url()} /></div>
              ))} */
}
