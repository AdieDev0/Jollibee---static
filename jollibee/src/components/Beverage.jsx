import React from "react";
import SidebarMenu from "./SidebarMenu";
import Coke from "../assets/Menu/Beverage/Coke.webp";
import CokeFloat from "../assets/Menu/Beverage/CokeFloat.webp";
import CokeZero from "../assets/Menu/Beverage/CokeZero.webp";
import HotChoc from "../assets/Menu/Beverage/HotChoc.webp";
import HotCoffee from "../assets/Menu/Beverage/HotCoffee.webp";
import IcedTea from "../assets/Menu/Beverage/IcedTea.webp";
import Pineapple from "../assets/Menu/Beverage/Pineapple.webp";
import Royal from "../assets/Menu/Beverage/Royal.webp";
import Sarsi from "../assets/Menu/Beverage/Sarsi.webp";
import Sprite from "../assets/Menu/Beverage/Sprite.webp";

const menuItems = [
  {
    name: "Coffee",
    image: HotCoffee,
    desc: "Freshly brewed coffee with a balance of strong coffee taste, milk taste and just the right sweetness",
  },
  {
    name: "Coke",
    image: Coke,
    desc: "Refreshing, ice-cold Coke to perfectly match your favorite meal",
  },
  {
    name: "Coke Float",
    image: CokeFloat,
    desc: "Coke soda topped with creamy vanilla soft serve and rich, indulgent chocolate syrup",
  },
  {
    name: "Coke Zero",
    image: CokeZero,
    desc: "Refreshing, ice-cold Coke Zero to perfectly match your favorite meal",
  },
  {
    name: "Hot Chocolate",
    image: HotChoc,
    desc: "Hot, rich and creamy chocolate drink.",
  },
  {
    name: "Iced Tea",
    image: IcedTea,
    desc: "Delicous, ice-cold lemon flavored Iced Tea that will definitely complement any meal",
  },
  {
    name: "Pineapple Juice",
    image: Pineapple,
    desc: "Natural pineapple juice drink for those looking for a healthy alternative",
  },
  {
    name: "Royal",
    image: Royal,
    desc: "Refreshing, ice-cold Royal to perfectly match your favorite meal",
  },
  {
    name: "Sarsi",
    image: Sarsi,
    desc: "Refreshing, ice-cold Sarsi to perfectly match your favorite meal",
  },
  {
    name: "Sprite",
    image: Sprite,
    desc: "Refreshing, ice-cold Sprite to perfectly match your favorite meal",
  },
];

const Beverage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Beverage
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

export default Beverage;
