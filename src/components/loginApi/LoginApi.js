import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/LoginSlice";

// function useQuery() {
//   const { search } = useLocation();
//   let obj = Object.fromEntries(new URLSearchParams(search));
//   return React.useMemo(() => obj, [search]);
// }

export default function LoginApi() {
  const [loginUser, setLoginUser] = useState({});
  // let query = useQuery();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setLogin({
      ...login,
      [e.target.name]: value,
    });
  };
  const data = { ...login };
  const LoginAllUsers = async (e) => {
    e.preventDefault();
    dispatch(userLogin(data));
    setTimeout(() => {
      navigate("/dashbord");
    }, 1000);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-gray-600 space-y-5 shadow-2xl  rounded-xl px-20 py-5">
        <div className="text-center pb-8">
          {/* <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
            alt="logo"
          /> */}
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form onSubmit={LoginAllUsers} className="space-y-5">
          <div>
            <label className="font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={login.username}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link
              to={"/change-password"}
              className="text-center text-indigo-600 hover:text-indigo-500"
            >
              change password?
            </Link>
            <Link
              to={"/forgot-password"}
              className="text-center text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Login
          </button>
        </form>
        {
          <a
            href={`${process.env.REACT_APP_BASE_URL}/users/google`}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_40)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </a>
        }
        <a
          href={`${process.env.REACT_APP_BASE_URL}/users/github`}
          className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.37 0 0 5.37 0 12C0 17.3025 3.438 21.8005 8.205 23.49C8.805 23.595 9.025 23.22 9.025 22.885C9.025 22.595 9.015 21.785 9.01 20.69C5.672 21.405 4.968 19.105 4.968 19.105C4.425 17.705 3.635 17.345 3.635 17.345C2.545 16.665 3.71 16.68 3.71 16.68C4.91 16.765 5.545 17.93 5.545 17.93C6.595 19.75 8.225 19.245 8.915 18.945C9.035 18.155 9.355 17.655 9.71 17.355C7.075 17.065 4.3 16.025 4.3 11.43C4.3 10.125 4.785 9.045 5.57 8.205C5.435 7.905 5.055 6.685 5.705 5.055C5.705 5.055 6.735 4.725 9.005 6.295C9.99 6.03 11.04 5.895 12.09 5.89C13.14 5.895 14.19 6.03 15.175 6.295C17.445 4.725 18.475 5.055 18.475 5.055C19.125 6.685 18.745 7.905 18.61 8.205C19.395 9.045 19.88 10.125 19.88 11.43C19.88 16.045 17.095 17.06 14.445 17.345C14.885 17.695 15.275 18.405 15.275 19.45C15.275 21.055 15.26 22.365 15.26 22.885C15.26 23.225 15.475 23.605 16.085 23.49C20.845 21.8 24.275 17.3 24.275 12C24.275 5.37 18.905 0 12 0Z"
              fill="#181616"
            />
          </svg>
          Continue with GitHub
        </a>

        <p className="text-center">
          Don't have an account?{" "}
          <Link
            className="font-medium text-indigo-600 hover:text-indigo-500"
            to={"/signup-api"}
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
