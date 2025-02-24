import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import FriesJabee from "../assets/Menu/FriesSide/FriesJabee.webp";
import Gravy from "../assets/Menu/FriesSide/Gravy.webp";
import Rice from "../assets/Menu/FriesSide/Rice.png";
import SoupMacaroni from "../assets/Menu/FriesSide/SoupMacaroni.webp";

const menuItems = [
  {
    name: "Creamy Macaroni Soup",
    image: SoupMacaroni,
    desc: "Creamy flavorful broth with elbow macaroni with diced chicken, ham bits and vegetables.",
  },
  {
    name: "Gravy",
    image: Gravy,
    desc: "Chickenjoy Gravy.",
  },
  {
    name: "Jolly Crispy Fries",
    image: FriesJabee,
    desc: "Crispy-sarap fries in every bite.",
  },
  {
    name: "Plain White Rice",
    image: Rice,
    desc: "Extra Rice.",
  },
];

const Fries = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Fries & Sides
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

export default Fries;
