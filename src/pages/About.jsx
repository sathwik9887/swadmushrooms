import React from "react";
import MushroomImage from "../assets/swadmushrooms.png";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora font-semibold mb-8 md:mb-10 text-green-800">
        About Swad Mushrooms
      </h1>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
        At <span className="font-semibold text-green-700">Swad Mushrooms</span>,
        we believe that good food begins with natural, healthy ingredients. Our
        journey started with a simple mission — to provide{" "}
        <span className="font-semibold">
          farm-fresh, chemical-free oyster mushrooms
        </span>{" "}
        that bring both taste and health to every plate.
      </p>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
        We specialize in cultivating high-quality{" "}
        <span className="font-semibold">oyster mushrooms</span> using natural
        farming methods. With careful hygiene practices and sustainable
        techniques, our mushrooms are grown in controlled conditions that ensure
        the right texture, taste, and nutrition.
      </p>

      <div className="my-10 flex justify-center">
        <img
          src={MushroomImage}
          alt="Fresh Oyster Mushrooms"
          className="rounded-xl shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 object-cover"
        />
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-lora font-semibold mb-6 text-green-800">
        Why Choose Swad Mushrooms?
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg md:text-xl text-gray-800 mb-10">
        <li>
          ✅ 100% Natural & Fresh – Straight from our farm to your kitchen
        </li>
        <li>✅ Chemical-Free & Preservative-Free</li>
        <li>✅ Rich in Protein, Fiber & Essential Nutrients</li>
        <li>✅ Supplying Households, Restaurants & Retail Stores</li>
        <li>✅ Retail & Wholesale Availability</li>
      </ul>

      {/* Promise Box */}
      <div className="mt-12 bg-green-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-lora font-semibold text-green-800 mb-4">
          Our Promise
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          We promise to provide fresh, natural, and healthy mushrooms that bring
          joy to your meals. With Swad Mushrooms, you don’t just eat —{" "}
          <span className="font-semibold">you eat fresh, you eat healthy</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
