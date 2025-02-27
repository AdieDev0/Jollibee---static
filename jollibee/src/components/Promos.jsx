import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import JanJoys from "../assets/Promos/JanJoys.jpg";
import JoyZone from "../assets/Promos/JoyZone.jpg";
import JTreats from "../assets/Promos/JTreats.jpg";
import KidsParty from "../assets/Promos/KidsParty.jpg";
import MixMatch from "../assets/Promos/MixMatch.jpg";
import Vday from "../assets/Promos/Vday.jpg";
import Vvibes from "../assets/Promos/Vvibes.jpg";

const menuItems = [
  { image: Vday, name: "VALENTINE Perfect Match Match Made with Love & Joy" },
  { image: Vvibes, name: "Jollibee App February Promo" },
  { image: MixMatch, name: "Jollibee Mix & Match Combos" },
  { image: JTreats, name: "Jolly Treats Promo" },
  { image: JanJoys, name: "Jollibee App January Promo" },
  { image: JoyZone, name: "Jollibee Christmas JoyZone" },
  { image: KidsParty, name: "Jollibee Kids Party" },
];

// Animation variants for staggered card animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Promos = () => {
  return (
    <div>
      {/* Promos Header */}
      <motion.div
        className="bg-red-600 p-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-white font-bold text-5xl font-roboto">Promos</p>
      </motion.div>

      <div className="bg-white p-10">
        <motion.h1
          className="text-4xl font-roboto font-bold text-center text-red-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Jollibee Promo
        </motion.h1>
        <motion.p
          className="text-center text-gray-700 font-roboto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Get more JOY with these exciting promos! Take advantage of these
          exclusive and limited-time offers to get big discounts and freebies!
        </motion.p>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center px-40"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden w-full max-w-md shadow-md"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-black">{item.name}</h2>
                <p className="text-orange-500 underline cursor-pointer mt-2 font-semibold">
                  Learn More
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Promos;