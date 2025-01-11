'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CCard(fc: {
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
    <div className="p-2 flex rounded-xlp border border-black/20 shadow-md shadow-black/20 sm:w-[42%] md:w-[40%] lg:w-[40%] xl:w-[23%] 2xl:w-[98%]">
        <button className="p-1 justify-self-end"><Image src={"/CloseMenu.svg"}  width={50} height={0} alt={fc.name}/></button>
        <Image className="rounded-md w-[32%] h-full" src={`/${fc.img}`}  width={300} height={0} alt={fc.name}/>
        <div className=" flex flex-col justify-between ml-2">
        <h3 className='w-full h-16'>{fc.name}</h3>
        <div className="mt-2 w-full flex items-end">
            <div className="flex">
            <button onClick={decrement} className=" bg-black text-white p-1 px-2 rounded-lg text-2xl font-bold font-work">-</button>
            <h4 className="p-1 px-2 w-full text-2xl">{quantity}</h4>
            <button onClick={increment} className=" bg-black text-white p-1 px-2 rounded-lg text-2xl font-bold font-work">+</button>
            </div>
            <h3 className="pl-3 font-semibold">{fc.price}₹</h3>
        </div>
        </div>
    </div>
  )
}
