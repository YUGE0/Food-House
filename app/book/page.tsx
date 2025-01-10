import React from 'react'
import Image from 'next/image'
import Tablebook from '../compo/tablebook'

export default function Page() {
  return (
    <div className="my-10 md:my-32">
      <h1 className="text-center">Reserve Your Moment, Relish Every Bite.</h1>
      <p className="text-center p-5">Make every meal a memory to treasure. Reserve your spot at Food House and savor dishes crafted with care, passion, and the finest ingredients. 
        From the first bite to the last, let us make your dining experience unforgettable.</p>
      <Tablebook/>
      <div className="p-10 flex flex-col gap-10 lg:flex-row justify-around">
        <div className="bg-black text-white lg:w-[30%] justify-items-center p-10 rounded-3xl">
          <Image src="/ingredients.svg" width={120} height={0} alt="Food House Logo"/>
          <h3 className="mt-5 p-2">Easy Reservations</h3>
          <p className="text-center">Enjoy a seamless booking experience at Food House with our easy-to-use reservation system.</p>
        </div>
        <div className="bg-black text-white lg:w-[30%] justify-items-center p-10 rounded-3xl">
          <Image src="/taste.svg" width={120} height={0} alt="Food House Logo"/>
          <h3 className="mt-5 p-2">Personalized Service</h3>
          <p className="text-center">Book your table and let us provide a tailored dining experience designed just for you.</p>
        </div>
        <div className="bg-black text-white lg:w-[30%] justify-items-center p-10 rounded-3xl">
          <Image src="/healthy.svg" width={120} height={0} alt="Food House Logo"/>
          <h3 className="mt-5 p-2">Flexible Timing</h3>
          <p className="text-center">Choose the date and time that fits your schedule perfectly when booking your table at Food House.</p>
        </div>
      </div>
    </div>
  )
}
