import React from 'react'
import Image from 'next/image'

export default function SFcard(sf: {
    iname:string,
    Price:number,
    img:string,
}) 
{
  return (
        <div className="bg-fcolor rounded-xl flex h-28 items-center w-full">
            <Image className="rounded-xl bg-white my-2 border-fcolor border-4 h-full" src={sf.img} width={130} height={0} alt={sf.iname}/> 
            <div className="mt-2 p-2 w-full">
                <h3 className="w-fit">{sf.iname}</h3>
                <div className="mt-1 flex w-1/2 justify-between">
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
