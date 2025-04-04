"use client"
import React, { useEffect, useState } from 'react'
import menu,{Dish} from '../ApiDemo/MenuD';
import MCard from '../compo/MenuCard';
import CustomSelect from '../compo/CustomSelect';

export default function Page() {
  const [selectedTable, setSelectedTable] = useState<string>("f1")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTable = sessionStorage.getItem("table") ?? "f1"
      setSelectedTable(storedTable);
    }
}, []); 

  const handleTableSelect = (value:string) => {
    setSelectedTable(value);  // Update the state with the selected value
  };
  //console.log(selectedTable)
  
  return (
    <div className="p-10">
      <CustomSelect onsel={handleTableSelect}/>
      <h1 className="text-6xl font-bold font-work text-center mb-6 text-fcolor">Our Menu</h1>
      {menu.map((category) => (
        <CategorySection
          key={category.category}
          category={category.category}
          dishes={category.dishes}
          tableNo={selectedTable}
        />
      ))}
    </div>
  );
}

function CategorySection({ category, dishes, tableNo }: { category: string; dishes: Dish[]; tableNo: string; }) {
  console.log(tableNo);
  
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-work font-bold my-3 p-1 border-b-2 border-fcolor text-fcolor">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <MCard tableNo={tableNo} key={dish.id} {...dish} />
        ))}
      </div>
    </div>
  );
}