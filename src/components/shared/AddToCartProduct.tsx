"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Toast, toast } from "react-hot-toast";
import { useAppDispatch } from "@/redux/store";
import { cartAction } from "@/redux/features/cartSlice";
import { ProductRedux } from "@/interface";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

type IProps = {
  product: ProductRedux;
  qty: number;
};

async function AddToCartProduct(props: IProps) {
  const [qty, setQty] = useState(1);
  const dispatch = useAppDispatch();
  const subtract = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
    const add = () => {
      setQty(qty + 1);
    };
    const addToCart = () => {
      dispatch(cartAction.addToCart({ product: props.product, quantity: qty }));
    };
    return (
      <>
        <div className="flex gap-5 items-center  pt-7">
          <p className="font-semibold text-lg">Quantity:</p>
          <div className="flex items-center justify-center gap-5 ">
            <AiOutlinePlusCircle onClick={add} size={30} />
            <p className="font-semibold text-lg">5</p>
            <AiOutlineMinusCircle onClick={subtract} size={30} />
          </div>
        </div>
        <button
          onClick={addToCart}
          className="border flex items-center
          justify-center gap-5 rounded px-3 py-2 bg-black text-white cursor-pointer"
        >
          <FaShoppingCart color="white" size={20} />
          <p className="text-lg font-medium">Add to cart</p>
        </button>
      </>
    );
  };
}
export default AddToCartProduct;
