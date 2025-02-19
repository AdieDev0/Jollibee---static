import React from "react";
import { NavLink } from "react-router-dom";
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
  return (
    <aside className="w-full md:w-80 bg-orange-50 shadow-lg h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Menu</h2>
        <ul className="space-y-5 py-5">
          {/* BestSelling */}
          <li>
            <NavLink
              to="/ViewMenu"
              className={({ isActive }) =>
                `flex items-center p-3 font-semibold text-lg rounded-lg transition-all duration-200 transform ${
                  isActive
                    ? "bg-white text-black scale-105 shadow-md border-l-8 border-yellow-500"
                    : "text-black/80 hover:bg-white hover:scale-105"
                }`
              }
            >
              <img
                src={BestSelling}
                alt="Best Selling"
                className="w-16 h-16 object-cover rounded-lg shadow-sm"
              />
              <span className="ml-5 font-bold">Best Selling</span>
            </NavLink>
          </li>
          {/* NewProduct */}
          <li>
            <NavLink
              to="/NewProduct"
              className={({ isActive }) =>
                `flex items-center p-3 font-semibold text-lg rounded-lg transition-all duration-200 transform ${
                  isActive
                    ? "bg-white text-black scale-105 shadow-md border-l-8 border-yellow-500"
                    : "text-black/80 hover:bg-white hover:scale-105"
                }`
              }
            >
              <img
                src={NewProducts}
                alt="New Products"
                className="w-16 h-16 object-cover rounded-lg shadow-sm"
              />
              <span className="ml-5 font-bold">New Products</span>
            </NavLink>
          </li>
          {/* FamilyMeals */}
          <li>
            <NavLink
              to="/FamilyMeals"
              className={({ isActive }) =>
                `flex items-center p-3 font-semibold text-lg rounded-lg transition-all duration-200 transform ${
                  isActive
                    ? "bg-white text-black scale-105 shadow-md border-l-8 border-yellow-500"
                    : "text-black/80 hover:bg-white hover:scale-105"
                }`
              }
            >
              <img
                src={FamilyMeals}
                alt="New Products"
                className="w-16 h-16 object-cover rounded-lg shadow-sm"
              />
              <span className="ml-5 font-bold">Family Meals</span>
            </NavLink>
          </li>
          {/* Breakfast */}
          <li>
            <NavLink
              to="/Breakfast"
              className={({ isActive }) =>
                `flex items-center p-3 font-semibold text-lg rounded-lg transition-all duration-200 transform ${
                  isActive
                    ? "bg-white text-black scale-105 shadow-md border-l-8 border-yellow-500"
                    : "text-black/80 hover:bg-white hover:scale-105"
                }`
              }
            >
              <img
                src={Breakfast}
                alt="New Products"
                className="w-16 h-16 object-cover rounded-lg shadow-sm"
              />
              <span className="ml-5 font-bold">Breakfast</span>
            </NavLink>
          </li>
          {/* Chicken Joy */}
          <li>
            <NavLink
              to="/ChickenJoy"
              className={({ isActive }) =>
                `flex items-center p-3 font-semibold text-lg rounded-lg transition-all duration-200 transform ${
                  isActive
                    ? "bg-white text-black scale-105 shadow-md border-l-8 border-yellow-500"
                    : "text-black/80 hover:bg-white hover:scale-105"
                }`
              }
            >
              <img
                src={ChickenJoy}
                alt="New Products"
                className="w-16 h-16 object-cover rounded-lg shadow-sm"
              />
              <span className="ml-5 font-bold">Chickenjoy</span>
            </NavLink>
          </li>
          {/*  */}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarMenu;
