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
  { name: "2-pc. Chickenjoy", image: TwoChick },
  { name: "8-pc. Chickenjoy Bucket", image: EightAndSix },
  { name: "Breakfast Chickenjoy", image: BreakfastChickenJoy },
  { name: "Bucket Treats", image: Bucket },
  { name: "Bucket Treats w/ Rice", image: BucketWRice },
  { name: "Burger Bundle", image: BurgerBundle },
  { name: "Cheesy Yumburger Solo", image: CheesyYumburgerSolo },
  { name: "Chick'n Sandwich Solo", image: ChickSolo },
  { name: "Drinkmin", image: Drinkmin },
  { name: "Family Pan Duo", image: FamilyPanDuo },
  { name: "Jolly Spaghetti Family Pan", image: Palabok },
  { name: "Super Meal", image: SuperMeal },
  { name: "Yumburger Family Savers", image: YumburgerFamilySavers },
  { name: "Yumburger Half", image: YumburgerHalf },
  { name: "Yumburger Solo", image: YumburgerSolo },
  { name: "Yum Drink", image: YumDrink },
];

const ViewMenu = () => {
  return (
    <div className="flex flex-col">
      {/* Sidebar Menu */}
      <SidebarMenu />
      {/* Best Seller */}
      <div className="w-full p-10">
        <p className="text-center font-bold text-3xl mb-20">Best Sellers</p>
        {/* CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMenu;
