import { getProductsData } from "@/lib/fetchingSanityData";
import Image, { StaticImageData } from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { IProduct } from "../page";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import AddToCartProduct from "@/components/shared/AddToCartProduct";
export async function generateStaticParams() {
  const data = await getProductsData();
  return data.map((item: IProduct) => {
    product: item._id;
  });
}
export default async function currentProductDetailedPage({
  params,
}: {
  params: { product: string };
}) {
  const data = await getProductsData();
  //   console.log("params" + params.product);
  const specificProduct = data.find((item: any) => {
    return params.product == item._id;
  });
  // console.log(specificProduct);
  //   console.log("specific product:" + specificProduct);
  return (
    <section className="wrapper text-[#212121] flex flex-col md:flex-row  pt-10 items-start justify-center gap-16 md:gap-5">
      <div className="flex-1 ">
        <Image
          src={urlForImage(specificProduct.image).url()}
          alt={specificProduct.alt}
          width={600}
          height={900}
          className=" object-cover object-top  "
        />
      </div>
      <div className="flex-1 xl:pt-32 pt-5">
        <h2 className="text-3xl leading-8 tracking-wider font-medium  space-x-4">
          {specificProduct.product}
        </h2>
        <div className="mt-1 font-semibold text-xl text-gray-400">
          {specificProduct.category.category}
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
            <AiOutlinePlusCircle size={30} />
            <p className="font-semibold text-lg">5</p>
            <AiOutlineMinusCircle size={30} />
          </div>
          {/* icons + - and quantity */}
        </div>
        <div className="flex  items-center gap-5 pt-7">
          <div
            className="border flex items-center
          justify-center gap-5 rounded px-3 py-2 bg-black text-white cursor-pointer"
          >
            <FaShoppingCart color="white" size={20} />
            <p className="text-lg font-medium">Add to cart</p>
          </div>
          <h5 className="text-3xl font-bold leading-relaxed tracking-wider   text-[#212121]">
            ${specificProduct.price}.00
          </h5>
        </div>
        <AddToCartProduct product={specificProduct} qty={1} />
      </div>
    </section>
  );
}
