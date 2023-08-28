"use client";
import { IProduct } from "@/lib/fetchingSanityData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

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
            <div key={item.id}>
              {item.product_title}
              {item.product_price}
              {item.product_quantity}
              <button
                className="px-3 py-2 rounded bg-slate-400 text-lg font-medium"
                onClick={() => handleDeleteProduct(item.product_title)}
              >
                Delete
              </button>
            </div>
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
  /* <Image
              src={item.image_url}
              alt="cloth image"
              width={200}
              height={200}
            ></Image> */
}
