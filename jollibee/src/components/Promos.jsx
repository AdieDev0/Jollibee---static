import React from "react";
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

const Promos = () => {
  return (
    <div>
      {/* Promos Header */}
      <div className="bg-red-600 p-12 text-center">
        <p className="text-white font-bold text-5xl font-roboto">Promos</p>
      </div>

      <div className="bg-white p-10">
        <h1 className="text-4xl font-roboto font-bold text-center text-red-600 mb-6">
          Jollibee Promo
        </h1>
        <p className="text-center text-gray-700 font-roboto mb-10">
          Get more JOY with these exciting promos! Take advantage of these
          exclusive and limited-time offers to get big discounts and freebies!
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center px-40">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden w-full max-w-md"
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
            </div>
          ))}
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Promos;
