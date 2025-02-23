import React from "react";
import JanJoys from "../assets/Promos/JanJoys.jpg";
import JoyZone from "../assets/Promos/JoyZone.jpg";
import JTreats from "../assets/Promos/JTreats.jpg";
import KidsParty from "../assets/Promos/KidsParty.jpg";
import MixMatch from "../assets/Promos/MixMatch.jpg";
import Vday from "../assets/Promos/Vday.jpg";
import Vvibes from "../assets/Promos/Vvibes.jpg";

const Promos = () => {
  return (
    <div>
      {/* Promos */}
      <div className="bg-red-600 p-12">
        <p className="text-white font-bold text-5xl font-roboto text-center">
          Promos
        </p>
      </div>

      <div className="bg-white p-10">
        <h1 className="text-4xl font-roboto font-bold text-center text-red-600 mb-10">
          Jollibee Promo
        </h1>
        <p className=" text-center text-black font-roboto">
          Get more JOY with these exciting promos! Take advantage of these
          exclusive and limited time only offers and deals to get big discounts
          and freebies!
        </p>

        {/* Cards */}
        <div></div>
      </div>
    </div>
  );
};

export default Promos;
