"use client";
import { IconArrowLeft, IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const LoginOneContent = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const route = useRouter();

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post("https://gutenbergbooksanalyzerapi.onrender.com/api/auth/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("gutenberg-auth-token", token);
      // toast.success("Login successful!");
      route.push("/saved");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 lg:py-20 relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex items-center justify-center px-5 md:px-10 xl:px-20 xxl:px-28"
      >
        <div className="box w-full p-6 md:p-8 bg-white dark:bg-bg3 shadow-lg rounded-lg">
          <form className="space-y-6" onSubmit={handleLogin}>
            <Link href="/" className="flex items-center gap-2 text-primary">
              <IconArrowLeft size={20} /> Back To Home
            </Link>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Welcome Back!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Sign in to your account and join us
            </p>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-bg4 dark:border-n500 dark:text-white"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="relative mt-2">
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-bg4 dark:border-n500 dark:text-white"
                  placeholder="Enter Your Password"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-500 hover:text-primary"
                >
                  {showPass ? <IconEye /> : <IconEyeOff />}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center text-sm">
              {/* <Link href="#" className="text-primary hover:underline">
                Forgot Password?
              </Link> */}
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Signup
                </Link>
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading} // Disable button during loading
                className={`w-full py-2 px-4 text-white bg-primary rounded-lg focus:ring-2 focus:ring-primary ${
                  loading ? "cursor-not-allowed opacity-50" : "hover:bg-primary-dark"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Loading...
                  </span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="hidden lg:flex items-center justify-center"
      >
        <Image
          src="/images/login-main.png"
          alt="Login Illustration"
          width={600}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default LoginOneContent;
