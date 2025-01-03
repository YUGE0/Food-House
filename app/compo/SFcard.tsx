import React from 'react'
import Image from 'next/image'

export default function SFcard(sf: {
    iname:string,
    Price:number,
    img:string,
}) 
{
  return (
        <div className="bg-black rounded-xl translate-x-4 flex h-36 sm:w-a">
            <Image className="rounded-xl my-2 -translate-x-10 border-white border-2" src={sf.img} width={130} height={0} alt="Paneer Tikka"/> 
            <div className="mt-2 p-2 w-full -translate-x-6">
                <h3 className="w-fit">{sf.iname}</h3>
                <div className="mt-2 flex justify-around">
                    <div className="">
                        <h4 className="text-xl font-semibold">Serves</h4>
                        <div className="flex">
                        <Image className="h-6" src="/PersonWhite.svg" width={30} height={0} alt="Person logo"/>
                        <Image className="h-6" src="/PersonWhite.svg" width={30} height={0} alt="Person logo"/>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-xl font-semibold">Price</h4>
                        <h4 className="text-2xl font-semibold">{sf.Price}</h4>
                    </div>
                </div>
            </div>
        </div>
  )
}
