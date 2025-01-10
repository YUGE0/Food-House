"use client";
import React, { useState } from "react";

export default function Tablebook() {
  const [name, setName] = useState("");
  const [members, setMebers] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const increment = () => {
    setMebers((prevMembers) => prevMembers + 1);
  };

  const decrement = () => {
    setMebers((prevMembers) => Math.max(1, prevMembers - 1));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(name+" your booking has submitted!");
    console.log({
      name,
      members,
      date,
      time,
    });
  };

  return (
    <div className="p-10 m-10 md:m-16 rounded-2xl shadow-md shadow-black/30">
      <h1>We are almost there, hope to see you soon.</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 p-2 md:p-6">
          <h3>Name</h3>
          <input className="border-b-2 p-2 text-xl capitalize border-black w-full md:w-[30%]" type="text" placeholder="Enter your name" value={name}
            onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="md:flex justify-between">
          <div className="p-2 md:p-6 w-full">
            <h3>Group size</h3>
            <div className="mt-2 flex justify-between">
              <button type="button" onClick={decrement} className="rounded-l-lg bg-black text-white p-1 px-2 text-3xl font-semibold font-work">-</button>
              <h4 className="p-1 px-2 text-center text-2xl w-full bg-black text-white">{members}</h4>
              <button type="button" onClick={increment} className="rounded-r-lg bg-black text-white p-1 px-2 text-3xl font-semibold font-work">+</button>
            </div>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
                <button type="button" onClick={()=>{setMebers(1)}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Solo</button>
                <button type="button" onClick={()=>{setMebers(2)}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Duo</button>
                <button type="button" onClick={()=>{setMebers(3)}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Trio</button>
                <button type="button" onClick={()=>{setMebers(4)}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Squard</button>
            </div>
          </div>
          <div className="p-2 md:p-6 w-full">
            <h3>Date</h3>
            <input className="border-b-2 border-black w-full p-2 text-white uppercase rounded-lg bg-black" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <div className="mt-2 grid gap-2 md:grid-cols-2">
                <button type="button" onClick={() => {const today = new Date().toISOString().split("T")[0]; setDate(today)}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Today</button>
                <button type="button" onClick={() => {const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
                 const tomorrowDate = tomorrow.toISOString().split("T")[0];setDate(tomorrowDate)}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Tomorrow</button>
            </div>
          </div>
          <div className="p-2 md:p-6 w-full">
            <h3>Time</h3>
            <input className="border-b-2 border-black w-full p-2 text-white uppercase rounded-lg bg-black" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <div className="mt-2 grid gap-2 md:grid-cols-2">
            <button type="button" onClick={()=>{setTime("12:30")}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Lunch</button>
            <button type="button" onClick={()=>{setTime("08:00")}} className="rounded-xl w-full p-1 px-2 text-3xl font-semibold font-work shadow-black/50 border shadow-sm">Dinner</button>
            </div>
          </div>
        </div>
        <button type="submit" className="mt-10 md:mt-2 md:ml-4 w-full md:w-fit bg-black text-white p-2 px-6 rounded-xl text-3xl font-semibold font-work"> Book </button>
      </form>
    </div>
  );
}
