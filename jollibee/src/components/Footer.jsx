import React from "react";
import { motion } from "framer-motion";
import Apple from "../assets/2022/downloadMobile/Apple-Store-Badge.png";
import Google from "../assets/2022/downloadMobile/Google-Play-Badge.png";
import facebook from "../assets/2022/social/facebook.png";
import instagram from "../assets/2022/social/instagram.png";
import twitter from "../assets/2022/social/twitter.png";
import viber from "../assets/2022/social/viber.png";
import Logo from "../assets/2022/food/JollibeeLogo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 text-gray-800 py-6 px-4"
    >
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-6">
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          <img src={Logo} alt="Jollibee Logo" className="w-24 md:w-32" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-bold text-md rounded-full px-6 py-2 shadow-lg mt-4"
          >
            Order Now
          </motion.button>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold text-lg text-orange-500">About Us</h3>
          <p className="text-sm mt-2 text-gray-700 leading-snug">
            Jollibee is the largest fast-food chain brand in the Philippines,
            operating a nationwide network of over 1,000 stores.
          </p>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold text-lg text-orange-500">Quick Links</h3>
          <ul className="text-sm mt-2 space-y-2">
            {["Home", "Menu", "Locations", "Contact Us"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="hover:text-orange-500 transition"
              >
                <a href="#">{link}</a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold text-lg text-orange-500">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-3 mt-2">
            {[facebook, twitter, instagram, viber].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
              >
                <img src={icon} alt="Social Media" className="w-5" />
              </motion.a>
            ))}
          </div>
          <div className="flex justify-center md:justify-start space-x-3 mt-4">
            {[Apple, Google].map((store, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={store}
                  alt="Download Store"
                  className="w-24 shadow-md hover:shadow-lg transition"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t pt-3 text-gray-600 text-xs">
        <p>&copy; 2025 Jollibee. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
