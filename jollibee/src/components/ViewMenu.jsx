import React from "react";
import SidebarMenu from "./SidebarMenu";
import { FaInfoCircle } from "react-icons/fa"; // Info icon

// Image Imports
import TwoChick from "../assets/Menu/BestSellers/2pcsChick.webp";
import EightAndSix from "../assets/Menu/BestSellers/8and6pc.webp";
import BreakfastChickenJoy from "../assets/Menu/BestSellers/BreakfastChickenJoy.webp";
import Bucket from "../assets/Menu/BestSellers/bucket.webp";
import BucketWRice from "../assets/Menu/BestSellers/BucketWRice.webp";
import BurgerBundle from "../assets/Menu/BestSellers/BurgerBundle.png";
import CheesyYumburgerSolo from "../assets/Menu/BestSellers/CheesyYumburgerSolo.png";
import ChickSolo from "../assets/Menu/BestSellers/ChickSolo.png";
import Drinkmin from "../assets/Menu/BestSellers/Drinkmin.webp";
import FamilyPanDuo from "../assets/Menu/BestSellers/FamilyPanDuo.webp";
import Palabok from "../assets/Menu/BestSellers/palabok.webp";
import SuperMeal from "../assets/Menu/BestSellers/superMeal.webp";
import YumburgerFamilySavers from "../assets/Menu/BestSellers/YumburgerFamilySavers.webp";
import YumburgerHalf from "../assets/Menu/BestSellers/YumburgerHalf.webp";
import YumburgerSolo from "../assets/Menu/BestSellers/YumburgerSolo.png";
import YumDrink from "../assets/Menu/BestSellers/YumDrink.webp";

// Menu Data with Description
const menuItems = [
  { name: "2-pc. Chickenjoy", image: TwoChick, description: "Crispylicious, juicylicious Chickenjoy with rice!" },
  { name: "8-pc. Chickenjoy Bucket", image: EightAndSix, description: "Enjoy 8-pc Chickenjoy perfect for sharing!" },
  { name: "Breakfast Chickenjoy", image: BreakfastChickenJoy, description: "Start your morning with Chickenjoy & rice." },
  { name: "Bucket Treats", image: Bucket, description: "A bucket of your favorite crispylicious Chickenjoy." },
  { name: "Bucket Treats w/ Rice", image: BucketWRice, description: "A Chickenjoy bucket paired with rice." },
  { name: "Burger Bundle", image: BurgerBundle, description: "A delicious burger bundle for the whole family." },
  { name: "Cheesy Yumburger Solo", image: CheesyYumburgerSolo, description: "A juicy burger topped with cheese." },
  { name: "Chick'n Sandwich Solo", image: ChickSolo, description: "A crispy chicken sandwich with mayo." },
  { name: "Drinkmin", image: Drinkmin, description: "Refreshing drink to complete your meal." },
  { name: "Family Pan Duo", image: FamilyPanDuo, description: "Two family pans of your favorite dishes." },
  { name: "Jolly Spaghetti Family Pan", image: Palabok, description: "Sweet-sarap Jolly Spaghetti for sharing!" },
  { name: "Super Meal", image: SuperMeal, description: "A complete meal with Chickenjoy, rice, and more!" },
  { name: "Yumburger Family Savers", image: YumburgerFamilySavers, description: "Family pack of your favorite Yumburger." },
  { name: "Yumburger Half", image: YumburgerHalf, description: "Half portion of Yumburger goodness." },
  { name: "Yumburger Solo", image: YumburgerSolo, description: "Classic Yumburger in a solo serving." },
  { name: "Yum Drink", image: YumDrink, description: "Cool and refreshing drink to go with your meal." },
];

// Reusable Menu Card Component
const MenuCard = React.memo(({ name, image, description }) => (
  <div className="relative border-2 border-orange-500 rounded-2xl shadow-md bg-white p-5 flex flex-col items-center text-center transition-transform transform hover:scale-105">
    
    {/* Info Icon */}
    <FaInfoCircle className="absolute top-3 right-3 text-orange-500 text-xl cursor-pointer" />

    {/* Image */}
    <img src={image} alt={name} className="w-32 h-32 object-cover mb-4" />

    {/* Title */}
    <h3 className="text-lg font-bold text-gray-900">{name}</h3>

    {/* Description */}
    <p className="text-gray-600 text-sm my-2">{description}</p>

    {/* Order Button */}
    <button className="mt-3 bg-orange-500 text-white font-semibold px-4 py-2 rounded-full transition hover:bg-orange-600">
      Order Now
    </button>
  </div>
));

const ViewMenu = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px]">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-center font-bold text-3xl mb-10 text-gray-900">Best Sellers</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard key={index} name={item.name} image={item.image} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ViewMenu;
