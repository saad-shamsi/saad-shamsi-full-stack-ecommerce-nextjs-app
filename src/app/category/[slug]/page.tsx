// import { getProductsData } from "@/app/page";
import ProudctCardDetails from "@/app/product/page";
import ProductCard from "@/components/shared/ProductCard";
import { IProduct, getProductsData } from "@/lib/fetchingSanityData";
import Link from "next/link";

export default async function SectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProductsData();
  const currentProduct = data.filter((item: any) => {
    params.slug == item.category.category;
  });

  return (
    <div className=" grid lg:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(1,auto)] gap-x-10 gap-y-14 justify-center  ">
      {data.map((item: IProduct) => {
        return (
          <Link
            href={`/product/${currentProduct}`}
            key={item._id}
            className=" "
          >
            <ProductCard item={item} />
          </Link>
        );
      })}
    </div>
  );
}
