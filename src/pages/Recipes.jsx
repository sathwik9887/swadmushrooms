import React from "react";
import { Link } from "react-router-dom";

const Recipes = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      <nav className="text-sm text-gray-600 mb-4">
        <Link to="/" className="hover:underline text-green-700">
          Home
        </Link>{" "}
        / <span className="text-gray-800">Recipes</span>
      </nav>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora font-semibold mb-8 md:mb-10 text-green-800">
        Recipes
      </h1>
    </div>
  );
};

export default Recipes;
