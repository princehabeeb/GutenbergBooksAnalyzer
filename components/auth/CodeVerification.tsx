"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const CodeVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/verify-email", {
        email,
        otp,
      });
      setSuccess(response.data.message || "Verification successful!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred. Please try again.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-100 dark:bg-gray-900"
    >
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
        <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
          Verify Your Email
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Enter your email and the OTP code sent to your email address.
        </p>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            placeholder="Enter your email again"
          />
        </div>

        <div>
          <label htmlFor="otp" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300">
            OTP Code
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            placeholder="Enter OTP code"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-500 dark:bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </motion.div>
  );
};

export default CodeVerification;
