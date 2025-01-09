interface Dish {
    id:number;
    img:string;
    name: string;      
    detail: string;   
    serve:number; 
    price: number; 
  }

const dishes: Dish[] = [
  {
    id:1,
    img:"MalaiKofta.webp",
    name: "Malai Kofta",      
    detail: "Our Malai Kofta features soft paneer-potato dumplings in a rich, creamy tomato-cashew gravy. A perfect blend of authentic flavors and indulgence!",   
    serve:2, 
    price:180, 
  },
  {
    id: 2,
    img: "ShahiPaneer.webp",
    name: "Shahi Paneer",
    detail:"Rich and creamy paneer cooked in a royal cashew-tomato gravy, seasoned with aromatic spices for a truly indulgent experience.",
    serve: 2,
    price: 200,
  },
  {
    id: 3,
    img: "RajmaChawal.webp",
    name: "Rajma Chawal",
    detail:
      "A comforting and hearty dish of red kidney beans in a spiced tomato gravy, served with steamed basmati rice. A homely favorite!",
    serve: 2,
    price: 150,
  },
  {
    id: 4,
    img: "AlooGobi.webp",
    name: "Aloo Gobi",
    detail:
      "A classic combination of potatoes and cauliflower, stir-fried with onions, tomatoes, and flavorful spices. A simple yet satisfying dish!",
    serve: 2,
    price: 140,
  },
];
  
export default dishes;