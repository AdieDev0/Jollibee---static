import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import BucketPalabokPlatter from "../assets/Menu/Palabok/BucketPalabokPlatter.webp";
import ChickenjoyPalabok from "../assets/Menu/Palabok/ChickenjoyPalabok.webp";
import PalabokPlatter from "../assets/Menu/Palabok/PalabokPlatter.webp";
import PalabokSolo from "../assets/Menu/Palabok/PalabokSolo.webp";

const menuItems = [
  {
    name: "Palabok Solo",
    image: PalabokSolo,
    desc: "A classic favorite-premium bihon noodles topped with Jollibee’s saucy-tasty signature sauce and loaded with delicious toppings!",
  },
  {
    name: "1 - pc. Chickenjoy w/ Palabok",
    image: ChickenjoyPalabok,
    desc: "Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite Palabok; saucy-tasty, loaded with toppings!",
  },
  {
    name: "Palabok Family Pan",
    image: PalabokPlatter,
    desc: "Your classic favorite Palabok, saucy-tasty, loaded with toppings, for sharing with the whole family! Good for 4-5 pax.",
  },
  {
    name: "Chickenjoy Bucket w/ Palabok Family Pan",
    image: BucketPalabokPlatter,
    desc: "Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite Palabok Family Pan; saucy-tasty, loaded with toppings!",
  },
];

const Palabok = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-xl hidden lg:block sticky top-0 h-screen">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <p className="text-center font-extrabold text-4xl font-oswald text-black/80 mb-12">
          Palabok
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

export default Palabok;
