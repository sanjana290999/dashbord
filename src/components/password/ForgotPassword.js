import { logDOM } from "@testing-library/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setEmail("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/forgot-password`,
        { email }
      );
      const data = response.data;
      console.log({ data });
      setMessage("Password reset link sent to your email");

      setEmail("");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setError("user does not exist ");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log(error.response.data.message);
    }
  };
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-gray-600 shadow-xl px-20 py-8">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Forgot Password ?
            </h3>
            <p className="">
              Enter your email and we'll send you a link to resent your password
            </p>
          </div>
        </div>
        <form onSubmit={handleForgotPassword} className="mt-8 space-y-5">
          <div>
            <label className="font-medium"> Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <button className="w-full mt-5 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            submit
          </button>
          {setMessage && (
            <p className="text-black font bold text-center text-2xl mt-4">
              {message}
            </p>
          )}
          {error && (
            <p className="text-red-500 font-bold text-2xl text-center mt-4">
              {error}
            </p>
          )}
        </form>
        <Link to={"/login"} className=" ml-32 ">
          <button className="font-bold border-1 border-black p-2 rounded-md hover:bg-gray-300">
            back to login
          </button>
        </Link>
      </div>
    </main>
  );
}

export default ForgotPassword;
