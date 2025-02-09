import React from "react";
import HomeBanner from "../assets/2021/HomeBanner.png";
const Home = () => {
  return (
    <div>
      <div>
        <img src={HomeBanner} alt="Home Banner" className="w-full relative"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1>Bringing joy to you</h1>
          <h2>
            Have your Jollibee favorites delivered right to your doorstep!
          </h2>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
