import React, { useState, useEffect } from "react";
import Pickles from "../assets/swadmushrooms.png";

const Home = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1668243631478-b7e3bb34f0ff?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621966405045-b5d9360797f6?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621455799534-deab8a1c1d89?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1622370387370-3eec28a387c0?w=1200&auto=format&fit=crop&q=80",
  ];

  const gridImages = [
    {
      src: "https://plus.unsplash.com/premium_photo-1671377388704-c7b6a543dde8?w=500&auto=format&fit=crop&q=80",
      title: "Fresh Oyster Mushroom",
    },
    {
      src: Pickles,
      title: "Specials",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1671397681247-abe9cea66a11?w=1200&auto=format&fit=crop&q=80",
      title: "Dry Oyster Mushroom",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(heroImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section
        className="h-screen flex flex-col items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[current]})`,
        }}
      >
        <div className="p-8 text-center">
          <h1 className="font-lora text-4xl sm:text-4xl md:text-6xl lg:text-6xl mb-10 text-white font-bold">
            Welcome to Swad Mushrooms
          </h1>
          <p className="mt-4 lg:text-2xl sm:text-xl md:text-xl text-white">
            Fresh & Organic Oyster Mushrooms from farm to table
          </p>
          <button
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Shop Now
          </button>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center bg-cover bg-center transition-all duration-1000 ">
        <h4 className="text-center text-black text-base font-thin font-lora mt-10">
          Locally grown and sourced, our range of offerings fit perfectly across
          kitchens and cuisines!
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center bg-cover bg-center p-12 ">
        {gridImages.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-white lg:text-xl md:text-lg sm:text-base font-semibold font-lora">
                {item.title}
              </h3>
              <a
                href="#products"
                className="mt-4 bg-green-600 text-white lg:px-6 lg:py-2 md:px-4 md:py-1 sm:px-3 sm:py-1 px-2 py-1 rounded-full hover:bg-green-700 transition"
              >
                View All
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-2">
        <a
          href="#products"
          className="bg-green-600 text-white py-3 px-6  hover:bg-green-700 hover:text-white transition uppercase"
        >
          View All
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-2xl font-lora font-semibold mb-10">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <img
              src={selectedImage}
              alt="Mushroom Medley"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 font-lora">
              Mushroom Medley
            </h3>
            <p className="text-xl font-medium text-gray-800 mb-4">₹ 300</p>

            <select className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4">
              <option>Surprise Me</option>
              <option>Fresh Pack</option>
              <option>Dry Pack</option>
            </select>

            <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-black transition">
              BUY IT NOW
            </button>
            <div className="flex gap-4 mt-4">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                    selectedImage === img
                      ? "border-green-600"
                      : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 py-10">
        <section className="relative flex justify-center items-center py-20 bg-gray-50">
          <img
            src="https://plus.unsplash.com/premium_photo-1682094008797-99c46d6b8728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRlYW0lMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Our Story"
            className="w-full max-w-6xl rounded-lg shadow-lg  mx-auto"
          />

          <div className="absolute bottom-16 transform translate-y-1/2 bg-white shadow-lg rounded-lg p-4 w-80 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-gray-600 mt-2 text-sm p-4">
              Swad Mushrooms started as a simple endeavour to fill a void in the
              market — that of easy availability of different varieties of
              mushrooms.
            </p>
            <a href="#" className="text-blue-600 mt-4 text-sm hover:underline">
              Read More
            </a>
          </div>
        </section>
      </div>
      <div className="max-w-full mx-auto px-4 py-10">
        <section className="relative flex justify-center items-center py-20">
          <h1 className="text-center text-2xl font-lora font-semibold mb-10">
            Cook with us
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Home;
