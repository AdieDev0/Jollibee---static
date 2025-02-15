import React from "react";

const Delivery = () => {
  return (
    <>
      <div className="w-full bg-red-600 p-11">
        <h1 className="text-center justify text-5xl font-roboto font-bold text-white">
          Jollibee Delivery
        </h1>
      </div>

      <div>
        <img src="" alt="" />
        <div>
          <h1>Delivery</h1>
          <p>
            Ordering from Jollibee has never been easier! Call #87000, Click
            Order Online to go to JollibeeDelivery.com or tap the Jollibee app.
            Satisfy your cravings and have your Jollibee favorites delivered
            right to your doorstep!
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-3xl rounded-full px-8 py-4 shadow-lg mt-6 cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Delivery;
