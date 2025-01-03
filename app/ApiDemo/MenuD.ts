export interface Dish {
    id: number;
    img: string;
    name: string;
    detail: string;
    serve: number;
    price: number;
}

export interface Menu {
    category: string;
    dishes: Dish[];
}

const menu: Menu[] = [
    {
        category: "Appetizers",
        dishes: [
          { id: 1, img: "PaneerTikka.png", name: "Paneer Tikka", detail: "Marinated paneer chunks grilled to perfection with aromatic spices and yogurt, served with mint chutney.", serve: 2, price: 180 },
          { id: 2, img: "MushroomTikka.png", name: "Mushroom Tikka", detail: "Juicy mushrooms marinated in a spicy tandoori mix and char-grilled.", serve: 2, price: 160 },
          { id: 3, img: "FrenchFries.png", name: "French Fries (Peri Peri / Plain)", detail: "Crispy golden fries, available in classic salted or spiced peri-peri seasoning.", serve: 2, price: 120 },
          { id: 4, img: "ChilliPotato.png", name: "Chilli Potato", detail: "Golden-fried potato fingers tossed in tangy chili garlic sauce with a hint of sesame seeds.", serve: 2, price: 150 },
          { id: 5, img: "CigarRolls.png", name: "Cigar Rolls", detail: "Crunchy pastry rolls stuffed with creamy spiced vegetables and deep-fried to perfection.", serve: 2, price: 180 },
          { id: 6, img: "Momos.png", name: "Momos (Different Types)", detail: "Steamed or fried dumplings stuffed with your choice of vegetables, paneer, or mushrooms.", serve: 2, price: 140 },
          { id: 7, img: "Kebab.png", name: "Kebab / Cutlet", detail: "Choose between veg seekh kebabs or crispy cutlets made with mashed vegetables and spices.", serve: 2, price: 180 },
          { id: 8, img: "CheeseBalls.png", name: "Cheese Balls", detail: "Gooey cheese stuffed into crispy fried balls, served hot.", serve: 2, price: 150 },
          { id: 9, img: "Golgappe.png", name: "Golgappe", detail: "Crispy semolina balls filled with spicy tamarind water.", serve: 1, price: 60 },
          { id: 10, img: "Chaat.png", name: "Chaat (Papdi, etc)", detail: "A mix of crispy papdi, tangy chutneys, yogurt, and sev.", serve: 1, price: 100 },
        ],
    },
    {
        category: "Soups",
        dishes: [
          { id: 11, img: "TomatoSoup.png", name: "Tomato Soup", detail: "Classic creamy tomato soup served with croutons.", serve: 1, price: 120 },
          { id: 12, img: "SweetCornSoup.png", name: "Sweet Corn Soup", detail: "A comforting bowl of sweet corn kernels in a thickened broth.", serve: 1, price: 140 },
          { id: 13, img: "HotAndSourSoup.png", name: "Hot and Sour Soup", detail: "A spicy and tangy soup with vegetables and a hint of soy.", serve: 1, price: 160 },
          { id: 14, img: "ManchowSoup.png", name: "Manchow Soup", detail: "Hot and spicy soup served with crispy noodles.", serve: 1, price: 150 },
        ],
    },
    {
        category: "Main Course",
        dishes: [
          { id: 15, img: "MalaiKofta.png", name: "Malai Kofta", detail: "Soft paneer-potato dumplings in a creamy tomato-cashew gravy.", serve: 2, price: 180 },
          { id: 16, img: "ShahiPaneer.png", name: "Shahi Paneer", detail: "Rich and creamy paneer cooked in a royal cashew-tomato gravy.", serve: 2, price: 200 },
          { id: 17, img: "PalakPaneer.png", name: "Palak Paneer", detail: "Pureed spinach cooked with paneer cubes, ginger, and garlic.", serve: 2, price: 200 },
          { id: 18, img: "ButterPaneer.png", name: "Butter Paneer", detail: "Paneer cooked in a buttery, creamy tomato gravy.", serve: 2, price: 220 },
          { id: 19, img: "AlooGobi.png", name: "Aloo Gobi", detail: "A classic combination of potatoes and cauliflower stir-fried with spices.", serve: 2, price: 140 },
          { id: 20, img: "MixVeg.png", name: "Mix Veg", detail: "A medley of seasonal vegetables cooked in a flavorful curry.", serve: 2, price: 160 },
          { id: 21, img: "BhindiMasala.png", name: "Bhindi Masala", detail: "Stir-fried okra cooked with onions, tomatoes, and aromatic spices.", serve: 2, price: 150 },
        ],
    },
    {
        category: "Rice & Bowls",
        dishes: [
          { id: 22, img: "JeeraRice.png", name: "Jeera Rice", detail: "Fragrant basmati rice tempered with cumin seeds and spices.", serve: 2, price: 120 },
          { id: 23, img: "VegPulao.png", name: "Veg Pulao", detail: "Long-grain basmati rice cooked with vegetables and mild spices.", serve: 2, price: 150 },
          { id: 24, img: "VegBiryani.png", name: "Veg Biryani", detail: "Aromatic rice cooked with fragrant spices, vegetables, and herbs.", serve: 2, price: 200 },
        ],
    },
    {
        category: "Indian Breads",
        dishes: [
          { id: 25, img: "TandooriRoti.png", name: "Tandoori Roti", detail: "Traditional Indian bread baked in a clay oven, served hot and crisp.", serve: 1, price: 25 },
          { id: 26, img: "ButterNaan.png", name: "Butter Naan", detail: "Soft leavened bread brushed with butter.", serve: 1, price: 40 },
          { id: 27, img: "LacchaParatha.png", name: "Laccha Paratha", detail: "Layered whole wheat bread cooked on a tawa.", serve: 1, price: 40 },
        ],    
    },
    {
        category: "Signature Curries",
        dishes: [
          { id: 28, img: "MalaiKofta.png", name: "Malai Kofta", detail: "Soft paneer-potato dumplings in a luxurious tomato and cashew cream gravy.", serve: 2, price: 200 },
          { id: 29, img: "ShahiPaneer.png", name: "Shahi Paneer", detail: "Paneer cubes simmered in a decadent, nutty cream sauce with mild spices.", serve: 2, price: 220 },
          { id: 30, img: "PalakPaneer.png", name: "Palak Paneer", detail: "Pureed spinach cooked with soft paneer cubes, ginger, and garlic.", serve: 2, price: 200 },
          { id: 31, img: "KadhaiPaneer.png", name: "Kadhai Paneer", detail: "Paneer and bell peppers stir-fried in a thick and spicy tomato-based gravy.", serve: 2, price: 220 },
          { id: 32, img: "ButterPaneer.png", name: "Butter Paneer", detail: "Paneer cubes cooked in a buttery, creamy tomato gravy with a hint of fenugreek.", serve: 2, price: 220 },
          { id: 33, img: "PaneerLababdar.png", name: "Paneer Lababdar", detail: "A rich, textured paneer curry with grated paneer, tomatoes, and cream.", serve: 2, price: 230 },
          { id: 34, img: "MatarPaneer.png", name: "Matar Paneer", detail: "A mildly spiced curry with paneer and fresh green peas.", serve: 2, price: 200 },
          { id: 35, img: "MushroomMatar.png", name: "Mushroom Matar", detail: "Button mushrooms and green peas cooked in a flavorful gravy.", serve: 2, price: 210 },
          { id: 36, img: "DumAloo.png", name: "Dum Aloo", detail: "Baby potatoes simmered in a yogurt-based spicy gravy.", serve: 2, price: 190 },
          { id: 37, img: "MethiMatarMalai.png", name: "Methi Matar Malai", detail: "Fenugreek leaves and peas in a creamy, mildly sweet curry.", serve: 2, price: 220 },
        ],
    },
    {
        category: "Classic Veggies",
        dishes: [
          { id: 38, img: "AlooGobhi.png", name: "Aloo Gobhi", detail: "Potatoes and cauliflower stir-fried with turmeric, cumin, and coriander.", serve: 2, price: 160 },
          { id: 39, img: "MixVeg.png", name: "Mix Veg", detail: "Seasonal vegetables cooked in a spiced onion-tomato gravy.", serve: 2, price: 180 },
          { id: 40, img: "AlooMatar.png", name: "Aloo Matar", detail: "A light and flavorful curry of potatoes and green peas.", serve: 2, price: 160 },
          { id: 41, img: "BhindiMasala.png", name: "Bhindi Masala", detail: "Fresh okra sautéed with onions, tomatoes, and spices.", serve: 2, price: 180 },
          { id: 42, img: "PaneerKorma.png", name: "Paneer Korma", detail: "Paneer cooked in a delicate coconut-based curry.", serve: 2, price: 200 },
          { id: 43, img: "Saag.png", name: "Saag", detail: "A hearty mix of spinach and mustard greens, slow-cooked with spices.", serve: 2, price: 170 },
          { id: 44, img: "AlooPalak.png", name: "Aloo Palak", detail: "Spinach and potatoes in a lightly spiced curry.", serve: 2, price: 160 },
        ],
    },
    {
        category: "Dessert Delights",
        dishes: [
          { id: 45, img: "ChocolateFudge.png", name: "Chocolate Fudge", detail: "Rich and creamy chocolate ice cream swirled with fudge.", serve: 1, price: 80 },
          { id: 46, img: "MangoMania.png", name: "Mango Mania", detail: "Creamy mango-flavored delight.", serve: 1, price: 70 },
          { id: 47, img: "StrawberrySwirl.png", name: "Strawberry Swirl", detail: "Fresh strawberry flavors in every bite.", serve: 1, price: 70 },
          { id: 48, img: "VanillaDream.png", name: "Vanilla Dream", detail: "Classic, smooth vanilla ice cream.", serve: 1, price: 60 },
        ],
    },
    {
        category: "Beverages",
        dishes: [
          { id: 49, img: "Espresso.png", name: "Espresso", detail: "A single shot of strong and bold coffee.", serve: 1, price: 80 },
          { id: 50, img: "Cappuccino.png", name: "Cappuccino", detail: "Coffee with steamed milk and frothy foam.", serve: 1, price: 100 },
          { id: 51, img: "Latte.png", name: "Latte", detail: "Mild coffee blended with creamy milk.", serve: 1, price: 120 },
          { id: 52, img: "Mocha.png", name: "Mocha", detail: "Coffee infused with rich chocolate flavor.", serve: 1, price: 130 },
          { id: 53, img: "Margarita.png", name: "Margarita", detail: "A refreshing mix of lime, tequila, and triple sec.", serve: 1, price: 250 },
          { id: 54, img: "PinaColada.png", name: "Pina Colada", detail: "Creamy pineapple and coconut with a touch of rum.", serve: 1, price: 250 },
          { id: 55, img: "BloodyMary.png", name: "Bloody Mary", detail: "Tangy tomato juice with vodka and spices.", serve: 1, price: 250 },
          { id: 56, img: "Cosmopolitan.png", name: "Cosmopolitan", detail: "A blend of cranberry juice, vodka, and lime.", serve: 1, price: 250 },
          { id: 57, img: "LemonIcedTea.png", name: "Lemon Iced Tea", detail: "Cool and refreshing iced tea with a twist of lemon.", serve: 1, price: 90 },
          { id: 58, img: "Mojito.png", name: "Mojito", detail: "Classic mojito with fresh mint, lime, and soda.", serve: 1, price: 200 },
          { id: 59, img: "HotChocolate.png", name: "Hot Chocolate", detail: "Warm and creamy hot chocolate topped with marshmallows.", serve: 1, price: 150 },
          { id: 60, img: "GreenTea.png", name: "Green Tea", detail: "Refreshing and soothing green tea, served hot.", serve: 1, price: 80 },
        ],
    },
  ];
  
export default menu;