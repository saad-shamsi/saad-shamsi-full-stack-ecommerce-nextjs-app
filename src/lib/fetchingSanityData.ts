import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import { client } from "@/lib/client";
const builder = imageUrlBuilder(client);
import imageUrlBuilder from "@sanity/image-url";
export interface IProduct {
  product: string;
  description: string;
  image: IImage;
  price: number;
  _id: string;
  alt: string;
  gender: { gender: string };
}
export const getCardData = async () => {
  const res = await fetch("http://localhost:3000/api/cart");
  const data = await res.json();
  return data;
};

function urlFor(source: any) {
  return builder.image(source);
}
export async function getProductsData() {
  const res = client.fetch(`*[_type=="product"]{
      price,
        _id,
        product,
        image,
        alt,
        category -> {
          category
    },
    gender -> {
      gender
    }
     
    }`);
  return res;
}
