import React, { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    const tagembedScript = document.createElement("script");
    tagembedScript.src = "https://widget.tagembed.com/embed.min.js";
    tagembedScript.async = true;
    document.body.appendChild(tagembedScript);

    const reviewsScript = document.createElement("script");
    reviewsScript.src = "https://grwapi.net/widget.min.js";
    reviewsScript.async = true;
    document.body.appendChild(reviewsScript);

    return () => {
      document.body.removeChild(tagembedScript);
      document.body.removeChild(reviewsScript);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-lora font-bold text-green-800">
            What Our Customers Say
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Real feedback from people who love{" "}
            <span className="font-semibold text-green-700">Swad Mushrooms</span>
            .
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">
            Google Reviews
          </h2>
          <div
            className="tagembed-widget w-full h-[420px] rounded-xl overflow-hidden"
            data-widget-id="301087"
            data-website="1"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
