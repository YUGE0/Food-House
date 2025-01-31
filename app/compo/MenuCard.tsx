'use client'
import { supabase } from '@/supabase/client';
import Image from 'next/image'
import React, { useState } from 'react'

export default function MCard(fc: {
    img:string;
    name: string;      
    detail: string;   
    serve:number; 
    price: number; 
    tableNo: string;
}) {
    const [quantity, setQuantity] = useState(0);
    const{img,name,detail,serve,price,tableNo}=fc;
    console.log({fc});
    
    const AddToCart = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        try {
            const { data, error } = await supabase
                .from("cart")
                .insert([{img,name,detail,serve,price,quantity,tableNo}]);
            if (error) {
                console.error("Supabase Error:", error); // More explicit logging
                alert("Error adding to cart: " + error.message);
                return;
            }
            alert("Added to cart successful!");
            console.log(data)
        } catch (e) {
            console.error("Error adding in cart:",e);
            alert("Error in cart. Please try again."); 
        }
    };

    const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);};
    const decrement = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));};
  return (
    <div className="p-3 rounded-xlp shadow-lg border border-black/20 shadow-black/50 sm:w-[90%] md:w-fit xl:w-fit">
        <div className="flex flex-col xl:flex-row">
                <Image className="rounded-t-lg xl:rounded-tr-none xl:rounded-l-lg w-full xl:w-[40%] 2xl:w-[50%]" src={`/${fc.img}`}  width={500} height={0} alt={fc.name}/>
            <div className="xl:ml-2">
            <div className="">
                <h3 className="h-22 sm:h-16 lg:h-20 xl:my-2 xl:h-16">{fc.name}</h3>
                <p className="h-22 sm:h-24 xl:my-2 xl:h-16 2xl:h-24">{fc.detail}</p>
            </div>
               <div className="flex justify-between">
                <div className="flex justify-items-center">
                    <h4 className="text-2xl">Serves:</h4>
                    {fc.serve===1?<Image className="" src="/PersonBlack.svg" width={22} height={0} alt="Person"/>:
                    <><Image className="" src="/PersonBlack.svg" width={22} height={0} alt="Person" /><Image className="" src="/PersonBlack.svg" width={22} height={0} alt="Person" /></>}
                </div>
                <h4 className="text-2xl">{fc.price}₹</h4>
                </div>
                <div className="mt-2 flex justify-between">
                    <div className="flex">
                    <button onClick={decrement} className=" bg-black text-white p-1 px-2 rounded-bl-lg xl:rounded-bl-none text-3xl font-semibold font-work">-</button>
                    <h4 className="p-1 px-2 w-8 text-2xl">{quantity}</h4>
                    <button onClick={increment} className=" bg-black text-white p-1 px-2 text-3xl font-semibold font-work">+</button>
                    </div>
                    <button onClick={AddToCart} className=" bg-black text-white p-1 px-6 md:px-4 rounded-br-xl text-3xl font-semibold font-work">Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}
