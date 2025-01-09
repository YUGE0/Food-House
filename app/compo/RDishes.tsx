import React from 'react'
import FCard from './FCard'
import dishes from '../ApiDemo/Dish'
import Link from 'next/link'

export default function RDishes() {
  return (
    <div className="my-20 md:my-32  px-12"><h1 className="text-center mb-5">Regular Dishes</h1>
    <div className="flex flex-wrap gap-10 justify-around">
        {dishes.slice(0,4).map((di) => (<FCard key={`${di.id}`} {...di}/>))}
    </div>
    <div className="my-10 flex justify-end">
      <button className=" bg-black text-white p-2 px-6 rounded-xl text-3xl font-semibold font-work"><Link href={"/menu"}>Explore</Link></button>
    </div>
    </div>
  )
}
