import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "Recipes", path: "/recipes" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img className="w-16 rounded-full" src={Logo} alt="logo" />

        <ul className="hidden lg:flex space-x-6 font-normal text-gray-800 font-lora">
          {menus.map((menu, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-green-700 transition"
            >
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/918123279734"
          className="hidden lg:inline-block bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
        >
          Shop Now
        </a>

        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg w-full py-6">
          <ul className="flex flex-col items-center space-y-4 font-medium text-gray-800 font-lora">
            {menus.map((menu, idx) => (
              <li key={idx} className="text-xl">
                <Link to={menu.path} onClick={() => setIsOpen(false)}>
                  {menu.name}
                </Link>
              </li>
            ))}
            <a
              href="https://wa.me/918123279734"
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition mt-4"
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
