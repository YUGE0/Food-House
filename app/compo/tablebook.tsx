"use client";
import React, { useState } from "react";

export default function Tablebook() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1); // Default to 1
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(name+" your booking has submitted!");
    console.log({
      name,
      quantity,
      date,
      time,
    });
  };

  return (
    <div className="p-10 m-10 md:m-16 rounded-2xl shadow-md shadow-black/30">
      <h1>We are almost there, hope to see you soon.</h1>
      <form onSubmit={handleSubmit}>
        <div className="p-10">
          <h3>Name</h3>
          <input className="border-b-2 p-2 text-xl capitalize border-black w-full md:w-[30%]" type="text" placeholder="Enter your name" value={name}
            onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="md:flex justify-between">
          <div className="p-10">
            <h3>Group size</h3>
            <div className="mt-2 flex justify-between">
              <button
                type="button"
                onClick={decrement}
                className="rounded-l-lg bg-black text-white p-1 px-2 text-3xl font-semibold font-work"
              >
                -
              </button>
              <h4 className="p-1 px-2 text-center text-2xl w-full bg-black text-white">
                {quantity}
              </h4>
              <button
                type="button"
                onClick={increment}
                className="rounded-r-lg bg-black text-white p-1 px-2 text-3xl font-semibold font-work"
              >
                +
              </button>
            </div>
          </div>
          <div className="p-10">
            <h3>Date</h3>
            <input
              className="border-b-2 border-black w-full p-2 text-white uppercase rounded-lg bg-black"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="p-10">
            <h3>Time</h3>
            <input
              className="border-b-2 border-black w-full p-2 text-white uppercase rounded-lg bg-black"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="ml-10 bg-black text-white p-2 px-6 rounded-xl text-3xl font-semibold font-work"
        >
          Book
        </button>
      </form>
    </div>
  );
}
