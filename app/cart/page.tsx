import React from 'react'
import menu,{Dish} from '../ApiDemo/MenuD';
import CCard from '../compo/CCard';

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-6xl font-bold font-work text-center mb-6">Order</h1>
      {menu.map((category) => (
        <CategorySection
          key={category.category}
          category={category.category}
          dishes={category.dishes}
        />
      ))}
    </div>
  );
}

function CategorySection({ category, dishes }: { category: string; dishes: Dish[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-open font-semibold my-3 border-black border-b-2">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (<CCard key={dish.id} {...dish} />))}
      </div>
    </div>
  );
}