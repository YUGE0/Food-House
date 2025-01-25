"use client";
import React from "react"; // Assuming your card component is named `CCard`
import CCard from "../compo/CCard";

interface Dish {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartPopupProps {
  cartItems: Dish[]; // Flat list of all items in the cart
  onClose: () => void; // Function to close the popup
}

export default function CartPopup({ cartItems, onClose }: CartPopupProps) {
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[80%]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="">Cart</h3>
          <button onClick={onClose} className="text-red-500 text-xl font-bold">✕</button>
        </div>
        <div className="space-y-3 2xl:space-y-0 grid 2xl:grid-cols-2 gap-2">
          {cartItems.map((item) => (
            <CCard img={item.image} detail={""} serve={0} key={item.id} {...item} /> // Reuse your card component here
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="">Total: ₹{totalPrice}</h3>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
