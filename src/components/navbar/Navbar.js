import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-xl rounded-md">
      <div className="p-5 flex flex-col sm:flex-row justify-between items-center space-y-5 sm:space-y-0 text-gray-800">
        <div className="flex items-center border border-gray-300 rounded-lg w-full sm:w-auto">
          <input
            className="px-4 py-2 w-full sm:w-auto rounded-l-lg border-none focus:ring-0 focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <Link to={"/"}>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
