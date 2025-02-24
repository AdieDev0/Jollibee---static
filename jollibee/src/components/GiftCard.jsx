import React from "react";
import Egifts from '../assets/Egifts/Egifts.jpg';

const GiftCard = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-red-600 p-6 md:p-12 text-center">
        <p className="text-white font-bold text-3xl md:text-5xl font-roboto">
          Jolly e-Gifts
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center px-4 md:px-12 lg:px-24 py-5">
        {/* Image */}
        <img 
          src={Egifts} 
          alt="Jolly e-Gifts" 
          className="w-full md:w-1/2 lg:w-1/3"
        />

        {/* Text and Buttons */}
        <div className="grid gap-6 md:gap-10 w-full md:w-1/2">
          <p className="text-2xl md:text-4xl font-bold font-roboto text-red-600">
            Jolly e-Gifts
          </p>
          <h1 className="text-lg md:text-xl">
            A digital platform where customers can conveniently send electronic
            gift codes to family and friends. Jolly e-Gifts are available in the
            form of e-Product Vouchers and e-Gift Certificates which can be
            redeemed at any Jollibee store. Send a joyful treat on any special
            occasion.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <button className="bg-orange-400 hover:bg-orange-500 duration-200 text-lg md:text-xl text-white font-bold font-roboto rounded-full py-2 px-6 cursor-pointer">
              Buy e-Gift Certificates
            </button>
            <button className="border-2 border-red-500 hover:border-red-600 hover:text-red-600 duration-200 text-lg md:text-xl text-red-500 font-bold font-roboto rounded-full py-2 px-6 cursor-pointer">
              Buy e-Product Vouchers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;