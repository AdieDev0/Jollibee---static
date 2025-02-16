import React from "react";
import BestSelling from "../assets/Menu/BestSelling.webp";
import Beverage from "../assets/Menu/Beverage.webp";
import Breakfast from "../assets/Menu/Breakfast.webp";
import Burger from "../assets/Menu/Burgers.png";
import BurgerSteak from "../assets/Menu/BurgerSteak.webp";
import ChickenJoy from "../assets/Menu/ChickenJoy.webp";
import ChickenSandwich from "../assets/Menu/ChickenSandwich.webp";
import Dessert from "../assets/Menu/Dessert.png";
import FamilyMeals from "../assets/Menu/FamilyMeals.webp";
import Fries from "../assets/Menu/Fries.webp";
import JollyHotdog from "../assets/Menu/JollyHotdog.webp";
import JollyKid from "../assets/Menu/JollyKid.webp";
import JollySpag from "../assets/Menu/JollySpag.webp";
import NewProducts from "../assets/Menu/NewProducts.webp";
import Palabok from "../assets/Menu/Palabok.png";
import SuperMeals from "../assets/Menu/SuperMeals.webp";

const SidebarMenu = () => {
  const menuItems = [
    { name: "New Products", image: NewProducts },
    { name: "Family Meals", image: FamilyMeals },
    { name: "Breakfast", image: Breakfast },
    { name: "Chickenjoy", image: ChickenJoy },
    { name: "Burgers", image: Burger },
    { name: "Jolly Spaghetti", image: JollySpag },
    { name: "Burger Steak", image: BurgerSteak },
    { name: "Super Meals", image: SuperMeals },
    { name: "Chicken Sandwich", image: ChickenSandwich },
    { name: "Jolly Hotdog & Pies", image: JollyHotdog },
    { name: "Palabok", image: Palabok },
    { name: "Fries & Sides", image: Fries },
    { name: "Desserts", image: Dessert },
    { name: "Beverages", image: Beverage },
    { name: "Jolly Kiddie Meal", image: JollyKid },
  ];

  return (
    <div className="w-full md:w-64 bg-white shadow-lg h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-600 mb-6">Menu</h2>
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-lg transition-colors duration-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="ml-3">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
