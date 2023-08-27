"use client";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import ProductSlideCard from "./ProductSlideCard";
import { urlForImage } from "../../../sanity/lib/image";
import { IProduct } from "@/lib/fetchingSanityData";
import Link from "next/link";
import Image from "next/image";

export default function SwiperSliderContainer({
  products,
}: {
  products: IProduct[];
}) {
  const HandleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        // product_id:  ,
      }),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <Swiper
      breakpoints={{
        // width >= 300
        300: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
        // width >= 1000
        1000: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        // width >= 1260
        1260: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
    >
      <div>
        {products.map((item: IProduct, index) => (
          <SwiperSlide
            key={index}
            className="min-h-[250px] cursor-pointer wrapper"
          >
            {/* <ProductSlideCard imageUrl={urlForImage(image).url()} _id={_id} /> */}
            <Link href={`/product/${item._id}`}>
              <div className="product-card">
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.alt}
                  loading="lazy"
                  width={380}
                  height={400}
                  className="product-image"
                />
              </div>
            </Link>
            <div className="mt-1 font-semibold text-xl max-w-xs text-black ">
              {item.product}
            </div>
            <div className="mt-1 text-lg text-gray-500 ">
              {item.gender?.gender}
            </div>

            <div className="text-lg font-medium mt-2  text-black">
              ${item.price}
            </div>
            {/* <div
              onClick={() => HandleAddToCart()}
              className="border rounded px-2 py-2 bg-blue-600 text-white cursor-pointer"
            >
              Add to Cart
            </div> */}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
