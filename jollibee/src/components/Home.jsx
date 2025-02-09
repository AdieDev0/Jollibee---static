import React from "react";
import HomeBanner from "../assets/2021/HomeBanner.png";
const Home = () => {
  return (
    <div>
      <div>
        <img src={HomeBanner} alt="Home Banner" className="w-full relative" />
        <div className="absolute top-80 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-xl grid gap-8">
          <h1 className="text-6xl font-bold ">Bringing joy to you</h1>
          <h2 className="text-3xl font-bold ">
            Have your Jollibee favorites delivered right to your doorstep!
          </h2>
          <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-lg rounded-full px-8 py-3 shadow-lg cursor-pointer mx-auto">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
