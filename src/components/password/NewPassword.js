import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NewPassword() {
  const { token } = useParams();
  console.log({ token });
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/reset-password/${token}`,
        { newPassword: password }
      );
      const data = response.data.data;
      console.log({ data });
      setMessage("Password reset successfully!");
      setPassword("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg px-8 py-10">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            alt="Logo"
            width={150}
            className="mx-auto"
          />
          <h3 className="mt-6 text-gray-800 text-3xl font-bold">
            Reset Password
          </h3>
        </div>
        <form onSubmit={resetPassword} className="mt-8 space-y-5">
          <div>
            <label htmlFor="password" className="font-medium">
              New Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-700 bg-gray-100 outline-none border border-gray-300 focus:border-indigo-600 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg duration-150"
          >
            Reset Password
          </button>
          {message && (
            <p className="mt-4 text-green-600 font-bold text-center">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
