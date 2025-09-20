import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const productList = [
    {
      id: 1,
      name: "Fresh Oyster Mushroom",
      price: "₹200",
      img: "https://addmefoods.com/cdn/shop/files/61Kf4dCcB2L._SX679.jpg?v=1753247860",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      <nav className="text-sm text-gray-600 mb-4">
        <Link to="/" className="hover:underline text-green-700">
          Home
        </Link>{" "}
        / <span className="text-gray-800">Products</span>
      </nav>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora font-semibold mb-8 md:mb-10 text-green-800">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-40 h-40 bg-cover mx-auto mt-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-green-700 font-bold text-lg mb-4">
                {product.price}
              </p>
              <a
                href="https://wa.me/p/24646840698274214/918123279734"
                className="inline-block w-32 text-center bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors duration-200"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
