import React from "react";
import New from "../assets/New/DeliverySection.webp";
import apple from "../assets/2022/downloadMobile/Apple-Store-Badge.png";
import google from "../assets/2022/downloadMobile/Google-Play-Badge.png";
const Delivery = () => {
  return (
    <>
      <div className="w-full bg-red-600 p-4 md:p-11">
        <h1 className="text-center text-3xl md:text-5xl font-roboto font-bold text-white">
          Jollibee Delivery
        </h1>
      </div>

      <div>
        <div className="flex flex-col md:flex-row px-4 md:px-60 pt-10 md:pt-20 mb-10 gap-6 md:gap-20">
          <div className="items-center grid gap-2 relative">
            {/* Offset Background Shape */}
            <div className="absolute top-5 md:top-20 right-10 md:right-20 h-28 md:h-55 w-40 md:w-100 bg-orange-400 rounded-2xl"></div>
            {/* Image */}
            <img
              src={New}
              alt="Jollibee Delivery"
              className="rounded-xl relative"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-3xl text-red-600 mb-6 md:mb-10">
              Delivery
            </h1>
            <p className="text-base md:text-lg text-black/80">
              Ordering from Jollibee has never been easier! Call #87000, Click
              Order Online to go to JollibeeDelivery.com or tap the Jollibee
              app. Satisfy your cravings and have your Jollibee favorites
              delivered right to your doorstep!
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-xl md:text-2xl rounded-3xl px-6 md:px-8 py-3 md:py-4 shadow-lg mt-4 md:mt-6 cursor-pointer">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-orange-100">
        <div>
          <div>
            <img src="" alt="" />
            <h1>Download the App</h1>
            <div className="h-0.5 border-t-0 bg-black/20 w-full md:w-3/4 lg:w-6xl mx-auto"></div>
            <p>
              Ordering your Jollibee favorites has never been this easy. Enjoy
              App Exclusive deals only on the Jollibee App.
            </p>
            <div className="flex gap-5">
              <img src={apple} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
