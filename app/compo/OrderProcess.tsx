import React from 'react'

export default function OrderProcess() {
  return (
    <div className="rounded-xl p-2 border border-fcolor">   
      <div className="grid grid-cols-2">
        <h3>Name</h3>
        <h3>Table No</h3>
      </div>
      <div>
        <h3>Order</h3>
        <div className="grid grid-cols-2">
          <h4>OName</h4>
          <h4>Qty</h4>
        </div>
      </div>
      <div>Note</div>
      <div className="mt-2 grid justify-items-stretch">
        <button className="bg-black text-white p-1 px-6 md:px-4 rounded-b-xl text-3xl font-semibold font-work">serve</button>
      </div>
    </div>
  )
}
