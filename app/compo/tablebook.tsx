"use client"
import React, { useState } from 'react'

export default function Tablebook() {
     const [quantity, setQuantity] = useState(0);
    
        const increment = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);};
        const decrement = () => {
        setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));};
  return (
    <div className="m-20 p-10 rounded-2xl shadow-md shadow-black/30">
        <h1>We are almost there, hope to see you soon. Feel up this details.</h1>
        <div className="p-10">
            <h3>Name</h3>
            <input className="border-b-2 border-black w-[30%]" type='text'></input>
        </div>
        <div className="flex justify-between">
            <div className="p-10">
                <h3>Group size</h3>
                <div className="mt-2 flex justify-between">
                <button onClick={decrement} className=" bg-black text-white p-1 px-2 text-3xl font-semibold font-work">-</button>
                <h4 className="p-1 px-2 text-center text-2xl w-full bg-black text-white">{quantity}</h4>
                <button onClick={increment} className=" bg-black text-white p-1 px-2 text-3xl font-semibold font-work">+</button>
                </div>
            </div>
            <div className="p-10">
                <h3>Date</h3>
                <input className="border-b-2 border-black w-full" type='date'></input>
            </div>
            <div className="p-10">
                <h3>Time</h3>
                <input className="border-b-2 border-black w-full" type='time'></input>
            </div>
        </div>
    </div>
  )
}
