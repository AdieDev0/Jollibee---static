import React, { useState } from "react";
import New from "../assets/New/DeliverySection.webp";
import group from "../assets/New/group.webp";
import apple from "../assets/2022/downloadMobile/Apple-Store-Badge.png";
import google from "../assets/2022/downloadMobile/Google-Play-Badge.png";
import DownloadApp from "../assets/2021/DownloadApp.png";
import EightSeven from "../assets/2021/EightSeven.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Icon component for the Accordion
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Delivery = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-red-600 p-4 md:p-11">
        <h1 className="text-center text-3xl md:text-5xl font-roboto font-bold text-white">
          Jollibee Delivery
        </h1>
      </div>

      {/* Delivery Section */}
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

      {/* Cards Section */}
      <div className="bg-[#FFEAB8] p-6 md:p-10 flex flex-col md:flex-row justify-center gap-6 md:gap-10">
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
              src={group}
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
            <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-xl md:text-xl rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg mt-4 md:mt-14 cursor-pointer mx-auto block">
              Order for Multi-Delivery
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="container mx-auto px-4 md:px-60 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          {/* Accordion 1 */}
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-orange-50 to-orange-100"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="px-6 py-4 text-left text-lg md:text-xl font-semibold text-gray-800 hover:text-red-600 transition-colors flex items-center"
            >
              What is Jollibee Delivery?
            </AccordionHeader>
            <AccordionBody className="px-6 py-4 text-base md:text-lg text-gray-700 bg-white rounded-b-xl">
              Jollibee Delivery is a service that allows you to order your
              favorite Jollibee meals online or via phone and have them
              delivered straight to your doorstep.
            </AccordionBody>
          </Accordion>

          {/* Accordion 2 */}
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-orange-50 to-orange-100"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="px-6 py-4 text-left text-lg md:text-xl font-semibold text-gray-800 hover:text-red-600 transition-colors flex items-center"
            >
              How can I place an order?
            </AccordionHeader>
            <AccordionBody className="px-6 py-4 text-base md:text-lg text-gray-700 bg-white rounded-b-xl">
              You can place an order by calling #87000, using the Jollibee app,
              or visiting JollibeeDelivery.com.
            </AccordionBody>
          </Accordion>

          {/* Accordion 3 */}
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-orange-50 to-orange-100"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="px-6 py-4 text-left text-lg md:text-xl font-semibold text-gray-800 hover:text-red-600 transition-colors flex items-center"
            >
              What payment methods are accepted?
            </AccordionHeader>
            <AccordionBody className="px-6 py-4 text-base md:text-lg text-gray-700 bg-white rounded-b-xl">
              We accept cash on delivery, credit/debit cards, and digital
              wallets like GCash and PayMaya.
            </AccordionBody>
          </Accordion>
        </div>

        <h1 className="underline font-bold text-red-600 hover:text-red-700 duration-200 text-xl text-center mt-20 cursor-pointer">More Question & Answer</h1>
      </div>

      
    </>
  );
};

export default Delivery;
