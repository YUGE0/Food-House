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
