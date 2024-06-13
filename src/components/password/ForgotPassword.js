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
      setError("User does not exist");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.log(error.response.data.message);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg px-6 py-8 sm:px-10">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            alt="Logo"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Forgot Password?
            </h3>
            <p className="text-gray-600">
              Enter your email and we'll send you a link to reset your password
            </p>
          </div>
        </div>
        <form onSubmit={handleForgotPassword} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-700 bg-gray-100 outline-none border border-gray-300 focus:border-indigo-600 rounded-lg"
            />
          </div>

          <button className="w-full mt-5 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg duration-150">
            Submit
          </button>

          {message && (
            <p className="text-green-600 font-bold text-center mt-4">
              {message}
            </p>
          )}
          {error && (
            <p className="text-red-600 font-bold text-center mt-4">{error}</p>
          )}
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
            Back to login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
