import React from 'react'
import OrderNew from '../compo/OrderNew'
import OrderProcess from '../compo/OrderProcess'
import OrderServed from '../compo/OrderServed'

export default function page() {
  return (
    <div className="px-10 grid grid-cols-3 gap-10">
        <div className="rounded-t-xlp border-2 border-fcolor p-6">
          <OrderNew/>
        </div>
        <div className="rounded-t-xlp border-2 border-fcolor p-6">
          <OrderProcess/>
        </div>
        <div className="rounded-t-xlp border-2 border-fcolor p-6">
          <OrderServed/>
        </div>
    </div>
  )
}
