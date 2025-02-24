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

      <div className="flex gap-10 items-center">
        <img src={Egifts} alt="" />
        <div className="grid gap-5">
          <p className="text-4xl font-bold font-roboto text-red-600">Jolly e-Gifts</p>
          <h1>
            A digital platform where customers can conveniently send electronic
            gift codes to family and friends. Jolly e-Gifts are available in the
            form of e-Product Vouchers and e-Gift Certificates which can be
            redeemed at any Jollibee store. Send a joyful treat on any special
            occasion.
          </h1>
          <div className="flex gap-5">
            <button>Buy e-Gift Certificates</button>
            <button>Buy e-Product Vouchers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
