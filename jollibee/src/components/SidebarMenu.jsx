import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
// IMAGE
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
  // Animation variants for the sidebar
  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.aside
      className="w-full md:w-80 bg-orange-50 shadow-lg h-screen fixed left-0 top-0 overflow-y-auto"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Menu</h2>
        <ul className="space-y-5 py-5">
          {[
            { image: BestSelling, name: "Best Selling", to: "/ViewMenu" },
            { image: NewProducts, name: "New Products", to: "/NewProduct" },
            { image: FamilyMeals, name: "Family Meals", to: "/FamilyMeals" },
            { image: Breakfast, name: "Breakfast", to: "/Breakfast" },
            { image: ChickenJoy, name: "Chickenjoy", to: "/ChickenJoy" },
            { image: Burger, name: "Burgers", to: "/Burger" },
            { image: JollySpag, name: "Jolly Spaghetti", to: "/JollySpag" },
            { image: BurgerSteak, name: "Burger Steak", to: "/BurgerSteak" },
            { image: SuperMeals, name: "Super Meals", to: "/SuperMeals" },
            {
              image: ChickenSandwich,
              name: "Chicken Sandwich",
              to: "/ChickenSand",
            },
            {
              image: JollyHotdog,
              name: "Jolly Hotdog & Pies",
              to: "/JollyPies",
            },
            { image: Palabok, name: "Palabok", to: "/Palabok" },
            { image: Fries, name: "Fries & Sides", to: "/Fries" },
            { image: Dessert, name: "Desserts", to: "/Dessert" },
            { image: Beverage, name: "Beverage", to: "/Beverage" },
            { image: JollyKid, name: "Jolly Kiddie Meals", to: "/KiddieMeal" },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-3 font-semibold text-lg rounded-lg transition-all duration-200 transform ${
                    isActive
                      ? "bg-white text-black scale-105 shadow-md border-l-8 border-yellow-500"
                      : "text-black/80 hover:bg-white hover:scale-105"
                  }`
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shadow-sm"
                />
                <span className="ml-5 font-bold">{item.name}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default SidebarMenu;