import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);

  return (
    <nav className="bg-[#D6001C] px-6 md:px-44 py-5 md:py-3 flex justify-end items-center border-b-4 border-b-yellow-500 sticky z-50 top-0">
      {/* Mobile Menu Button */}
      <button
        className="text-white md:hidden text-3xl"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-end items-center gap-8">
        <NavLink to="/delivery">
          <li className="text-lg font-bold text-white cursor-pointer">
            Delivery
          </li>
        </NavLink>
        <li className="text-lg font-bold text-white cursor-pointer">
          Location
        </li>

        {/* Dropdown Menus */}
        <DropdownMenu title="Menu">
          <MenuItem>
            <NavLink to="/ViewMenu" className="block px-4 py-2 text-gray-700">
              View Menu
            </NavLink>
          </MenuItem>
          <MenuItem>
            <button className="block w-full text-left px-4 py-2 text-gray-700">
              Multi-Delivery
            </button>
          </MenuItem>
        </DropdownMenu>

        <DropdownMenu title="Promotion">
          <MenuItem>
            <NavLink to="/Promos">
              <a href="#" className="block px-4 py-2 text-gray-700">
                Promos
              </a>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="GiftCard">
              <a href="#" className="block px-4 py-2 text-gray-700">
                Gift Cards
              </a>
            </NavLink>
          </MenuItem>
        </DropdownMenu>

        <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-lg rounded-full px-8 py-3 shadow-lg cursor-pointer">
          Order Now
        </button>
      </ul>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed inset-0 z-50 bg-black/40 flex"
        >
          <div className="bg-white w-80 h-full p-5 shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <IoMdClose className="w-6 h-6" />
            </button>
            <ul className="flex flex-col gap-4 mt-10">
              <NavLink to="/delivery">
                <li className="text-lg font-bold cursor-pointer">Delivery</li>
              </NavLink>
              <li className="text-lg font-bold cursor-pointer">Location</li>

              {/* Mobile Dropdown Menus */}
              <li>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex justify-between items-center w-full text-lg font-bold"
                >
                  Menu{" "}
                  <FaAngleDown
                    className={`ml-2 ${menuOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {menuOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <NavLink to="/ViewMenu" className="block text-gray-700">
                      View Menu
                    </NavLink>
                    <li className="text-gray-700">Multi-Delivery</li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => setPromoOpen(!promoOpen)}
                  className="flex justify-between items-center w-full text-lg font-bold"
                >
                  Promotion{" "}
                  <FaAngleDown
                    className={`ml-2 ${promoOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {promoOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <NavLink to="/Promos">
                      <li className="text-gray-700">Promos</li>
                    </NavLink>
                    <NavLink to="/GiftCard">
                      <li className="text-gray-700">Gift Cards</li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <button className="bg-orange-400 hover:bg-orange-500 duration-300 text-white font-bold text-lg rounded-full px-6 py-3 shadow-lg cursor-pointer">
                Order Now
              </button>
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const DropdownMenu = ({ title, children }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex items-center gap-x-1.5 py-2 font-bold text-lg text-white cursor-pointer">
        {title}
        <FaAngleDown className="size-5 text-white" />
      </MenuButton>
      <MenuItems
        as={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="absolute right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5"
      >
        <div className="py-1">{children}</div>
      </MenuItems>
    </Menu>
  );
};

export default Navbar;
