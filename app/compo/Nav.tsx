import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className="mt-3 px-2 flex justify-between">
        <Image src="/FoodHouse Logo.svg" width={300} height={100} alt="Food House Logo"/>
        <div className="flex justify-around px-10">
        <Link className="text-Fcolor font-bold text-4xl" href="/menu">Menu</Link>
        <Link className="text-Fcolor font-bold text-4xl" href="/book">Book</Link>
        </div>
    </div>
  )
}
