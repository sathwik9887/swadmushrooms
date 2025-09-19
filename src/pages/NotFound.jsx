import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="mb-6 text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
