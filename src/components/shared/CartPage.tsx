"use client";
import { IProduct } from "@/lib/fetchingSanityData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
const CartPage = () => {
  const [product, setProduct] = useState<any[]>([]); // Initialize as an empty array
  const [cartDeleteState, setCardDeleteState] = useState<boolean>(true);
  const { isSignedIn } = useAuth();
  const { userId } = useAuth();

  useEffect(() => {
    // Check if the user is signed in before making the API request
    if (isSignedIn) {
      // Assuming userId is a string
      fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [isSignedIn, userId, cartDeleteState]); // Only trigger the effect when isSignedIn or userId changes
  async function handleDeleteProduct(product_title: string) {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title,
      }),
    });
    setCardDeleteState(!cartDeleteState);
  }
  return (
    <div>
      {isSignedIn ? (
        product.length > 0 ? (
          product.map((item: any) => (
            <section
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between wrapper w-full gap-x-10 "
            >
              <div className="rounded-2xl">
                <Image
                  className="rounded-2xl w-96"
                  src={item.image_url}
                  alt="cloth image"
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div className="fex flex-col justify-between gap-y-36">
                <div className="text-2xl leading-8 tracking-wider font-medium  space-x-4">
                  {item.product_title}
                </div>
                <div className="flex items-center justify-center gap-5 ">
                  <button>
                    <AiOutlineMinusCircle size={30} />
                  </button>
                  <p className="font-semibold text-lg">5</p>
                  <button>
                    <AiOutlinePlusCircle size={30} />
                  </button>
                </div>
                <div className="text-2xl font-semibold leading-relaxed tracking-wider   text-[#212121">
                  {" "}
                  ${item.product_price}.00
                </div>
              </div>

              <div className=" flex flex-col">
                <button
                  className="px-3 py-2 rounded-xl  text-lg font-medium"
                  onClick={() => handleDeleteProduct(item.product_title)}
                >
                  <RiDeleteBack2Fill size={50} className="w-10 md:w-full" />
                </button>
                <div className="flex gap-5 items-center  pt-7"></div>
              </div>
            </section>
          ))
        ) : (
          <div>No items in the cart</div>
        )
      ) : (
        <div>Please sign in</div>
      )}
    </div>
  );
};

export default CartPage;

{
}
