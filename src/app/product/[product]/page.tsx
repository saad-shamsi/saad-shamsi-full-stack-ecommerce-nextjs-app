import { getProductsData } from "@/lib/fetchingSanityData";

import { IProduct } from "../page";
import DetailedProduct from "@/components/shared/DetailedProduct";

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

  return <DetailedProduct filteredData={specificProduct} />;
}

{
  /* <AddToCartProduct product={specificProduct} qty={1} /> */
}
