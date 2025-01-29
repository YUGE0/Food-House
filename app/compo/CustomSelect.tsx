"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CustomSelectProps {
    onsel: (table: number) => void; // The type of the 'onsel' function
  }
  
  export default function CustomSelect({ onsel }: CustomSelectProps) {
  const [selectedTable, setSelectedTable] = useState(0);
  const [selectMenu,setSelectOpen] = useState(false)

  const toggleSelect = () => setSelectOpen((prev) => !prev);

  const handleSelect = (table: number) => {
    setSelectedTable(table);
    onsel(table); 
  };

  useEffect(() => {
    if (typeof window !== 'undefined') { 
      localStorage.setItem("selectedTable", selectedTable.toString()); 
    }
  }, [selectedTable]); 

  //console.log(selectedTable);
  

  return (
    <div className="mb-10">
      <div className="w-full rounded-xlp shadow-sm shadow-fcolor">
        {selectMenu==true && <div className="grid grid-cols-2 md:grid-cols-none md:flex w-full gap-5 h-[10%] overflow-y-auto md:overflow-x-auto scroll-m-5">
            <Image className="p-5" onClick={() => {handleSelect(1); toggleSelect()}} src="/F1.svg" width={200} height={50} alt="Table 3" />
            <Image className="p-5" onClick={() => {handleSelect(2); toggleSelect()}} src="/F2.svg" width={200} height={50} alt="Table 3" />
            <Image className="p-5" onClick={() => {handleSelect(3); toggleSelect()}} src="/F3.svg" width={200} height={50} alt="Table 3" />
            <Image className="p-5" onClick={() => {handleSelect(4); toggleSelect()}} src="/F4.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect(5); toggleSelect()}} src="/F5.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect(6); toggleSelect()}} src="/F6.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect(7); toggleSelect()}} src="/F7.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect(8); toggleSelect()}} src="/F8.svg" width={200} height={50} alt="Table 4" />
        </div>}
      {selectMenu==false ? <div className="col-span-2 border-fcolor bg-fcolor text-white rounded-xlp border-b-2 p-2 items-baseline">
        <h4 onClick={toggleSelect} className="bg-no-repeat text-center">Table {selectedTable || " Selection"}</h4>
      </div> : <div className="col-span-2 border-fcolor bg-fcolor text-white rounded-b-xlp border-b-2 p-2 items-baseline">
        <h4 onClick={toggleSelect} className="text-center">{selectedTable || "Select a table"}</h4>
      </div>}
      </div>
    </div>
  );
}
