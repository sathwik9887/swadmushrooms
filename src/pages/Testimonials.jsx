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
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-lora font-semibold mb-8 text-green-800 text-center">
        Testimonials
      </h1>

      <p className="text-center text-gray-700 mb-10">
        See what our customers are saying about Swad Mushrooms.
      </p>

      {/* ✅ Tagembed Widget */}
      <div
        className="tagembed-widget"
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        data-widget-id="301087"
        data-website="1"
      ></div>

      {/* ✅ Google Reviews Widget */}
      <div
        className="review-widget_net"
        data-uuid="5b2bc698-75d9-4b50-8e06-14f411b374df"
        data-template="3"
        data-lang="en"
        data-theme="light"
      ></div>
    </div>
  );
};

export default Testimonials;
