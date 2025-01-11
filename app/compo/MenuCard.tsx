'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function MCard(fc: {
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
    <div className="p-3 rounded-xlp shadow-lg border border-black/20 shadow-black/50 sm:w-[42%] md:w-fit lg:w-[40%] xl:w-fit">
        <div className="flex flex-col lg:flex-row">
                <Image className="rounded-tl-xl w-full lg:w-[55%]" src={`/${fc.img}`}  width={500} height={0} alt={fc.name}/>
            <div className="lg:pl-2">
                <h3 className="h-22 lg:h-20 xl:h-28">{fc.name}</h3>
                <p className="h-22 lg:h-20 xl:h-36">{fc.detail}</p>
            </div>
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
            <button onClick={decrement} className=" bg-black text-white p-1 px-2 rounded-bl-xl text-3xl font-semibold font-work">-</button>
            <h4 className="p-1 px-2 w-8 text-2xl">{quantity}</h4>
            <button onClick={increment} className=" bg-black text-white p-1 px-2 text-3xl font-semibold font-work">+</button>
            </div>
            <button className=" bg-black text-white p-1 px-6 rounded-br-xl text-3xl font-semibold font-work">Add</button>
        </div>
    </div>
  )
}
