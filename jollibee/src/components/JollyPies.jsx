import React from "react";
import { motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import ClassicHotdogSolo from "../assets/Menu/JollyPies/ClassicHotdogSolo.webp";
import SpicyTunaPie from "../assets/Menu/JollyPies/SpicyTunaPie.webp";
import SpicyTunaTrio from "../assets/Menu/JollyPies/SpicyTunaTrio.webp";
import TunaPie from "../assets/Menu/JollyPies/TunaPie.webp";
import TunaPieTrio from "../assets/Menu/JollyPies/TunaPieTrio.webp";

const menuItems = [
  {
    name: "Cheesy Classic Jolly Hotdog",
    image: ClassicHotdogSolo,
    desc: "Meaty sausage in a soft hotdog bun, topped with a generous serving of tangy special dressing, grated cheese and tomato catsup, with fries and drink.",
  },
  {
    name: "Tuna Pie",
    image: TunaPie,
    desc: "Crispy-creamy Tuna Sarap in every bite!",
  },
  {
    name: "Tuna Pie Trio",
    image: TunaPieTrio,
    desc: "3 pieces of the crispy & creamy Tuna Pie!",
  },
  {
    name: "Spicy Tuna Pie",
    image: SpicyTunaPie,
    desc: "Crispy-creamy Tuna Sarap in every bite! Also available in Spicy!",
  },
  {
    name: "Spicy Tuna Pie Trio",
    image: SpicyTunaTrio,
    desc: "3 pieces of the crispy & creamy Spicy Tuna Pie!",
  },
];

const JollyPies = () => {
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
          Jolly Hotdog & Pies
        </motion.p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-yellow-500 rounded-2xl shadow-lg p-6 text-center relative hover:shadow-2xl transition-all transform hover:-translate-y-2"
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

export default JollyPies;
