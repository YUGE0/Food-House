import React from 'react'

export default function OrderNew() {
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
      <div className="mt-2 grid grid-cols-2 justify-items-stretch">
        <button className="justify-self-start bg-black text-white p-1 px-6 md:px-4 rounded-bl-xl text-3xl font-semibold font-work">cancel</button>
        <button className="justify-self-end bg-black text-white p-1 px-6 md:px-4 rounded-br-xl text-3xl font-semibold font-work">Process</button>
      </div>
    </div>
  )
}
