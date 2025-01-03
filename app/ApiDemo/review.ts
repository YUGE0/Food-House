interface Review {
    name: string;      
    review: string;    
    star: number; 
  }

const reviews: Review[] = [
  {
    name: "Elio",
    review: "Food House is a delight! Every dish is packed with authentic flavors, and the warm ambiance makes it a perfect spot for any occasion. Highly recommended!",
    star: 5,
  },
  {
    name: "Jane Smith",
    review: "The ambiance was great, but the food was average.",
    star: 3,
  },
  {
    name: "Sam Wilson",
    review: "Loved it! Definitely coming back.",
    star: 4,
  },
  
];
  
export default reviews;