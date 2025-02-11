import React from "react";
import HomeBanner from "../assets/2021/HomeBanner.png";
import HomeBannerMobile from "../assets/2022/jabee/HomeBannerMobile.png";
import DownloadApp from "../assets/2021/DownloadApp.png";
import EightSeven from "../assets/2021/EightSeven.png";
import OrderPickup from "../assets/2021/OrderPickup.png";

const Home = () => {
  return (
    <>
      {/* HOME PAGE */}
      <div className="relative">
        {/* Desktop Banner */}
        <div className="hidden md:block relative">
          <img src={HomeBanner} alt="Home Banner" className="w-full" />
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full max-w-2xl px-6">
            <h1 className="text-6xl font-bold">Bringing joy to you</h1>
            <h2 className="text-3xl font-bold mt-4">
              Have your Jollibee favorites delivered right to your doorstep!
            </h2>
            <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-3xl rounded-full px-8 py-4 shadow-lg mt-6 cursor-pointer">
              Order Now
            </button>
          </div>
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden relative">
          <img
            src={HomeBannerMobile}
            alt="Home Banner Mobile"
            className="w-full"
          />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-6">
            <h1 className="text-4xl font-bold">Bringing joy to you</h1>
            <h2 className="text-2xl font-bold mt-4">
              Have your Jollibee favorites delivered right to your doorstep!
            </h2>
            <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-2xl rounded-full px-6 py-3 shadow-lg mt-6 cursor-pointer">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* 3 CIRCLE */}
      <div className="px-6 md:px-24 lg:px-64 py-12">
        <div className="flex justify-between">
          <div className="w-full md:w-1/3 items-center text-center mb-8 md:mb-0">
            <img
              src={DownloadApp}
              alt=""
              className="mx-auto transition-transform transform hover:scale-105"
            />
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mt-5 transition-colors duration-300 hover:text-red-600">
              Download the App
            </h1>
          </div>
          <div className="w-full md:w-1/3 items-center text-center mb-8 md:mb-0">
            <img
              src={EightSeven}
              alt=""
              className="mx-auto transition-transform transform hover:scale-105"
            />
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mt-5 transition-colors duration-300 hover:text-red-600">
              #87000
            </h1>
          </div>
          <div className="w-full md:w-1/3 items-center text-center">
            <img
              src={OrderPickup}
              alt=""
              className="mx-auto transition-transform transform hover:scale-105"
            />
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mt-5 transition-colors duration-300 hover:text-red-600">
              Order & Pick Up
            </h1>
          </div>
        </div>
      </div>
      {/* DIVIDER */}
      <div className="my-8 h-0.5 border-t-0 bg-black/20 w-full md:w-3/4 lg:w-6xl mx-auto"></div>
    </>
  );
};

export default Home;
