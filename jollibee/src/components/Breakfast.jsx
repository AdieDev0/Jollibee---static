import React from "react";
import SidebarMenu from "./SidebarMenu";
import BaconEggCheesePancake from "../assets/Menu/Breakfast/BaconEggCheesePancake.webp";
import BaconSandwichsolo from "../assets/Menu/Breakfast/BaconSandwichsolo.webp";
import BeefTapaSolo from "../assets/Menu/Breakfast/BeefTapaSolo.webp";
import BreakfastBurgerSteakSolo from "../assets/Menu/Breakfast/BreakfastBurgerSteakSolo.webp";
import BreakfastChickenjoySolo from "../assets/Menu/Breakfast/BreakfastChickenjoySolo.webp";
import CornedBeefSolo from "../assets/Menu/Breakfast/CornedBeefSolo.webp";
import HotdogSolo from "../assets/Menu/Breakfast/HotdogSolo.webp";
import LongganisaSolo from "../assets/Menu/Breakfast/LongganisaSolo.webp";
import PancakeSolo from "../assets/Menu/Breakfast/PancakeSolo.webp";

const menuItems = [
  {
    name: "2 - pc. Pancakes",
    image: PancakeSolo,
    desc: "2 pieces of moist pancakes served with butter and maple syrup.",
  },
  {
    name: "Breakfast Hotdog",
    image: HotdogSolo,
    desc: "Meaty hotdog served with garlic rice and fried egg.",
  },
  {
    name: "Bacon, Egg, & Cheese Pancake Sandwich",
    image: BaconEggCheesePancake,
    desc: "Crispy bacon, cheese, and fried egg, sandwiched between two lightly glazed pancake buns.",
  },
  {
    name: "Corned Beef",
    image: CornedBeefSolo,
    desc: "Juicy corned beef served with garlic rice and fried egg.",
  },
  {
    name: "Beef Tapa",
    image: BeefTapaSolo,
    desc: "Tender beef tapa served with garlic rice and fried egg.",
  },
  {
    name: "Breakfast Burger Steak",
    image: BreakfastBurgerSteakSolo,
    desc: "1 piece of beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with garlic rice and fried egg.",
  },
  {
    name: "Longganisa",
    image: LongganisaSolo,
    desc: "2 pieces of mildly seasoned longganisa served with garlic rice and fried egg.",
  },
  {
    name: "Breakfast Chickenjoy",
    image: BreakfastChickenjoySolo,
    desc: "Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside with garlic rice and fried egg.",
  },
  {
    name: "Bacon, Egg, & Cheese Sandwich",
    image: BaconSandwichsolo,
    desc: "Crispy bacon, cheese, and fried egg sandwiched between two soft buns.",
  },
];

const Breakfast = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Family Meals
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

export default Breakfast;
