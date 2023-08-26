import { StaticImageData } from "next/image";

export interface ProductRedux {
  _id: string;
  name: string;
  price: number;
  totalPrice: number;
  subcat: string;
  image: StaticImageData;
  quantity: number;
}
