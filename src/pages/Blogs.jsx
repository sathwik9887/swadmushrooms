import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  // Dummy blogs (replace with API data later)
  const blogPosts = [
    {
      id: 1,
      title: "Benefits of Oyster Mushrooms",
      date: "September 20, 2025",
      excerpt:
        "Discover how oyster mushrooms can boost your immunity, improve gut health, and add nutrition to your meals.",
      image: "https://via.placeholder.com/400x250?text=Oyster+Mushrooms",
    },
    {
      id: 2,
      title: "How to Grow Mushrooms at Home",
      date: "September 10, 2025",
      excerpt:
        "Step-by-step guide to grow your own mushrooms easily with minimal setup and care.",
      image: "https://via.placeholder.com/400x250?text=Grow+Mushrooms",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Swad Mushrooms | Blogs</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:underline text-green-700">
            Home
          </Link>{" "}
          / <span className="text-gray-800">Blogs</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora font-semibold mb-10 text-green-800">
          Latest Blogs
        </h1>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-lg font-semibold text-green-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <Link
                  to={`/blogs/${post.id}`}
                  className="text-green-700 text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
