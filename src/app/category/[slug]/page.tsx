// import { getProductsData } from "@/app/page";
import ProudctCardDetails from "@/app/product/page";
import { getProductsData } from "@/lib/fetchingSanityData";

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
    <div>
      <h1>My category:{currentProduct.name}</h1>
    </div>
  );
}
