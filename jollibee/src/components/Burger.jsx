import React from "react";
import { motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import YumburgerSolo from "../assets/Menu/Burger/YumburgerSolo.png";
import AmazingAlohaChamp from "../assets/Menu/Burger/AmazingAlohaChamp.png";
import BaconCheesyYumburgerSolo from "../assets/Menu/Burger/BaconCheesyYumburgerSolo.webp";
import ChampJrSolo from "../assets/Menu/Burger/ChampJrSolo.png";
import ChampOne from "../assets/Menu/Burger/ChampOne.webp";
import CheesyYumburgerSolo from "../assets/Menu/Burger/CheesyYumburgerSolo.png";
import AmazaingAlohaChampJr from "../assets/Menu/Burger/AmazingAlohaChampJr.png";

const menuItems = [
  {
    name: "Yumburger",
    image: YumburgerSolo,
    desc: "Your favorite beefiest langhap-sarap Yumburger, with beefy patty and our special dressing in between soft buns.",
  },
  {
    name: "Cheesy Yumburger",
    image: CheesyYumburgerSolo,
    desc: "Your favorite beefiest langhap-sarap Yumburger with creamy cheese.",
  },
  {
    name: "Bacon Cheesy Yumburger",
    image: BaconCheesyYumburgerSolo,
    desc: "Your favorite langhap-sarap Yumburger now made extra special with crispy bacon and creamy cheese.",
  },
  {
    name: "Champ Jr.",
    image: ChampJrSolo,
    desc: "The Classic Champ now in a Jr. size. Made with a beefy patty, lettuce, tomato, and creamy cheese.",
  },
  {
    name: "Champ",
    image: ChampOne,
    desc: "The iconic 1/3-pound Champ patty with tomato, lettuce and cheese in sesame seed buns.",
  },
  {
    name: "Aloha Champ Jr.",
    image: AmazaingAlohaChampJr,
    desc: "The Aloha Champ now has a Jr. size. Made with a beefy patty, juicy pineapple, crispy bacon, honey mustard dressing, and creamy cheese.",
  },
  {
    name: "Aloha Champ",
    image: AmazingAlohaChamp,
    desc: "The iconic 1/3-pound Champ patty with juicy pineapple rings, crispy bacon strips, lettuce, cheese and honey mustard dressing in sesame seed buns.",
  },
];

const Burger = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Burgers
        </p>

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
              <motion.button
                className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
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

export default Burger;
