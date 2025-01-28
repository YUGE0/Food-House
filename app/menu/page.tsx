"use client"
import React, { useState } from 'react'
import menu,{Dish} from '../ApiDemo/MenuD';
import MCard from '../compo/MenuCard';
import CustomSelect from '../compo/CustomSelect';

export default function Page() {
  const [selectedTable, setSelectedTable] = useState<string>("")

  const handleTableSelect = (value:string) => {
    setSelectedTable(value);  // Update the state with the selected value
  };
  console.log(selectedTable)
  
  return (
    <div className="p-10">
      <h1 className="text-6xl font-bold font-work text-center mb-6">Our Menu</h1>
      <CustomSelect onsel={handleTableSelect}/>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <MCard key={dish.id} {...dish} />
        ))}
      </div>
    </div>
  );
}