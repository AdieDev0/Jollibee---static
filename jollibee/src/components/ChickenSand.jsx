import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import ChickenDrinkFries from "../assets/Menu/ChickenSandwich/ChickenDrinkFries.webp";
import ChickenSupreme from "../assets/Menu/ChickenSandwich/ChickenSupreme.webp";
import SandwichSupremeFries from "../assets/Menu/ChickenSandwich/SandwichSupremeFries.webp";
import SoloSpicy from "../assets/Menu/ChickenSandwich/SoloSpicy.webp";

const menuItems = [
  {
    name: "Spicy Chicken Sandwich Supreme",
    image: SoloSpicy,
    desc: "Large. Crunch. Spicy Thigh Fillet",
  },
  {
    name: "Spicy Chicken Sandwich Supreme w/ Fries & Drink",
    image: SandwichSupremeFries,
    desc: "Large. Crunch. Spicy Thigh Fillet",
  },
  {
    name: "Chicken Sandwich Supreme",
    image: ChickenSupreme,
    desc: "Large. Crunch. Spicy Thigh Fillet",
  },
  {
    name: "Chicken Sandwich Supreme w/ Fries & Drink",
    image: ChickenDrinkFries,
    desc: "Large. Crunch. Spicy Thigh Fillet",
  },
];
const ChickenSand = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Chicken Sandwich
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

export default ChickenSand;
