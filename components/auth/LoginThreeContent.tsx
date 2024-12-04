"use client";
import { IconArrowLeft, IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const LoginThreeContent = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="min-h-screen py-10 md:py-16 lg:py-20 xl:py-28 px-3 md:px-5 flex items-center justify-center bg-[url(/images/login-3.png)] bg-cover">
      <div className="box w-full p-3 md:p-4 xl:p-6 items-center max-w-[805px]">
        <form className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8">
          <Link
            href="/dashboards/personal-1"
            className="flex items-center gap-2">
            <IconArrowLeft size={20} /> Back To Home
          </Link>
          <h3 className="h3 my-4">Welcome Back!</h3>
          <p className="md:mb-6 md:pb-6 mb-4 pb-4 bb-dashed text-sm md:text-base">
            Sign in to your account and join us
          </p>
          <label htmlFor="email" className="md:text-lg font-medium block mb-4">
            Enter Your Email ID
          </label>
          <input
            type="email"
            className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
            placeholder="Enter Your Email"
            id="email"
            required
          />
          <label
            htmlFor="password"
            className="md:text-lg font-medium block mb-4">
            Enter Your Password
          </label>
          <div className=" bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-4 relative">
            <input
              type={showPass ? "text" : "password"}
              className="w-11/12 text-sm focus:outline-none bg-transparent"
              placeholder="Enter Your Password"
              id="password"
              required
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2 cursor-pointer">
              {showPass ? <IconEye /> : <IconEyeOff />}
            </span>
          </div>

          <Link href="#" className="flex justify-end text-primary text-sm">
            Forgot Password
          </Link>
          <p className="mt-3">
            Don&apos;t have an account?{" "}
            <Link className="text-primary" href="/signup-1">
              Signup
            </Link>
          </p>
          <div className="mt-8 flex gap-6">
            <button className="btn px-5">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginThreeContent;
