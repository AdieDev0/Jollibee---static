import React from "react";
import SidebarMenu from "./SidebarMenu";
import FourPcs from "../assets/Menu/NewProduct/FourPcs.webp";
import SoloOrig from "../assets/Menu/NewProduct/SoloOrig.webp";
import SoloSpicy from "../assets/Menu/NewProduct/SoloSpicy.webp";
import SpicyTunaPie from "../assets/Menu/NewProduct/SpicyTunaPie.webp";
import TunaPie from "../assets/Menu/NewProduct/TunaPie.webp";

const menuItems = [
  {
    name: "Spicy Chicken Sandwich Supreme",
    image: SoloSpicy,
    desc: "Large. Crunchy. Spicy Thigh Fillet.",
  },
  {
    name: "Chicken Sandwich Supreme",
    image: SoloOrig,
    desc: "Large. Crunchy. Juicy Thigh Fillet.",
  },
  {
    name: "4 - pc. Chickenjoy Family Box",
    image: FourPcs,
    desc: "Four pieces of fried chicken glazed with a perfect blend of sweet and spicy flavors. Good for sharing.",
  },
  {
    name: "Tuna Pie",
    image: TunaPie,
    desc: "Crispy-creamy Tuna Sarap in every bite!",
  },
  {
    name: "Spicy Tuna Pie",
    image: SpicyTunaPie,
    desc: "Crispy-creamy Tuna Sarap in every bite! Also available in Spicy!",
  },
];

const NewProduct = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-lg hidden lg:block">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 md:p-10">
        <p className="text-center font-bold text-3xl md:text-4xl mb-10">
          New Products
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-yellow-600 rounded-xl shadow-lg p-5 text-center relative hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mx-auto"
              />

              {/* Item Details */}
              <div className="mt-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>

              {/* Order Now Button */}
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
