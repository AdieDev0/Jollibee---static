import React from "react";
import { motion } from "framer-motion";
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
import BeefSteak from "../assets/2022/food/BeefSteak.png";
import WhatWeDo from "../assets/2021/WhatWeDo.png";
import WhatWeStandFor from "../assets/2022/jabee/WhatWeStandFor.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* HOME PAGE */}
      <div className="relative">
        {/* Desktop Banner */}
        <div className="hidden md:block relative">
          <motion.img
            src={HomeBanner}
            alt="Home Banner"
            className="w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full max-w-2xl px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-6xl font-bold">Bringing joy to you</h1>
            <h2 className="text-3xl font-bold mt-4">
              Have your Jollibee favorites delivered right to your doorstep!
            </h2>
            <motion.button
              className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-3xl rounded-full px-8 py-4 shadow-lg mt-6 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden relative">
          <motion.img
            src={HomeBannerMobile}
            alt="Home Banner Mobile"
            className="w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-4xl font-bold">Bringing joy to you</h1>
            <h2 className="text-2xl font-bold mt-4">
              Have your Jollibee favorites delivered right to your doorstep!
            </h2>
            <motion.button
              className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-2xl rounded-full px-6 py-3 shadow-lg mt-6 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 3 CIRCLE */}
      <div className="px-6 md:px-24 lg:px-64 py-6 md:py-12">
        <div className="flex justify-between">
          {[
            { src: DownloadApp, text: "Download the App" },
            { src: EightSeven, text: "#87000" },
            { src: OrderPickup, text: "Order & Pick Up" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 flex flex-col items-center text-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.img
                src={item.src}
                alt=""
                className="mx-auto transition-transform transform hover:scale-105 w-24 md:w-36 lg:w-48"
                whileHover={{ scale: 1.1 }}
              />
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-5 transition-colors duration-300 hover:text-red-600">
                {item.text}
              </h1>
            </motion.div>
          ))}
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
          {[JollyTreats, JanuaryJoys, JoyZone].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt=""
              className="w-40 sm:w-56 md:w-72 lg:w-[360px] mb-4 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <motion.button
            className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-lg sm:text-xl md:text-3xl rounded-full px-4 sm:px-6 py-2 md:py-4 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            See All Promos
          </motion.button>
        </div>
      </div>

      {/* FEATURED MENU ITEMS */}
      <div className="py-12 bg-[#FFEAB8]">
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
          Featured Menu Items
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          {[
            {
              src: ChickenJoy,
              title: "Chickenjoy Bucket",
              description: "Philippines' best-tasting crispylicious, juicylicious.",
              bgColor: "bg-red-600",
            },
            {
              src: Spag,
              title: "Spaghetti Pan",
              description: "The meatiest, cheesiest, and sweet-sarap Jolly Spaghetti!",
              bgColor: "bg-yellow-600",
            },
            {
              src: burger,
              title: "Yumburger",
              description: "Your favorite 100% Beefy Langhap-Sarap Burgers.",
              bgColor: "bg-sky-400",
            },
            {
              src: BeefSteak,
              title: "Burger Steak",
              description: "100% pure beef patty with a hearty serving of flavorful mushroom gravy.",
              bgColor: "bg-orange-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${item.bgColor} flex flex-col items-center justify-between p-5 rounded-3xl h-full`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h1 className="text-white font-bold text-2xl sm:text-3xl text-center">
                {item.title}
              </h1>
              <p className="text-white font-bold text-lg sm:text-xl text-center mb-10">
                {item.description}
              </p>
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-32 sm:w-40 md:w-48 lg:w-52 mx-auto mt-auto"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <motion.button
            className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-lg sm:text-xl md:text-3xl rounded-full px-4 sm:px-6 py-2 md:py-4 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Menu
          </motion.button>
        </div>
      </div>

      {/* 2 CARDS */}
      <div className="flex lg:flex-row flex-col  justify-between px-4 sm:px-8 md:px-16 lg:px-68 py-12">
        {[
          {
            src: WhatWeStandFor,
            title: "What We Do",
            description: "Jollibee's Mission is to serve great-tasting food, bringing the joy of eating to everyone.",
            bgColor: "bg-yellow-600",
          },
          {
            src: WhatWeDo,
            title: "What We Stand For",
            description: "Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.",
            bgColor: "bg-red-600",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-between"
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="w-sm items-center grid gap-2 relative">
              {/* Offset Background Shape */}
              <div className={`absolute top-5 ${index === 0 ? "left-30" : "right-30"} h-55 w-55 ${item.bgColor} rounded-2xl`}></div>
              {/* Image */}
              <img
                src={item.src}
                alt=""
                className="mx-auto rounded-2xl relative"
              />

              {/* Text Content */}
              <div className="grid gap-4 mt-8">
                <h1 className="text-center font-bold text-3xl">{item.title}</h1>
                <div className={`h-1 border-t-0 w-55 ${index === 0 ? "bg-orange-400" : "bg-red-600"} mx-auto`}></div>
                <p className="text-center text-lg font-oswald text-black/80">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="h-1 border-t-0 bg-orange-400 w-full"></div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;