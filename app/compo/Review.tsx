'use client'
import React, { useState } from 'react';
import reviews from "../ApiDemo/review"; // Import reviews from review.ts

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next review
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Navigate to the previous review
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  // Get the current review to display
  const currentReview = reviews[currentIndex];

  return (
    <div className="my-28 justify-items-center text-fcolor">
      <h1 className="text-center">What Customers Say?</h1>
      <div className="m-10 p-10 md:p-5 lg:p-10 rounded-3xl border border-black/20 shadow-black/50 shadow-xl md:w-[40%]">
        <h3 className="text-center">{currentReview.star}★</h3>
        <p className="content-center text-xl h-36 lg:h-24 text-black">{currentReview.review}</p>
        <h3 className="text-right">{currentReview.name}</h3>
        <div className="mt-5 justify-self-end">
          <button
            className="mx-2 p-2 px-8 rounded-xl bg-button text-white text-xl font-inter font-semibold"
            onClick={handlePrev}>Prev</button>
          <button
            className="mx-2 p-2 px-8 rounded-xl bg-button text-white text-xl font-inter font-semibold"
            onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
