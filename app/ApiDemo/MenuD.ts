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
          { id: 1, img: "PaneerTikka.webp", name: "Paneer Tikka", detail: "Marinated paneer chunks grilled to perfection with aromatic spices and yogurt, served with mint chutney.", serve: 2, price: 180 },
          { id: 2, img: "MushroomTikka.webp", name: "Mushroom Tikka", detail: "Juicy mushrooms marinated in a spicy tandoori mix and char-grilled.", serve: 2, price: 160 },
          { id: 3, img: "HariyaliPaneerTikka.webp", name: "Hariyali Paneer Tikka", detail: "Paneer marinated in a flavorful mix of coriander, mint, and spices, grilled to perfection.", serve: 1, price: 190 },
          { id: 4, img: "FrenchFries.webp", name: "French Fries", detail: "Crispy golden fries, available in classic salted or spiced peri-peri seasoning. (Peri Peri / Plain)", serve: 2, price: 120 },
          { id: 5, img: "ChilliPotato.webp", name: "Chilli Potato", detail: "Golden-fried potato fingers tossed in tangy chili garlic sauce with a hint of sesame seeds.", serve: 2, price: 150 },
          { id: 6, img: "CigarRolls.webp", name: "Cigar Rolls", detail: "Crunchy pastry rolls stuffed with creamy spiced vegetables and deep-fried to perfection.", serve: 2, price: 180 },
          { id: 7, img: "Momos.webp", name: "Momos", detail: "Steamed or fried dumplings stuffed with your choice of vegetables, paneer, or mushrooms.", serve: 2, price: 140 },
          { id: 8, img: "Kebab.webp", name: "Seekh Kebab/Cutlet", detail: "Choose between veg seekh kebabs or crispy cutlets made with mashed vegetables and spices.", serve: 2, price: 180 },
          { id: 9, img: "CheeseBalls.webp", name: "Cheese Balls", detail: "Gooey cheese stuffed into crispy fried balls, served hot.", serve: 2, price: 150 },
          { id: 10, img: "Golgappe.webp", name: "Golgappe", detail: "Crispy semolina balls filled with spicy tamarind water.", serve: 1, price: 60 },
          { id: 11, img: "Chaat.webp", name: "Chaat (Papdi, etc)", detail: "A mix of crispy papdi, tangy chutneys, yogurt, and sev.", serve: 1, price: 100 },
        ],
    },
    {
        category: "Sandwiches",
        dishes: [
          { id: 12, img: "ClubSandwich.webp", name: "Club Sandwich", detail: "Triple-layer sandwich with fresh veggies, mayonnaise, and cheese.", serve: 1, price: 200 },
          { id: 13, img: "GrilledSandwich.webp", name: "Grilled Sandwich", detail: "Assorted veggies grilled with cheese and spices.", serve: 1, price: 180 },
          { id: 14, img: "PaneerTikkaSandwich.webp", name: "Paneer Tikka Sandwich", detail: "Spicy paneer tikka filling in toasted bread.", serve: 1, price: 220 },
          { id: 15, img: "CheesyCornSandwich.webp", name: "Cheesy Corn Sandwich", detail: "Creamy corn and melted cheese for the ultimate comfort food.", serve: 1, price: 200 },
        ],
    },
    {
        category: "Wraps / Tacos",
        dishes: [
          { id: 16, img: "PaneerWrap.webp", name: "Paneer Wrap", detail: "Tandoori paneer wrapped in soft tortillas.", serve: 1, price: 200 },
          { id: 17, img: "Tacos.webp", name: "Tacos", detail: "Crunchy taco shells stuffed with Indian spiced fillings and fresh veggies.", serve: 1, price: 180 },
        ],
    },
    {
        category: "Soups",
        dishes: [
          { id: 18, img: "TomatoSoup.webp", name: "Tomato Soup", detail: "Classic creamy tomato soup served with croutons.", serve: 1, price: 120 },
          { id: 19, img: "SweetCornSoup.webp", name: "Sweet Corn Soup", detail: "A comforting bowl of sweet corn kernels in a thickened broth.", serve: 1, price: 140 },
          { id: 20, img: "HotAndSourSoup.webp", name: "Hot and Sour Soup", detail: "A spicy and tangy soup with vegetables and a hint of soy.", serve: 1, price: 160 },
          { id: 21, img: "ManchowSoup.webp", name: "Manchow Soup", detail: "Hot and spicy soup served with crispy noodles.", serve: 1, price: 150 },
        ],
    },
    {
        category: "Signature Curries",
        dishes: [
          { id: 29, img: "MalaiKofta.webp", name: "Malai Kofta", detail: "Soft paneer-potato dumplings in a luxurious tomato and cashew cream gravy.", serve: 2, price: 200 },
          { id: 30, img: "ShahiPaneer.webp", name: "Shahi Paneer", detail: "Paneer cubes simmered in a decadent, nutty cream sauce with mild spices.", serve: 2, price: 220 },
          { id: 31, img: "PalakPaneer.webp", name: "Palak Paneer", detail: "Pureed spinach cooked with soft paneer cubes, ginger, and garlic.", serve: 2, price: 200 },
          { id: 32, img: "KadhaiPaneer.webp", name: "Kadhai Paneer", detail: "Paneer and bell peppers stir-fried in a thick and spicy tomato-based gravy.", serve: 2, price: 220 },
          { id: 33, img: "ButterPaneer.webp", name: "Butter Paneer", detail: "Paneer cubes cooked in a buttery, creamy tomato gravy with a hint of fenugreek.", serve: 2, price: 220 },
          { id: 34, img: "PaneerLababdar.webp", name: "Paneer Lababdar", detail: "A rich, textured paneer curry with grated paneer, tomatoes, and cream.", serve: 2, price: 230 },
          { id: 35, img: "MatarPaneer.webp", name: "Matar Paneer", detail: "A mildly spiced curry with paneer and fresh green peas.", serve: 2, price: 200 },
          { id: 36, img: "MushroomMatar.webp", name: "Mushroom Matar", detail: "Button mushrooms and green peas cooked in a flavorful gravy.", serve: 2, price: 210 },
          { id: 37, img: "DumAloo.webp", name: "Dum Aloo", detail: "Baby potatoes simmered in a yogurt-based spicy gravy.", serve: 2, price: 190 },
          { id: 38, img: "MethiMatarMalai.webp", name: "Methi Matar Malai", detail: "Fenugreek leaves and peas in a creamy, mildly sweet curry.", serve: 2, price: 220 },
        ],
    },
    {
        category: "Classic Veggies",
        dishes: [
          { id: 39, img: "AlooGobi.webp", name: "Aloo Gobhi", detail: "Potatoes and cauliflower stir-fried with turmeric, cumin, and coriander.", serve: 2, price: 160 },
          { id: 40, img: "MixVeg.webp", name: "Mix Veg", detail: "Seasonal vegetables cooked in a spiced onion-tomato gravy.", serve: 2, price: 180 },
          { id: 41, img: "AlooMatar.webp", name: "Aloo Matar", detail: "A light and flavorful curry of potatoes and green peas.", serve: 2, price: 160 },
          { id: 42, img: "BhindiMasala.webp", name: "Bhindi Masala", detail: "Fresh okra sautéed with onions, tomatoes, and spices.", serve: 2, price: 180 },
          { id: 43, img: "PaneerKorma.webp", name: "Paneer Korma", detail: "Paneer cooked in a delicate coconut-based curry.", serve: 2, price: 200 },
          { id: 44, img: "CholeMasala.webp", name: "Chole Masala", detail: "Spicy and tangy chickpea curry cooked with aromatic spices.", serve: 1, price: 170 },
          { id: 45, img: "AlooPalak.webp", name: "Aloo Palak", detail: "Spinach and potatoes in a lightly spiced curry.", serve: 2, price: 160 },
        ],
    },
    {
        category: "Rice & Bowls",
        dishes: [
          { id: 46, img: "JeeraRice.webp", name: "Jeera Rice", detail: "Fragrant basmati rice tempered with cumin seeds and spices.", serve: 2, price: 120 },
          { id: 47, img: "VegPulao.webp", name: "Veg Pulao", detail: "Long-grain basmati rice cooked with vegetables and mild spices.", serve: 2, price: 150 },
          { id: 48, img: "vegdumbiryani.webp", name: "Veg Biryani", detail: "Aromatic rice cooked with fragrant spices, vegetables, and herbs.", serve: 2, price: 200 },
          { id: 49, img: "RajmaChawal.webp", name: "Rajma Chawal", detail: "Flavorful kidney bean curry served with steamed rice.", serve: 2, price: 180 },
          { id: 50, img: "DalTadkaChawal.webp", name: "Dal Tadka Chawal", detail: "Yellow lentils tempered with spices, served with steamed basmati rice.", serve: 2, price: 160 },
          { id: 51, img: "DalMakhaniChawal.webp", name: "Dal Makhani Chawal", detail: "Rich and creamy black lentils paired with aromatic rice.", serve: 2, price: 200 },
          { id: 52, img: "VaghareliKhichdi.webp", name: "Vaghareli Khichdi", detail: "Gujarati-style spiced khichdi made with lentils, rice, and aromatic tempering.", serve: 2, price: 150 },
        ],
    },
    {
        category: "Indian Breads",
        dishes: [
          { id: 53, img: "TandooriRoti.webp", name: "Tandoori Roti", detail: "Traditional Indian bread baked in a clay oven, served hot and crisp.", serve: 1, price: 25 },
          { id: 54, img: "ButterNaan.webp", name: "Butter Naan", detail: "Soft leavened bread brushed with butter.", serve: 1, price: 40 },
          { id: 55, img: "LacchaParatha.webp", name: "Laccha Paratha", detail: "Layered whole wheat bread cooked on a tawa.", serve: 1, price: 40 },
          { id: 56, img: "AlooParatha.webp", name: "Stuffed Aloo Paratha", detail: "Whole wheat flatbread stuffed with spiced potato filling, served with curd or pickle.", serve: 1, price: 60 },
          { id: 57, img: "PaneerParatha.webp", name: "Stuffed Paneer Paratha", detail: "Soft flatbread filled with spiced paneer and herbs, served with curd or pickle.", serve: 1, price: 70 },
          { id: 59, img: "MissiRoti.webp", name: "Missi Roti", detail: "A traditional bread made with gram flour and spices, cooked to perfection.", serve: 1, price: 30 },
          { id: 60, img: "CheeseNaan.webp", name: "Cheese Naan", detail: "Soft naan bread stuffed with gooey melted cheese.", serve: 1, price: 80 },
          { id: 61, img: "GarlicNaan.webp", name: "Garlic Naan", detail: "Aromatic naan topped with garlic and fresh coriander.", serve: 1, price: 50 },
        ],
    },
    {
        category: "Dessert Delights",
        dishes: [
          { id: 62, img: "ChocolateFudge.webp", name: "Chocolate Fudge", detail: "Rich and creamy chocolate ice cream swirled with fudge.", serve: 1, price: 80 },
          { id: 64, img: "StrawberrySwirl.webp", name: "Strawberry Swirl", detail: "Fresh strawberry flavors in every bite.", serve: 1, price: 70 },
          { id: 65, img: "VanillaDream.webp", name: "Vanilla Dream", detail: "Classic, smooth vanilla ice cream.", serve: 1, price: 60 },
          { id: 66, img: "Rabdi.webp", name: "Rabdi", detail: "Thickened and sweetened milk dessert, flavored with cardamom and garnished with dry fruits.", serve: 1, price: 90 },
          { id: 67, img: "GajarKaHalwa.webp", name: "Gajar Ka Halwa", detail: "Classic Indian dessert made with grated carrots, milk, sugar, and ghee.", serve: 1, price: 100 },
          { id: 68, img: "GulabJamun.webp", name: "Gulab Jamun", detail: "Soft and spongy milk dumplings soaked in saffron-scented sugar syrup.", serve: 2, price: 80 },
          { id: 70, img: "Kheer.webp", name: "Kheer", detail: "Creamy rice pudding cooked with milk, sugar, and garnished with nuts.", serve: 1, price: 70 },
        ],
    },
    {
        category: "Beverages",
        dishes: [
          { id: 74, img: "Latte.webp", name: "Latte", detail: "Mild coffee blended with creamy milk.", serve: 1, price: 120 },
          { id: 75, img: "Mocha.webp", name: "Mocha", detail: "Coffee infused with rich chocolate flavor.", serve: 1, price: 130 },
          { id: 76, img: "Margarita.webp", name: "Margarita", detail: "A refreshing mix of lime, tequila, and triple sec.", serve: 1, price: 250 },
          { id: 77, img: "PinaColada.webp", name: "Pina Colada", detail: "Creamy pineapple and coconut with a touch of rum.", serve: 1, price: 250 },
          { id: 78, img: "BloodyMary.webp", name: "Bloody Mary", detail: "Tangy tomato juice with vodka and spices.", serve: 1, price: 250 },
          { id: 79, img: "SweetLassi.webp", name: "Sweet Lassi", detail: "A refreshing yogurt-based drink.", serve: 1, price: 80 },
          { id: 64, img: "MasalaChaas.webp", name: "Masala Chaas", detail: "(Buttermilk) Refreshing and tangy buttermilk spiced with roasted cumin and herbs.", serve: 1, price: 60 },
          { id: 81, img: "Mojito.webp", name: "Mojito", detail: "Classic mojito with fresh mint, lime, and soda.", serve: 1, price: 200 },
          { id: 82, img: "HotChocolate.webp", name: "Hot Chocolate", detail: "Warm and creamy hot chocolate topped with marshmallows.", serve: 1, price: 150 },
          { id: 83, img: "OreoShake.webp", name: "Oreo Shake", detail: "Creamy milkshake blended with crushed Oreos and topped with whipped cream.", serve: 1, price: 150 },
        ],
    },
  ];
  
export default menu;