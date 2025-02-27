import React from "react";
import { motion } from "framer-motion";
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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <motion.p
          className="text-center font-extrabold text-4xl font-oswald text-red-600 mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          New Products
        </motion.p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-yellow-500 rounded-2xl shadow-lg p-6 text-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mx-auto rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />

              {/* Item Details */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>

              {/* Order Now Button */}
              <motion.button
                className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
