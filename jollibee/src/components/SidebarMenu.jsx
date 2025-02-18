import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
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

const menuItems = [
  { name: "Best Selling", image: BestSelling },
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

const MenuItem = ({ item, isSelected, onClick }) => (
  <li>
    <a
      href="#"
      role="button"
      tabIndex="0"
      className={`flex items-center p-3 font-semibold text-lg rounded-lg transition-all duration-200 transform ${
        isSelected
          ? "bg-white text-black scale-105 shadow-md"
          : "text-black/80 hover:bg-white hover:scale-105"
      }`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg shadow-sm"
      />
      <span className="ml-5 font-bold">{item.name}</span>
    </a>
  </li>
);

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const SidebarMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = useCallback((itemName) => {
    setSelectedItem(itemName);
  }, []);

  return (
    <aside className="w-full md:w-80 bg-orange-50 shadow-lg h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Menu</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              isSelected={selectedItem === item.name}
              onClick={() => handleItemClick(item.name)}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarMenu;
