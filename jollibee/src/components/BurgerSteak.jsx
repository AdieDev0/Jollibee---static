import React from "react";
import SidebarMenu from "./SidebarMenu";
import BurgerSteakFries from "../assets/Menu/BurgerSteak/BurgerSteakFries.webp";
import DuoBurgerSteak from "../assets/Menu/BurgerSteak/DuoBurgerSteak.png";
import PlatterBurgerSteak from "../assets/Menu/BurgerSteak/PlatterBurgerSteak.png";
import SixPlatterBurgerSteak from "../assets/Menu/BurgerSteak/SixPlatterBurgerSteak.webp";
import SoloBurgerSteak from "../assets/Menu/BurgerSteak/SoloBurgerSteak.webp";
import SpagBurgerPlatter from "../assets/Menu/BurgerSteak/SpagBurgerPlatter.webp";

const menuItems = [
  {
    name: "1 - pc. Burger Steak",
    image: SoloBurgerSteak,
    desc: "1 piece of beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with steamed rice.",
  },
  {
    name: "2 - pc. Burger Steak",
    image: DuoBurgerSteak,
    desc: "2 pieces of beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with steamed rice.",
  },
  {
    name: "1 - pc. Burger Steak w/ Fries & Drink",
    image: BurgerSteakFries,
    desc: "Beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with fries and steamed rice.",
  },
  {
    name: "Burger Steak w/ Jolly Spaghetti Family Pan",
    image: BurgerSteakFries,
    desc: "A platter of beef patties with flavorful mushroom gravy topped with mushroom slices. Served with the meatiest, cheesiest and sweet-sarap Jolly Spaghetti Family Pan!",
  },
  {
    name: "8 - pc. Burger Steak Family Pan",
    image: PlatterBurgerSteak,
    desc: "A platter of beef patties with flavorful mushroom gravy topped with mushroom slices, good for 8.",
  },
  {
    name: "6 - pc. Burger Steak Family Pan",
    image: SixPlatterBurgerSteak,
    desc: "A platter of beef patties with flavorful mushroom gravy topped with mushroom slices, good for 8",
  },
];
const BurgerSteak = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Burger Steak
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-yellow-500 rounded-2xl shadow-lg p-6 text-center relative hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mx-auto rounded-lg"
              />

              {/* Item Details */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>

              {/* Order Now Button */}
              <button className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerSteak;
