import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../assets/NotFound/NotFound.jpg";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <img src={NotFound} alt="Page Not Found" className="w-80 mb-6" />
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
