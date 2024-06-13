import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NewPassword() {
  const { token } = useParams();
  console.log({ token });
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const restPassword = async (e) => {
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
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Reset Password
            </h3>
          </div>
        </div>
        <form onSubmit={restPassword} className="mt-8 space-y-5">
          <div>
            <label className="font-medium"> New Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Reset Password
          </button>
          {message && (
            <div className="mt-4 text-center text-black font bold">
              {message}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
