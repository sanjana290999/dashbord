import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UserEditProfile = () => {
  const [profile, setprofile] = useState({});
  const token = Cookies.get("token");
  const getUserProfile = async () => {
    try {
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
      setprofile("");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              User Profile
            </h3>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Role</label>
              <input
                type="text"
                name="role"
                value={profile.role}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            {/* <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Create account
            </button> */}
          </form>
        </div>
      </div>
    </main>
  );
};
export default UserEditProfile;
