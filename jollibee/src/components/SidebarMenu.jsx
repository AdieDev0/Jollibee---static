import React from "react";
import BestSelling from "../assets/Menu/BestSelling.webp";
import Beverage from "../assets/Menu/Beverage.webp";
import Breakfast from "../assets/Menu/Breakfast.webp";
import Burger from "../assets/Menu/Burger.png";
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
    "New Products",
    "Family Meals",
    "Breakfast",
    "Chickenjoy",
    "Burgers",
    "Jolly Spaghetti",
    "Burger Steak",
    "Super Meals",
    "Chicken Sandwich",
    "Jolly Hotdog & Pies",
    "Palabok",
    "Fries & Sides",
    "Desserts",
    "Beverages",
    "Jolly Kiddie Meal",
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-600 mb-6">Menu</h2>
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-lg transition-colors duration-200"
              >
                <span className="ml-2">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
