import ProductCard from "@/components/shared/ProductCard";
import { IProduct, getProductsData } from "@/lib/fetchingSanityData";
import Link from "next/link";

export default async function AllProducts() {
  const data = await getProductsData();

  return (
    <div className=" grid lg:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(1,auto)] gap-x-10 gap-y-14 justify-center  ">
      {data.map((item: IProduct) => {
        return (
          <Link href={`/product/${item._id}`} key={item._id} className=" ">
            <ProductCard item={item} />
          </Link>
        );
      })}
    </div>
  );
}
