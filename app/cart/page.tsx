"use client"
import React, { Key, useEffect, useState } from 'react'
import CCard from '../compo/CCard';
import Image from 'next/image';
import { supabase } from '@/supabase/client';
import { notFound } from 'next/navigation';

interface CartItem {
  id: Key | null | undefined;
  img: string;
  name: string;
  quantity: number;
  price: number;
}

export default function Page() {

  const [items, setItems] = useState<CartItem[]>([]); // Cart items
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data, error } = await supabase
          .from("cart")
          .select()
          .eq("tableNo", 1);

        if (error) {
          console.error("Error fetching items:", error);
          return;
        }

        if (!data || data.length === 0) {
          notFound(); // Redirect to 404 page if no items are found
          return;
        }

        setItems(data); // Set fetched cart items
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchCartItems();
  }, []);

  // Display loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const bdate = new Date()
  const formattedDate = `${bdate.toDateString()} ${bdate.toLocaleTimeString()}`;
  return (
    <div className="p-4 m-5 md:mx-44 rounded-3xl border border-black/20 shadow-sm shadow-black/50">
      <div className="flex justify-around my-2">
          <Image src="/FoodHouse Logo.svg" width={300} height={100} alt="Food House Logo"/>
      </div>
      <h1 className="text-5xl rounded-2xl rounded-b-none bg-fcolor text-white border-2 border-b-0 text-center my-2 uppercase p-2">Your Order</h1>
      <div className="flex px-5 justify-between"><h3>Name</h3><h3>{formattedDate}</h3></div>
      <div className="my-5 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((dish) => (<CCard key={dish.id} {...dish} />))}
      </div>
      <button className="bg-black text-white mt-10 p-2 w-full rounded-b-2xl shadow-md shadow-fcolor/60"><h1>Place Order</h1></button>
    </div>
  );
}

//{items.slice(0,2).map((dish) => (<CCard key={dish.id} {...dish} />))}