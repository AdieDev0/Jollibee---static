import React from "react";
import New from "../assets/New/DeliverySection.webp";
import apple from "../assets/2022/downloadMobile/Apple-Store-Badge.png";
import google from "../assets/2022/downloadMobile/Google-Play-Badge.png";
import DownloadApp from "../assets/2021/DownloadApp.png";
import EightSeven from "../assets/2021/EightSeven.png";
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

      <div className="bg-[#FFEAB8] p-6 md:p-10 flex justify-center">
        {/* 1st Card */}
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">
          <div className="p-10">
            <img
              src={DownloadApp}
              alt="Download App"
              className="rounded-lg mb-4 mx-auto"
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Download the App
            </h1>
            <div className="h-2 bg-orange-400 w-full mb-4 rounded-xl"></div>
            <p className="text-base md:text-lg text-center">
              Ordering your Jollibee favorites has never been this easy. Enjoy
              App Exclusive deals only on the Jollibee App.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <img src={apple} alt="Apple Store" className="w-20 md:w-40" />
              <img src={google} alt="Google Play" className="w-20 md:w-40" />
            </div>
          </div>
        </div>
        {/* 2nd Card */}
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">
          <div className="p-10">
            <img
              src={EightSeven}
              alt="Download App"
              className="rounded-lg mb-4 mx-auto"
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Call #87000
            </h1>
            <div className="h-2 bg-orange-400 w-full mb-4 rounded-xl"></div>
            <p className="text-base md:text-lg text-center">
              Jollibee delivery is just a call away! Call #87000 to order your
              Jollibee favorites! Don’t forget the hashtag!
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-xl md:text-xl rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg mt-4 md:mt-6 cursor-pointer mx-auto block">
              #87000
            </button>
          </div>
        </div>
        {/* 3rd Card */}
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">
          <div className="p-10">
            <img
              src={EightSeven}
              alt="Download App"
              className="rounded-lg mb-4 mx-auto"
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Multi-Delivery
            </h1>
            <div className="h-2 bg-orange-400 w-full mb-4 rounded-xl"></div>
            <p className="text-base md:text-lg text-center">
              Order your Jollibee favorites and send to multiple recipients and
              addresses.
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-xl md:text-xl rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg mt-4 md:mt-6 cursor-pointer mx-auto block">
              Order for Multi-Delivery
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
