"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Nav() {
  const [bMenu, setMenu] = useState(true)
  const [dynamicValue, setDynamicValue] = useState(1)

  console.log(bMenu);
  return (
    <div>
    <div className="mt-3 px-2 flex justify-between place-items-center">
      <Link href="/">
        <Image src="/FoodHouse Logo.svg" width={300} height={100} alt="Food House Logo"/></Link>
        <div className="hidden md:block">
          <div className="flex justify-around px-10">
          <svg width="68" height="58" viewBox="0 0 68 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.055 0.5L65.3738 2.45556L67.9999 10.082L24.2444 5.40345C22.9818 5.26845 21.7153 5.61883 20.7016 6.38348L0 22V30L16 46H56.7477L59.3738 51H14L0 36V30L16 46H56.7477L59.3738 51H14L0 36V18.5L21.055 0.5Z" fill="black"/>
            <text x="32" y="40" fill="black" fontSize="30" fontFamily="'Inter', sans-serif" fontWeight="bold" textAnchor="middle">
            {dynamicValue}</text>
            <circle cx="22" cy="54" r="4" fill="black"/><circle cx="52" cy="54" r="4" fill="black"/>
          </svg>
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
    </div>
      {bMenu===false&&<div className="flex justify-around px-10 border-t-2 shadow-md border-black rounded-md m-2 py-1">
          <Link className="text-Fcolor font-bold text-4xl" href="/menu">Menu</Link>
          <Link className="text-Fcolor font-bold text-4xl" href="/book">Book</Link>
      </div>}
    </div>
  )
}
