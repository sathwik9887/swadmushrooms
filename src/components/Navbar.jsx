import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { LuMenu, LuX, LuChevronDown } from "react-icons/lu";
import { NavLink } from "react-router-dom"; // ✅ use NavLink

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Shop",
      path: "/shop/collections",
      submenu: [
        { name: "Fresh Oyster", path: "/shop/fresh-oyster" },
        { name: "Dry Oyster", path: "/shop/dry-oyster" },
        { name: "Specials", path: "/shop/specials" },
        { name: "All Products", path: "/shop/collections" },
      ],
    },
    { name: "Products", path: "/products" },
    { name: "Recipes", path: "/recipes" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-2">
        <img className="w-16 rounded-full" src={Logo} alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-normal text-gray-800 font-lora relative">
          {menus.map((menu, idx) => (
            <li
              key={idx}
              className="relative cursor-pointer transition group"
              onMouseEnter={() => menu.submenu && setIsShopOpen(true)}
              onMouseLeave={() => menu.submenu && setIsShopOpen(false)}
            >
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center hover:text-green-700 ${
                    isActive
                      ? "text-green-700 font-semibold border-b-2 border-green-700"
                      : ""
                  }`
                }
              >
                {menu.name}
                {menu.submenu && <LuChevronDown className="ml-1" size={16} />}
              </NavLink>

              {menu.submenu && isShopOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  {menu.submenu.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="px-4 py-2 hover:bg-green-50 hover:text-green-700 transition"
                    >
                      <NavLink
                        to={sub.path}
                        className={({ isActive }) =>
                          isActive ? "text-green-700 font-semibold" : ""
                        }
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918123279734"
          className="hidden lg:inline-block bg-green-700 text-white px-6 py-2 rounded-sm hover:bg-green-800 transition"
        >
          Shop Now
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg w-full py-6">
          <ul className="flex flex-col items-center space-y-4 font-medium text-gray-800 font-lora">
            {menus.map((menu, idx) => (
              <li key={idx} className="text-xl w-full text-center">
                {!menu.submenu ? (
                  <NavLink
                    to={menu.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "text-green-700 font-semibold" : ""
                    }
                  >
                    {menu.name}
                  </NavLink>
                ) : (
                  <div>
                    <button
                      className="flex items-center justify-center w-full"
                      onClick={() => setIsShopOpen(!isShopOpen)}
                    >
                      {menu.name}
                      <LuChevronDown
                        className={`ml-1 transition ${
                          isShopOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isShopOpen && (
                      <ul className="mt-2 space-y-2">
                        {menu.submenu.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <NavLink
                              to={sub.path}
                              onClick={() => setIsOpen(false)}
                              className={({ isActive }) =>
                                `block text-gray-600 hover:text-green-700 ${
                                  isActive ? "text-green-700 font-semibold" : ""
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
            <a
              href="https://wa.me/918123279734"
              className="bg-green-700 text-white px-6 py-2 rounded-sm hover:bg-green-800 transition mt-4"
            >
              Shop Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
