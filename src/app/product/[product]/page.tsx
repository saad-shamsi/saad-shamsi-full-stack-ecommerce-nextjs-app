import { getProductsData } from "@/lib/fetchingSanityData";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { IProduct } from "../page";
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
  //   console.log(specificProduct);
  //   console.log("specific product:" + specificProduct);
  return (
    <div>
      <Image
        src={urlForImage(specificProduct.image).url()}
        alt={specificProduct.alt}
        width={380}
        height={250}
        className=" object-cover object-top  "
      />
      {specificProduct.product}
      {specificProduct.price}
      {specificProduct._id}
    </div>
  );
}
