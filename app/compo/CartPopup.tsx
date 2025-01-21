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
      <div className="bg-white p-6 rounded-xl shadow-lg w-4/5 md:w-1/2 lg:w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <button onClick={onClose} className="text-red-500 text-xl font-bold">✕</button>
        </div>
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <CCard img={""} detail={""} serve={0} key={item.id} {...item} /> // Reuse your card component here
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total: ₹{totalPrice}</h3>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
