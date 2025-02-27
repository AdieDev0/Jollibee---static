import React from "react";
import { motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import ChickenSpag from "../assets/Menu/Spaghetti/ChickenSpag.webp";
import JollySpaghettiFamily from "../assets/Menu/Spaghetti/JollySpaghettiFamily.webp";
import JollySpaghettiFriesDrink from "../assets/Menu/Spaghetti/JollySpaghettiFriesDrink.webp";
import JollySpaghettiSolo from "../assets/Menu/Spaghetti/JollySpaghettiSolo.webp";
import SpagBurgerSteak from "../assets/Menu/Spaghetti/SpagBurgerSteak.webp";
import SpaghettiYumburger from "../assets/Menu/Spaghetti/SpaghettiYumburger.webp";

const menuItems = [
  {
    name: "Jolly Spaghetti",
    image: JollySpaghettiSolo,
    desc: "The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese.",
  },
  {
    name: "Jolly Spaghetti Family Pan",
    image: JollySpaghettiFamily,
    desc: "Your meatiest, cheesiest and sweet-sarap Jolly Spaghetti Family Pan.",
  },
  {
    name: "Chickenjoy Bucket with Jolly Spaghetti Family Pan",
    image: ChickenSpag,
    desc: "Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!",
  },
  {
    name: "Jolly Spaghetti w/ Fries & Drink",
    image: JollySpaghettiFriesDrink,
    desc: "The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese! Served with drink.",
  },
  {
    name: "Jolly Spaghetti w/ Burger Steak",
    image: SpagBurgerSteak,
    desc: "The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with our Beefy-Saucy Burger Steak.",
  },
  {
    name: "Jolly Spaghetti w/ Yumburger",
    image: SpaghettiYumburger,
    desc: "The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with your favorite langhap-sarap Yumburger with 100% beef patty and special burger dressing.",
  },
];

const JollySpag = () => {
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
          Jolly Spaghetti
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

export default JollySpag;
