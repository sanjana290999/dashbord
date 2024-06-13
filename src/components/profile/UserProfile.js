import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setprofile] = useState({});
  const token = Cookies.get("token");
  const getUserProfile = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/current-user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data.data;
    console.log({ data });
    setprofile(data);
  };
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-56 p-6">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {profile.username}
          </h2>
          <p className="text-gray-600">{profile.email}</p>
          <p className="text-gray-600">{profile.role}</p>
        </div>
      </div>

      <div className="space-y-4">
        <Link to={"/edit-profile"}>
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">
            Edit Profile
          </button>
        </Link>
        <Link to={"/change-password"}>
          <button className="w-full py-2 mt-3 px-4 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75">
            Change Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
