import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsMagic } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import MyInspiration from "./MyInspiration";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Services data for mobile menu
  const servicesLinks = [
    { to: "/services/moduler_kitchen_&_wardrobe", text: "MODULAR KITCHEN & WARDROBE" },
    { to: "/services/bar_&_lcd_unit", text: "BAR & LCD UNIT" }, 
    { to: "/services/vanities", text: "VANITIES" },
    { to: "/services/bespoke_furniture", text: "BESPOKE FURNITURE" },
    { to: "/services/doors", text: "DOORS" },
    { to: "/services/wall_panelling", text: "WALL PANELLING" },
    { to: "/services/trunkey_interior_projects", text: "TURNKEY INTERIOR PROJECT" },
  ];

  const menuItems = [
    {
      id: "gallery",
      label: "Gallery",
      items: [
        { to: "/gallery/modular-kitchen", text: "Modular Kitchen" },
        { to: "/gallery/wardrobe", text: "Wardrobe" },
        { to: "/gallery/vanity", text: "Vanity" },
        { to: "/gallery/bar-unit", text: "Bar Unit" },
        { to: "/gallery/wall-paneling", text: "Wall Paneling" },
      ],
    },
    {
      id: "services",
      label: "Services",
      items: servicesLinks,
    },
    {
      id: "about",
      label: "About",
      items: [
        { to: "/about/company", text: "Company" },
        { to: "/about/team", text: "Team" },
      ],
    },
    {
      id: "more",
      label: "More",
      items: [
        { to: "/news", text: "News & Events" },
        { to: "/clients", text: "Clients" },
        { to: "/career", text: "Career" },
      ],
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm fixed top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">

          {/* LOGO */}
          <Link to="/">
            <img
              src="https://i.ibb.co/ZRXqYqCF/LD-CUCINE.png"
              className="h-12 object-contain"
              alt="logo"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 items-center">

            {menuItems.map((menu) => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.id)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* MENU TITLE */}
                <div className="flex items-center gap-1 cursor-pointer font-medium text-gray-800 hover:text-[#c9a46c] transition-colors group">
                  {menu.label}
                  <FaChevronDown
                    className={`text-xs transition-all duration-300 ${
                      openMenu === menu.id ? "rotate-180 text-[#c9a46c]" : ""
                    }`}
                  />
                </div>

                {/* DROPDOWN */}
                <div
                  className={`absolute left-0 top-full w-72 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100 origin-top transition-all duration-300 ease-out z-50
                  ${
                    openMenu === menu.id
                      ? "opacity-100 visible translate-y-2 scale-100"
                      : "opacity-0 invisible translate-y-0 scale-95"
                  }`}
                >
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {menu.items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#c9a46c]/10 hover:text-[#c9a46c] transition-all duration-200 border-l-2 border-transparent hover:border-[#c9a46c]"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* MATERIALS LINK */}
            <Link 
              to="/materials" 
              className="font-medium text-gray-800 hover:text-[#c9a46c] transition-colors"
            >
              Materials
            </Link>

            {/* MAGIC ICON */}
            <BsMagic
              className="text-2xl cursor-pointer text-gray-700 hover:text-[#c9a46c] transition-colors"
              onClick={() => setOpenDrawer(true)}
            />
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <HiMenu
              className="text-3xl cursor-pointer text-gray-800"
              onClick={() => setMobileMenu(true)}
            />
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER - IMPROVED WITH SERVICES */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                  <img
                    src="https://i.ibb.co/ZRXqYqCF/LD-CUCINE.png"
                    className="h-10 object-contain"
                    alt="logo"
                  />
                  <HiX
                    className="text-3xl cursor-pointer text-gray-600 hover:text-[#c9a46c]"
                    onClick={() => setMobileMenu(false)}
                  />
                </div>

                <div className="space-y-1">
                  <Link 
                    to="/" 
                    onClick={() => setMobileMenu(false)} 
                    className="block py-3 px-3 text-gray-800 hover:bg-[#c9a46c]/10 hover:text-[#c9a46c] rounded-lg transition-all"
                  >
                    Home
                  </Link>
                  
                  {/* Gallery Section */}
                  <div className="mt-2">
                    <div className="py-2 px-3 text-sm font-semibold text-[#c9a46c] uppercase tracking-wider">
                      Gallery
                    </div>
                    {menuItems[0].items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={() => setMobileMenu(false)}
                        className="block py-2 px-6 text-gray-600 hover:bg-[#c9a46c]/10 hover:text-[#c9a46c] rounded-lg transition-all text-sm"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>

                  {/* Services Section */}
                  <div className="mt-2">
                    <div className="py-2 px-3 text-sm font-semibold text-[#c9a46c] uppercase tracking-wider">
                      Services
                    </div>
                    {servicesLinks.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={() => setMobileMenu(false)}
                        className="block py-2 px-6 text-gray-600 hover:bg-[#c9a46c]/10 hover:text-[#c9a46c] rounded-lg transition-all text-sm"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>

                  {/* About Section */}
                  <div className="mt-2">
                    <div className="py-2 px-3 text-sm font-semibold text-[#c9a46c] uppercase tracking-wider">
                      About
                    </div>
                    {menuItems[2].items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={() => setMobileMenu(false)}
                        className="block py-2 px-6 text-gray-600 hover:bg-[#c9a46c]/10 hover:text-[#c9a46c] rounded-lg transition-all text-sm"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>

                  {/* More Section */}
                  <div className="mt-2">
                    <div className="py-2 px-3 text-sm font-semibold text-[#c9a46c] uppercase tracking-wider">
                      More
                    </div>
                    {menuItems[3].items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={() => setMobileMenu(false)}
                        className="block py-2 px-6 text-gray-600 hover:bg-[#c9a46c]/10 hover:text-[#c9a46c] rounded-lg transition-all text-sm"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>

                  <Link 
                    to="/materials" 
                    onClick={() => setMobileMenu(false)} 
                    className="block py-3 px-3 mt-4 text-gray-800 hover:bg-[#c9a46c]/10 hover:text-[#c9a46c] rounded-lg transition-all"
                  >
                    Materials
                  </Link>
                </div>

                {/* Contact Button in Mobile */}
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setMobileMenu(false);
                      setOpenDrawer(true);
                    }}
                    className="w-full bg-[#c9a46c] text-white py-3 rounded-lg hover:bg-[#b88d4d] transition-colors flex items-center justify-center gap-2"
                  >
                    <BsMagic className="text-xl" />
                    Get Inspired
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* RIGHT DRAWER */}
      <MyInspiration
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </>
  );
};

export default Navbar;