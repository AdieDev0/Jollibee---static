import React from "react";
import { motion } from "framer-motion";
import Egifts from "../assets/Egifts/Egifts.jpg";

const GiftCard = () => {
  return (
    <div>
      {/* Header Section */}
      <motion.div
        className="bg-red-600 p-6 md:p-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white font-bold text-3xl md:text-5xl font-roboto">
          Jolly e-Gifts
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center px-4 md:px-12 lg:px-24 py-5">
        {/* Image */}
        <motion.img
          src={Egifts}
          alt="Jolly e-Gifts"
          className="w-full md:w-1/2 lg:w-1/4 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text and Buttons */}
        <motion.div
          className="grid gap-6 md:gap-10 w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl md:text-4xl font-bold font-roboto text-red-600">
            Jolly e-Gifts
          </p>
          <h1 className="text-lg md:text-xl leading-relaxed text-gray-700">
            A digital platform where customers can conveniently send electronic
            gift codes to family and friends. Jolly e-Gifts are available in the
            form of e-Product Vouchers and e-Gift Certificates, redeemable at any
            Jollibee store. Send a joyful treat on any special occasion.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <motion.button
              className="bg-orange-400 hover:bg-orange-500 duration-200 text-lg md:text-xl text-white font-bold font-roboto rounded-full py-2 px-6 cursor-pointer shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy e-Gift Certificates
            </motion.button>
            <motion.button
              className="border-2 border-red-500 hover:border-red-600 hover:text-red-600 duration-200 text-lg md:text-xl text-red-500 font-bold font-roboto rounded-full py-2 px-6 cursor-pointer shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy e-Product Vouchers
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GiftCard;
