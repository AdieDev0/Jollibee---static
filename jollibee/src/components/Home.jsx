import React from "react";
import HomeBanner from "../assets/2021/HomeBanner.png";
import HomeBannerMobile from "../assets/2022/jabee/HomeBannerMobile.png";
import DownloadApp from "../assets/2021/DownloadApp.png";
import EightSeven from "../assets/2021/EightSeven.png";
import OrderPickup from "../assets/2021/OrderPickup.png";
import JollyTreats from "../assets/2025/JollyTreats.jpg";
import JanuaryJoys from "../assets/2024/JanuaryJoys.jpg";
import JoyZone from "../assets/2024/JoyZone.jpg";
import burger from "../assets/2021/burger.png";
import Spag from "../assets/2022/food/Spag.png";
import ChickenJoy from "../assets/2021/ChickenJoy.png";

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
      <div className="px-6 md:px-24 lg:px-64 py-6 md:py-12">
        <div className="flex justify-between">
          <div className="w-full md:w-1/3 flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src={DownloadApp}
              alt=""
              className="mx-auto transition-transform transform hover:scale-105 w-24 md:w-36 lg:w-48"
            />
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-5 transition-colors duration-300 hover:text-red-600">
              Download the App
            </h1>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src={EightSeven}
              alt=""
              className="mx-auto transition-transform transform hover:scale-105 w-24 md:w-36 lg:w-48"
            />
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-5 transition-colors duration-300 hover:text-red-600">
              #87000
            </h1>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <img
              src={OrderPickup}
              alt=""
              className="mx-auto transition-transform transform hover:scale-105 w-24 md:w-36 lg:w-48"
            />
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-5 transition-colors duration-300 hover:text-red-600">
              Order & Pick Up
            </h1>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-0.5 border-t-0 bg-black/20 w-full md:w-3/4 lg:w-6xl mx-auto"></div>

      {/* EXCLUSIVE PROMOS */}
      <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-48">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-10">
          Exclusive Promos
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:justify-between items-center">
          <img
            src={JollyTreats}
            alt=""
            className="w-40 sm:w-56 md:w-72 lg:w-[360px] mb-4 md:mb-0"
          />
          <img
            src={JanuaryJoys}
            alt=""
            className="w-40 sm:w-56 md:w-72 lg:w-[360px] mb-4 md:mb-0"
          />
          <img
            src={JoyZone}
            alt=""
            className="w-40 sm:w-56 md:w-72 lg:w-[360px] mb-4 md:mb-0"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-lg sm:text-xl md:text-3xl rounded-full px-4 sm:px-6 py-2 md:py-4 shadow-lg cursor-pointer">
            See All Promos
          </button>
        </div>
      </div>

      {/* FEATURED MENU ITEMS */}
      <div className="py-12 bg-[#FFEAB8]">
        <h1 className="text-center text-4xl font-bold">Featured Menu Items</h1>
        <div className="">
          <div className="bg-red-600 w-90 h-full p-5 rounded-3xl">
            <p className="text-white font-bold text-xl w-80 mb-5">
              <span className="text-white font-bold text-3xl">
                Chickenjoy Bucket
              </span>{" "}
              Philippines' best-tasting crispylicious, jucylicious.
            </p>
            <img src={ChickenJoy} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
