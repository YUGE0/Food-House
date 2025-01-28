"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CartPopup from './CartPopup'
import { supabase } from '@/supabase/client'

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Nav() {
  const [bMenu, setMenu] = useState(true)
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  const toggleCart = () => setCartOpen((prev) => !prev);
  
  useEffect(() => {
    const fetchCartItems = async () => {
      const tNumber = parseInt(localStorage.getItem("table") || "0", 10);
      try {
        const { data: items, error } = await supabase
          .from("cart")
          .select()
          .eq("tableNo", {tNumber});
          
          setTotalQuantity((items || []).length);
        if (error) {
          console.error("Error fetching cart items:", error.message);
          return;
        }

        if (items) {
          setCartItems(items as Item[]);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  //const [dynamicValue, setDynamicValue] = useState(1)

  //console.log(bMenu);
  return (
    <div>
    <div className="border-none mt-3 px-2 flex justify-between place-items-center">
      <Link href="/"><Image src="/FoodHouse Logo.svg" width={300} height={100} alt="Food House Logo"/></Link>
        <div className="hidden md:block w-full">
          <div className="flex justify-end gap-10 px-10">
          <Link className="text-Fcolor font-bold text-4xl" href="/menu">Menu</Link>
          <Link className="text-Fcolor font-bold text-4xl" href="/book">Book</Link>
          </div>
        </div>
        <div className="md:hidden">
          <button className="p-2" onClick={()=>setMenu((prev)=>!prev)}>
          {bMenu===true?<Image className="" src="/FMenu.svg" width={50} height={0} alt="Menu"/>:
          <Image className="" src="/CloseMenu.svg" width={50} height={0} alt="close"/>}
          </button>
        </div>
        <div onClick={toggleCart} className="">
        <svg width="55" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.055 0.5L64.3738 2.76692L66.9999 11.6077L23.6132 6.22988C22.1349 6.04665 20.652 6.53205 19.5682 7.55387L0 26.0028L7 30.3247L9 24.8947L16.5 44.6622L58.7477 42.9742L64.3738 48.7703H14L7 30.3247L9 24.8947L16.5 44.6622L58.7477 42.9742L64.3738 48.7703H14L7 30.3247L0 26.0028V21.3659L20.055 0.5Z" fill="black"/>
          <text x="34" y="40" fill="black" fontSize="40" fontFamily="'Inter', sans-serif" fontWeight="bold" textAnchor="middle">
          {totalQuantity || 0}</text>
          <circle cx="21" cy="52.2837" r="3" stroke="black" strokeWidth="2"/>
          <circle cx="51" cy="52.2837" r="3" stroke="black" strokeWidth="2"/>
        </svg></div>
    </div>
      {bMenu===false&&<div className="grid grid-cols-2 gap-1 p-1 border-t-2 shadow-md border-black rounded-md mx-10">
          <Link className="text-Fcolor font-bold text-4xl w-full text-center" href="/menu">Menu</Link>
          <Link className="text-Fcolor font-bold text-4xl w-full text-center" href="/book">Book</Link>
      </div>}
      {isCartOpen&& !loading && <CartPopup onClose={toggleCart} cartItems={cartItems} />}
    </div>
  )
}
