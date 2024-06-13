import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="p-5 flex justify-end space-x-5 bg-white shadow-xl text-gray-800 rounded-md ">
        {/* <p className="text-lg font-bold">yeshwanthsinha143@gmail.com</p>
        <p className="text-lg font-bold">Deepti Mounika Fashion Apparel</p>
        <p className="text-lg font-bold">Call: +91-9129-9129-91</p> */}

        <div className="flex items-center border border-gray-300 rounded-lg">
          <input
            className="px-4 py-2 rounded-l-lg border-none focus:ring-0 focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="ml-36">
          <Link to={"/"}>
            <button className="px-4  py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-tral-500 focus:outline-none">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
