"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Nav() {
  const [bMenu, setMenu] = useState(true);
  console.log(bMenu);
  return (
    <div>
    <div className="mt-3 px-2 flex justify-between place-items-center">
      <Link href="/">
        <Image src="/FoodHouse Logo.svg" width={300} height={100} alt="Food House Logo"/></Link>
        <div className="hidden md:block">
          <div className="flex justify-around px-10">
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
