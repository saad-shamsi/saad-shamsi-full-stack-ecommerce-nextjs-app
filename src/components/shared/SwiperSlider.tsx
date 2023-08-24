import { getProductsData } from "@/lib/fetchingSanityData";
import SwiperSliderContainer from "./SwiperSliderContainer";

export default async function SwiperSlider() {
  const products = await getProductsData();
  return <SwiperSliderContainer products={products} />;
}
