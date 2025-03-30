import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="p-10 px-20 bg-fcolor text-white flex flex-wrap lg:flex-nowrap justify-between">
        <div className="p-2">
            <h3>Explore</h3>
            <div className="flex flex-col font-normal font-inter">
            <Link href="">Menu</Link>
            <Link href="">Specials</Link>
            <Link href="">Drinks</Link>
            <Link href="">Start with us</Link>
            <Link href="">Desserts</Link>
            </div>
        </div>
        <div className="p-2">
            <h3>Services</h3>
            <div className="flex flex-col font-normal font-inter">
            <Link href="">Menu</Link>
            <Link href="">Specials</Link>
            <Link href="">Drinks</Link>
            <Link href="">Start with us</Link>
            <Link href="">Desserts</Link>
            </div>
        </div>
        <div className="p-2">
            <h3>Contact</h3>
            <div className="flex flex-col font-normal font-inter">
            <Link href={"mailto:yugprajapati39646@gmail.com"}>Email</Link>
            <Link href="">+91 158 624 9875</Link>
            Nadiad, Gujarat
            </div>
        </div>
        <Image className="p-3" src="/Logof.svg" width={500} height={0} alt="Food House Logo"/>
    </div>
  )
}
