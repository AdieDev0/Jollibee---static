import React from "react";
import Egifts from '../assets/Egifts/Egifts.jpg'

const GiftCard = () => {
  return (
    <div>
      <div className="bg-red-600 p-12 text-center">
        <p className="text-white font-bold text-5xl font-roboto">
          Jolly e-Gifts
        </p>
      </div>

      <div className="flex gap-10 items-center px-48 py-5">
        <img src={Egifts} alt="" />
        <div className="grid gap-10 w-2xl">
          <p className="text-4xl font-bold font-roboto text-red-600">Jolly e-Gifts</p>
          <h1>
            A digital platform where customers can conveniently send electronic
            gift codes to family and friends. Jolly e-Gifts are available in the
            form of e-Product Vouchers and e-Gift Certificates which can be
            redeemed at any Jollibee store. Send a joyful treat on any special
            occasion.
          </h1>
          <div className="flex gap-16">
            <button className="bg-orange-400 hover:bg-orange-500 duration-200 text-xl text-white font-bold font-roboto rounded-full p-3 cursor-pointer">Buy e-Gift Certificates</button>
            <button className="border-2 border-red-500 hover:border-red-600 hover:text-red-600 duration-200 text-xl text-red-500 font-bold font-roboto rounded-full p-3 cursor-pointer">Buy e-Product Vouchers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
