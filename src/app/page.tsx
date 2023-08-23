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

export default async function Home() {
  const data = await getProductsData();

  return (
    <>
      <Hero />
      <Promotion />
      <StripeCheckout />
      <div className=" grid lg:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(1,auto)] gap-x-10 gap-y-14 justify-center  ">
        {data.map((item: IProduct) => {
          return (
            <div key={item._id} className=" ">
              <Link href={`/product/${data._id}`}>
                <ProductCard item={item} />
              </Link>
            </div>
          );
        })}
      </div>
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
