import React from "react";
import SidebarMenu from "./SidebarMenu";
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

const menuItems = [
  {
    name: "2-pc. Chickenjoy",
    image: TwoChick,
    desc: "Crispylicious, juicylicious Chickenjoy with rice!",
  },
  {
    name: "8-pc. Chickenjoy Bucket",
    image: EightAndSix,
    desc: "Enjoy 8-pc Chickenjoy perfect for sharing!",
  },
  {
    name: "Breakfast Chickenjoy",
    image: BreakfastChickenJoy,
    desc: "Chickenjoy with garlic rice & egg!",
  },
  {
    name: "Bucket Treats",
    image: Bucket,
    desc: "Perfect meal with crispy Chickenjoy & sides.",
  },
  {
    name: "Bucket Treats w/ Rice",
    image: BucketWRice,
    desc: "Bucket meal that includes rice servings!",
  },
  {
    name: "Burger Bundle",
    image: BurgerBundle,
    desc: "Tasty burgers for the whole family!",
  },
  {
    name: "Cheesy Yumburger Solo",
    image: CheesyYumburgerSolo,
    desc: "Classic Yumburger with extra cheese!",
  },
  {
    name: "Chick'n Sandwich Solo",
    image: ChickSolo,
    desc: "Crispy chicken sandwich with mayo dressing!",
  },
  {
    name: "Drinkmin",
    image: Drinkmin,
    desc: "Refreshing beverage to complete your meal!",
  },
  {
    name: "Family Pan Duo",
    image: FamilyPanDuo,
    desc: "Double the fun with our Family Pan Duo!",
  },
  {
    name: "Jolly Spaghetti Family Pan",
    image: Palabok,
    desc: "Sweet, meaty spaghetti for the family!",
  },
  {
    name: "Super Meal",
    image: SuperMeal,
    desc: "Complete meal with Chickenjoy, rice & sides!",
  },
  {
    name: "Yumburger Family Savers",
    image: YumburgerFamilySavers,
    desc: "Great value burger bundle!",
  },
  {
    name: "Yumburger Half",
    image: YumburgerHalf,
    desc: "Half-sized Yumburger for a quick snack!",
  },
  {
    name: "Yumburger Solo",
    image: YumburgerSolo,
    desc: "Classic Yumburger in its simplest form!",
  },
  {
    name: "Yum Drink",
    image: YumDrink,
    desc: "Pair your meal with a delicious drink!",
  },
];

const ViewMenu = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Best Sellings
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

export default ViewMenu;
