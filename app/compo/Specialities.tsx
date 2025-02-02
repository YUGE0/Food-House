'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SFcard from './SFcard';
import Link from 'next/link';

export default function Specialities() {
    const[currentSpeciality,setSpeciality] = useState("Appetizers");
  return (
    <div className="my-10 md:my-32 px-10"><h1 className="text-center">Enjoy Our Specialties</h1>
        <div className="flex flex-wrap xl:flex-nowrap justify-around">
            <div className="py-10 grid grid-cols-2 md:grid-cols-1 md:w-[80%] lg:w-[30%] gap-5">
                <button onClick={()=>{setSpeciality("Appetizers")}}>
                    {currentSpeciality=="Appetizers"?
                    <div className="p-1 pr-2 rounded-xlp border bg-fcolor border-bc/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/appetizer.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Appetizers</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-fcolor rounded-xl" src="/appetizer.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Appetizers</h4>
                    </div>}
                </button>
                <button onClick={()=>{setSpeciality("Food")}}>
                    {currentSpeciality=="Food"?
                    <div className="p-1 pr-2 rounded-xlp border bg-fcolor border-bc/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/food.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Food</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-fcolor rounded-xl" src="/food.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Food</h4>
                    </div>}
                </button>
                <button onClick={()=>{setSpeciality("Rice")}}>
                    {currentSpeciality=="Rice"?
                    <div className="p-1 pr-2 rounded-xlp border bg-fcolor border-bc/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/rice.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Rice</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-fcolor rounded-xl" src="/rice.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Rice</h4>
                    </div>}
                </button>
                <button onClick={()=>{setSpeciality("Desserts")}}>
                    {currentSpeciality=="Desserts"?
                    <div className="p-1 pr-2 rounded-xlp border bg-fcolor border-bc/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/desserts.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Desserts</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex flex-wrap justify-around md:justify-between gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-fcolor rounded-xl" src="/desserts.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Desserts</h4>
                    </div>}
                </button>
            </div>
            <div className="p-6">
                {currentSpeciality=="Appetizers"&&<Image className="rounded-xl md:m-6" src="/PaneerTikka.webp" width={500} height={0} alt="Paneer Tikka"/>}
                {currentSpeciality=="Food"&&<Image className="rounded-xl md:m-6" src="/AlooGobi.webp" width={500} height={0} alt="Paneer Tikka"/>}
                {currentSpeciality=="Rice"&&<Image className="rounded-xl md:m-6" src="/jeerarice.webp" width={500} height={0} alt="Paneer Tikka"/>}
                {currentSpeciality=="Desserts"&&<Image className="rounded-xl md:m-6" src="/GulabJamun.webp" width={500} height={0} alt="Paneer Tikka"/>}
            </div>
            <div className="py-10 text-white space-y-10 content-center">
                {currentSpeciality=="Appetizers"&&<SFcard iname={"Paneer Tikka"} Price={180} img={"/PaneerTikka.webp"}/>}
                {currentSpeciality=="Appetizers"&&<SFcard iname={"Hariyali Paneer"} Price={200} img={"/HariyaliPaneerTikka.webp"}/>}
                {currentSpeciality=="Food"&&<SFcard iname={"Shahi Paneer"} Price={180} img={"/ShahiPaneer.webp"}/>}
                {currentSpeciality=="Food"&&<SFcard iname={"Rajma Chawal"} Price={180} img={"/RajmaChawal.webp"}/>}
                {currentSpeciality=="Rice"&&<SFcard iname={"Veg Dum Biryani"} Price={220} img={"/vegdumbiryani.webp"}/>}
                {currentSpeciality=="Rice"&&<SFcard iname={"Vaghareli khichdi"} Price={150} img={"/vagharelikhichdi.webp"}/>}
                {currentSpeciality=="Desserts"&&<SFcard iname={"Rabdi"} Price={180} img={"/rabdi.webp"}/>}
                {currentSpeciality=="Desserts"&&<SFcard iname={"Gajar Halwa"} Price={180} img={"/GajarKaHalwa.webp"}/>}
            </div>
        </div>
        <div className="my-10 flex justify-end">
            <button className="bg-black text-white p-2 px-6 rounded-xl text-3xl font-semibold font-work"><Link href={"/menu"}>Explore</Link></button>
            <button className="bg-black text-white p-2 px-6 rounded-xl text-3xl font-semibold font-work"><Link href={"/menu"}>Explore</Link></button>
        </div>
    </div>
  )
}
