import React from 'react'

function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  

function formatTime(date: Date): string {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  
export default function DTF() {
    const currentDate = new Date()
  return (
    <div className="grid grid-cols-2">
        <h3>Time</h3>
        <h3>Date </h3>
        <h3 className="font-inter">{formatTime(currentDate)}</h3>
        <h3 className="font-inter">{formatDate(currentDate)}</h3>
    </div>
  )
}
