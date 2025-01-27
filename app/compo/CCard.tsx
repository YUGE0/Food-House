'use client'
import { supabase } from '@/supabase/client';
import Image from 'next/image'
import React, { useState } from 'react'

export default function CCard(fc: {
    img:string;
    name: string;       
    quantity: number;
    price: number; 
}) {
    const [quantity, setQuantity] = useState(fc.quantity);

    const updateQuantityInDB = async (newQuantity: number) => {
      const { data, error } = await supabase
          .from('cart')
          .update({ quantity: newQuantity }) 
          .eq('name', fc.name)
          if(!data){console.log("empty")}
      
      if (error) {
          console.error('Error updating quantity:', error.message);
      } else {
          console.log('Quantity updated successfully');
      }
  }

  const increment = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    updateQuantityInDB(newQuantity)
  }

  const decrement = () => {
    const newQuantity = Math.max(0, quantity - 1)
    setQuantity(newQuantity)
    updateQuantityInDB(newQuantity)
  }

  return (
    <div className="p-2 bg-black text-white flex rounded-xlp border border-black/20 shadow-md shadow-black/80 w-full 2xl:w-[90%]">
        <button className="p-1 justify-self-end"><Image src={"/CloseMenuWhite.svg"}  width={80} height={0} alt={fc.name}/></button>
        <Image className="rounded-xl w-[40%]" src={`/${fc.img}`}  width={300} height={0} alt={fc.name}/>
        <div className="w-full flex flex-col justify-between ml-2">
        <h3 className='h-16'>{fc.name}</h3>
        <div className="mt-6 w-full flex justify-between items-end">
            <h3 className="font-semibold pr-3">{fc.price}₹</h3>
            <div className="flex w-fit">
            <button onClick={decrement} className=" bg-white text-black p-1 px-2 rounded-full text-2xl font-bold font-work">-</button>
            <h4 className="p-1 px-2 w-full text-center text-2xl">{quantity}</h4>
            <button onClick={increment} className=" bg-white text-black p-1 px-2 rounded-full text-2xl font-bold font-work">+</button>
            </div>
        </div>
        </div>
    </div>
  )
}
