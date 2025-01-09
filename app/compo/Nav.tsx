"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Nav() {
  const [bMenu, setMenu] = useState(true)
  const [dynamicValue, setDynamicValue] = useState(1)
  setDynamicValue(1);
  console.log(bMenu);
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
          {bMenu===true?<Image className="" src="/FMenu.svg" width={50} height={0} alt="Food House Logo"/>:
          <Image className="" src="/CloseMenu.svg" width={50} height={0} alt="Food House Logo"/>}
          </button>
        </div>
        <svg width="55" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.055 0.5L64.3738 2.76692L66.9999 11.6077L23.6132 6.22988C22.1349 6.04665 20.652 6.53205 19.5682 7.55387L0 26.0028L7 30.3247L9 24.8947L16.5 44.6622L58.7477 42.9742L64.3738 48.7703H14L7 30.3247L9 24.8947L16.5 44.6622L58.7477 42.9742L64.3738 48.7703H14L7 30.3247L0 26.0028V21.3659L20.055 0.5Z" fill="black"/>
          <text x="34" y="40" fill="black" fontSize="40" fontFamily="'Inter', sans-serif" fontWeight="bold" textAnchor="middle">
          {dynamicValue}</text>
          <circle cx="21" cy="52.2837" r="3" stroke="black" strokeWidth="2"/>
          <circle cx="51" cy="52.2837" r="3" stroke="black" strokeWidth="2"/>
        </svg>
    </div>
      {bMenu===false&&<div className="flex justify-around px-10 border-t-2 shadow-md border-black rounded-md m-2 py-1">
          <Link className="text-Fcolor font-bold text-4xl" href="/menu">Menu</Link>
          <Link className="text-Fcolor font-bold text-4xl" href="/book">Book</Link>
      </div>}
    </div>
  )
}
