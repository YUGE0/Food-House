import React from "react"; // Assuming your card component is named `CCard`
import CCard from "../compo/CCard";
import Image from "next/image";
import Link from "next/link";

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
          <button onClick={onClose} className="text-red-500 text-xl font-bold">
            <Image className="" src="/CloseMenu.svg" width={50} height={0} alt="close"/>
          </button>
        </div>
        <div className="my-5 space-y-3 2xl:space-y-0 grid 2xl:grid-cols-3 gap-2 h-72 sm:h-auto overflow-y-auto">
          {cartItems.map((item) => (
            <CCard img={item.image} key={item.id} {...item} /> // Reuse your card component here
          ))}
        </div>
        <button className="bg-black text-white p-2 px-6 rounded-xl text-3xl font-semibold font-work"><Link href={"/cart"} onClick={onClose}>Expand</Link></button>
        <div className="mt-4 rounded-xl border-2 p-2 border-fcolor flex flex-wrap justify-between items-baseline">
            <h1>Payment summary</h1>
            <h3 className="py-2">Total: ₹{totalPrice}</h3>
        </div>
        <button className="mt-4 bg-black text-white w-full p-1 px-6 md:px-4 rounded-b-xl text-3xl font-semibold font-work">Place Order</button>
      </div>
    </div>
  );
}
