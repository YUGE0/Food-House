'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function FCard(fc: {
    img:string;
    name: string;      
    detail: string;   
    serve:number; 
    price: number; 
}) {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);};
    const decrement = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));};
  return (
    <div className="bg-cardbg p-3 rounded-xlp shadow-lg border border-black/20 shadow-black/50 sm:w-[42%] md:w-[40%] lg:w-[40%] xl:w-[23%] 2xl:w-[20%]">
        <Image className="rounded-t-xl" src={`/${fc.img}`}  width={500} height={0} alt={fc.name}/>
        <h3>{fc.name}</h3>
        <p className="h-24 sm:h-32 md:h-28 lg:h-20 xl:h-28 line-clamp-4">{fc.detail}</p>
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
            <button onClick={decrement} className="bg-button text-white p-1 px-2 rounded-bl-xl text-3xl font-semibold font-work">-</button>
            <h4 className="p-1 px-2 w-10 text-2xl text-center text-fcolor">{quantity}</h4>
            <button onClick={increment} className="bg-button text-white p-1 px-2 text-3xl font-semibold font-work">+</button>
            </div>
            <button className=" bg-button text-white p-1 px-6 rounded-br-xl text-3xl font-semibold font-work">Add</button>
        </div>
    </div>
  )
}
