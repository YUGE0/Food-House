"use client"
import React from 'react'
import menu,{Dish} from '../ApiDemo/MenuD';
import CCard from '../compo/CCard';
import Image from 'next/image';

export default function Page() {
  const bdate = new Date()
  const formattedDate = `${bdate.toDateString()} ${bdate.toLocaleTimeString()}`;
  return (
    <div className="p-4 m-5 md:mx-44 rounded-3xl border border-black/20 shadow-sm shadow-black/50">
      <div className="flex justify-around my-2">
          <Image src="/FoodHouse Logo.svg" width={300} height={100} alt="Food House Logo"/>
      </div>
      <h1 className="text-5xl rounded-sm border-black/80 border-x-2 text-center my-2 uppercase">Your Order</h1>
      <div className="flex justify-between"><h3>Name</h3><h3>{formattedDate}</h3></div>
      {menu.map((category) => (<CategorySection key={category.category} category={category.category} dishes={category.dishes}/>))}
      <button className="bg-black text-white p-2 w-full rounded-2xl shadow-md shadow-fcolor/60"><h1>Place Order</h1></button>
    </div>
  );
}

function CategorySection({ category, dishes }: { category: string; dishes: Dish[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl p-1 font-open font-semibold my-3 rounded-sm text-fcolor border-fcolor border-b-2">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.slice(0,2).map((dish) => (<CCard key={dish.id} {...dish} />))}
      </div>
    </div>
  );
}