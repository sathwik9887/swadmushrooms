import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const socialLinks = [
    {
      href: "mailto:swadmushrooms@gmail.com",
      icon: <BiLogoGmail size={22} />,
      hoverColor: "hover:text-red-500",
    },
    {
      href: "https://www.facebook.com/swadmushrooms",
      icon: <FaFacebookF size={20} />,
      hoverColor: "hover:text-blue-600",
    },
    {
      href: "https://www.instagram.com/swadmushrooms/",
      icon: <FaInstagram size={20} />,
      hoverColor: "hover:text-pink-500",
    },
    {
      href: "https://wa.me/918123279734",
      icon: <FaWhatsapp size={20} />,
      hoverColor: "hover:text-green-500",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-semibold text-black">Swad Mushrooms</h3>
        <p className="text-sm text-black mt-2">
          © {new Date().getFullYear()} Swad Mushrooms. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-black transition-colors duration-300 ${link.hoverColor}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
