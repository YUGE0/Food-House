'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SFcard from './SFcard';

export default function Specialities() {
    const[currentSpeciality,setSpeciality] = useState("Appetizers");
    console.log(currentSpeciality)
  return (
    <div className="my-10 md:my-32 px-10"><h1 className="text-center">Enjoy Our Specialties</h1>
        <div className="flex flex-wrap xl:flex-nowrap justify-around">
            <div className="py-10 flex flex-wrap justify-between lg:flex-col md:w-[74%] lg:w-[20%] gap-5">
                <button onClick={()=>{setSpeciality("Appetizers")}}>
                    {currentSpeciality=="Appetizers"?
                    <div className="p-1 pr-2 rounded-xlp border bg-bc border-bc/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/appetizer.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Appetizers</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-blue-800 rounded-xl" src="/appetizer.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Appetizers</h4>
                    </div>}
                </button>
                <button onClick={()=>{setSpeciality("Food")}}>
                    {currentSpeciality=="Food"?
                    <div className="p-1 pr-2 rounded-xlp border bg-bc border-bc/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/food.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Food</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-blue-800 rounded-xl" src="/food.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Food</h4>
                    </div>}
                </button>
                <button onClick={()=>{setSpeciality("Rice")}}>
                    {currentSpeciality=="Rice"?
                    <div className="p-1 pr-2 rounded-xlp border bg-bc border-bc/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/rice.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Rice</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-blue-800 rounded-xl" src="/rice.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Rice</h4>
                    </div>}
                </button>
                <button onClick={()=>{setSpeciality("Desserts")}}>
                    {currentSpeciality=="Desserts"?
                    <div className="p-1 pr-2 rounded-xlp border bg-bc border-bc/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 rounded-xl" src="/desserts.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center text-white w-[76%]">Desserts</h4>
                    </div>
                    :<div className="p-1 pr-2 rounded-xlp border border-black/20 shadow-black/50 shadow-md flex gap-2 place-items-center">
                        <Image className="p-2 w-12 bg-blue-800 rounded-xl" src="/desserts.svg" width={50} height={50} alt="Food House Logo"/>
                        <h4 className="text-center w-[76%]">Desserts</h4>
                    </div>}
                </button>
            </div>
            <div className="p-6">
                {currentSpeciality=="Appetizers"&&<Image className="rounded-xl" src="/PaneerTikka.png" width={500} height={0} alt="Paneer Tikka"/>}
                {currentSpeciality=="Food"&&<Image className="rounded-xl" src="/AlooGobi.png" width={500} height={0} alt="Paneer Tikka"/>}
                {currentSpeciality=="Rice"&&<Image className="rounded-xl" src="/jeerarice.png" width={500} height={0} alt="Paneer Tikka"/>}
                {currentSpeciality=="Desserts"&&<Image className="rounded-xl" src="/GulabJamun.png" width={500} height={0} alt="Paneer Tikka"/>}
            </div>
            <div className="py-10 text-white space-y-10 content-center">
                {currentSpeciality=="Appetizers"&&<SFcard iname={"Paneer Tikka"} Price={180} img={"/PaneerTikka.png"}/>}
                {currentSpeciality=="Appetizers"&&<SFcard iname={"Hariyali Paneer"} Price={200} img={"/HariyaliPaneerTikka.png"}/>}
                {currentSpeciality=="Food"&&<SFcard iname={"Shahi Paneer"} Price={180} img={"/ShahiPaneer.png"}/>}
                {currentSpeciality=="Food"&&<SFcard iname={"Rajma Chawal"} Price={180} img={"/RajmaChawal.png"}/>}
                {currentSpeciality=="Rice"&&<SFcard iname={"Veg Dum Biryani"} Price={220} img={"/vegdumbiryani.png"}/>}
                {currentSpeciality=="Rice"&&<SFcard iname={"Vaghareli khichdi"} Price={150} img={"/vagharelikhichdi.png"}/>}
                {currentSpeciality=="Desserts"&&<SFcard iname={"Rabdi"} Price={180} img={"/rabdi.png"}/>}
                {currentSpeciality=="Desserts"&&<SFcard iname={"Gajar Halwa"} Price={180} img={"/GajarHalwa.png"}/>}
            </div>
        </div>
        <div className="my-10 flex justify-end">
            <button className=" bg-black text-white p-2 px-6 rounded-xl text-3xl font-semibold font-work">Explore</button>
        </div>
    </div>
  )
}
