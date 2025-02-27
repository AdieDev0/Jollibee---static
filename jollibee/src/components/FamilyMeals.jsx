import React from "react";
import { motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import BucketChicken from "../assets/Menu/FamilyMeals/BucketChicken.webp";
import BurgerBundle from "../assets/Menu/FamilyMeals/BurgerBundle.png";
import FamilyBurgerSteak from "../assets/Menu/FamilyMeals/FamilyBurgerSteak.png";
import FamilyDuo from "../assets/Menu/FamilyMeals/FamilyDuo.webp";
import FourPieces from "../assets/Menu/FamilyMeals/FourPieces.webp";
import JoyAtHome from "../assets/Menu/FamilyMeals/JoyAtHome.webp";
import PlatterPalabok from "../assets/Menu/FamilyMeals/PlatterPalabok.webp";
import PlatterSpag from "../assets/Menu/FamilyMeals/PlatterSpag.webp";
import SixChickenJoySolo from "../assets/Menu/FamilyMeals/SixChickenJoySolo.webp";
import SweetPies from "../assets/Menu/FamilyMeals/SweetPies.webp";
import YumBurgerFamilySavers from "../assets/Menu/FamilyMeals/YumburgerFamilySavers.webp";

const menuItems = [
  {
    name: "4 - pc. Chickenjoy Family Box Solo",
    image: FourPieces,
    desc: "Four-piece Family Box of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy.",
  },
  {
    name: "Burger Steak Family Pan",
    image: FamilyBurgerSteak,
    desc: "A platter of 100% pure beef patty with a hearty serving of flavorful mushroom gravy, good for 6.",
  },
  {
    name: "Burger Bundle",
    image: BurgerBundle,
    desc: "3 Burgers, 3 Regular Fries, and 3 Regular Drinks.",
  },
  {
    name: "Yumburger Family Savers",
    image: YumBurgerFamilySavers,
    desc: "Jollibee Yumburger Family Savers has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Yumburger and Jolly Crispy Fries. Good for three.",
  },
  {
    name: "Peach Mango Pie 6 Pies-To-Go",
    image: SweetPies,
    desc: "6 pieces of Peach Mango Pie",
  },
  {
    name: "6 - pc. Chickenjoy",
    image: SixChickenJoySolo,
    desc: "A bucket of your favorite crispylicious, juicylicious Chickenjoy!",
  },
  {
    name: "Chickenjoy Bucket w/ Rice, Jolly Spaghetti, & Drinks",
    image: BucketChicken,
    desc: "A bucket of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with Jolly Spaghetti, rice and drinks.",
  },
  {
    name: "Family Pan Duo",
    image: FamilyDuo,
    desc: "Your meatiest, cheesiest and sweet-sarap Jolly Spaghetti Family Pan paired with the classic favorite Palabok Family Pan",
  },
  {
    name: "Jolly Spaghetti Family Pan",
    image: PlatterSpag,
    desc: "Your favorite meatiest, cheesiest sweet-sarap Jolly Spaghetti good for sharing with the whole family! Good for 4-5 pax.",
  },
  {
    name: "Palabok Family Pan",
    image: PlatterPalabok,
    desc: "Your classic favorite saucy-sarap Palabok with tasty toppings for sharing with the whole family! Good for 4-5 pax.",
  },
  {
    name: "Joy At Home Birthday Set",
    image: JoyAtHome,
    desc: "A special birthday meal set featuring Chickenjoy, spaghetti, drinks, and a sweet dessert, perfect for celebrations at home!",
  },
];

const FamilyMeals = () => {
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

export default FamilyMeals;
