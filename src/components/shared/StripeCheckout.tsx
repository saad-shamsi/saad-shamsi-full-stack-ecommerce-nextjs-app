"use client";
import getStipePromise from "@/lib/stripe";
const products = [
  {
    producat: 1,
    name: "Stripe Product",
    price: 400,
    quantity: 3,
  },
];
const StripeCheckout = () => {
  //   console.log(getStipePromise);
  async function handleCheckout() {
    const stripe = await getStipePromise();

    const response = await fetch("/api/stripeSession/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  }
  return (
    <button onClick={handleCheckout} className="p-3 bg-green-500 rounded">
      Checkout
    </button>
  );
};

export default StripeCheckout;
