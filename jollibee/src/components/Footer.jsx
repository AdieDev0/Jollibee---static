import React, { useState } from "react";
import { motion } from "framer-motion";
import Apple from "../assets/2022/downloadMobile/Apple-Store-Badge.png";
import Google from "../assets/2022/downloadMobile/Google-Play-Badge.png";
import facebook from "../assets/2022/social/facebook.png";
import instagram from "../assets/2022/social/instagram.png";
import twitter from "../assets/2022/social/twitter.png";
import viber from "../assets/2022/social/viber.png";
import Logo from "../assets/2022/food/JollibeeLogo.png";
import { FaArrowUp } from "react-icons/fa"; // For the back-to-top button

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back-to-top button based on scroll position
  const checkScrollTop = () => {
    if (!showBackToTop && window.pageYOffset > 400) {
      setShowBackToTop(true);
    } else if (showBackToTop && window.pageYOffset <= 400) {
      setShowBackToTop(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-orange-50 to-orange-100 text-gray-800 py-12 px-4 md:px-36"
    >
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        {/* Logo and Order Button */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          <img
            src={Logo}
            alt="Jollibee Logo"
            className="w-24 md:w-60 hover:scale-105 transition-transform duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-bold text-md rounded-full px-6 py-2 shadow-lg mt-4"
          >
            Order Now
          </motion.button>
        </div>

        {/* About Us */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold text-lg text-orange-500 mb-4">About Us</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Jollibee is the largest fast-food chain brand in the Philippines,
            operating a nationwide network of over 1,000 stores. A dominant
            market leader in the Philippines, Jollibee enjoys the lion’s share
            of the local market.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold text-lg text-orange-500 mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {["Home", "Menu", "Locations", "Contact Us"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="hover:text-orange-500 transition"
              >
                <a href="#" className="block">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Follow Us and App Downloads */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="font-bold text-lg text-orange-500 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-3">
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

          <h3 className="font-bold text-lg text-orange-500 mt-6 mb-4">
            Download the App
          </h3>
          <div className="flex justify-center md:justify-start space-x-3">
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

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-300 pt-6 text-gray-600 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Dev.Adie.
        </p>
        <p className="mt-2">
          <span className="text-orange-500">Practice Project</span> |{" "}
          <span className="text-orange-500">Static Website</span>
        </p>
      </div>

      {/* Back-to-Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </motion.footer>
  );
};

export default Footer;