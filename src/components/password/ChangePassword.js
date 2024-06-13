import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

export default function ChangePassword() {
  const [password, setPassword] = useState({
    newPassword: "",
    oldPassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword({
      ...password,
      [e.target.name]: value,
    });
  };

  const changePassword = async (e) => {
    try {
      e.preventDefault();

      const payload = {
        newPassword: password.newPassword,
        oldPassword: password.oldPassword,
      };

      const token = Cookies.get("token");
      setPassword({ newPassword: "", oldPassword: "" });
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/change-password`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.data;
      console.log({ data });
      setPassword({ newPassword: "", oldPassword: "" });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="max-w-sm w-full text-gray-600 bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Change Password?
            </h3>
          </div>
        </div>
        <form onSubmit={changePassword} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Old Password</label>
            <input
              type="password"
              name="oldPassword"
              value={password.oldPassword}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={password.newPassword}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Update Password
          </button>
        </form>
      </div>
    </main>
  );
}
