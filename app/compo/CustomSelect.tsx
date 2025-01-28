"use client"
import Image from "next/image";
import React, { useState } from "react";

interface CustomSelectProps {
    onsel: (table: string) => void; // The type of the 'onsel' function
  }
  
  export default function CustomSelect({ onsel }: CustomSelectProps) {
  const [selectedTable, setSelectedTable] = useState("");
  const [selectMenu,setSelectOpen] = useState(false)

  const toggleSelect = () => setSelectOpen((prev) => !prev);

  const handleSelect = (table: any) => {
    setSelectedTable(table);
    onsel(table); 
  };

  return (
    <div className="mb-10">
      <div className="w-full rounded-xlp shadow-sm shadow-fcolor">
        {selectMenu==true && <div className="grid grid-cols-2 md:grid-cols-none md:flex w-full gap-5 h-[10%] overflow-y-auto md:overflow-x-auto scroll-m-5">
            <Image className="p-5" onClick={() => {handleSelect("Table 1"); toggleSelect()}} src="/Table1.svg" width={200} height={50} alt="Table 3" />
            <Image className="p-5" onClick={() => {handleSelect("Table 2"); toggleSelect()}} src="/Table2.svg" width={200} height={50} alt="Table 3" />
            <Image className="p-5" onClick={() => {handleSelect("Table 3"); toggleSelect()}} src="/Table3.svg" width={200} height={50} alt="Table 3" />
            <Image className="p-5" onClick={() => {handleSelect("Table 4"); toggleSelect()}} src="/Table4.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect("Table 4"); toggleSelect()}} src="/Table4.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect("Table 4"); toggleSelect()}} src="/Table4.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect("Table 4"); toggleSelect()}} src="/Table4.svg" width={200} height={50} alt="Table 4" />
            <Image className="p-5" onClick={() => {handleSelect("Table 4"); toggleSelect()}} src="/Table4.svg" width={200} height={50} alt="Table 4" />
        </div>}
      {selectMenu==false ? <div className="col-span-2 border-fcolor bg-fcolor text-white rounded-xlp border-b-2 p-2 items-baseline">
        <h4 onClick={toggleSelect} className="text-center">{selectedTable || "Select a table"}</h4>
      </div> : <div className="col-span-2 border-fcolor bg-fcolor text-white rounded-b-xlp border-b-2 p-2 items-baseline">
        <h4 onClick={toggleSelect} className="text-center">{selectedTable || "Select a table"}</h4>
      </div>}
      </div>
    </div>
  );
}
