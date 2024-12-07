"use client";
import Image from "next/image";
import Link from "next/link";

const SignupContentOne = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-5 relative lg:after:absolute lg:after:w-1/2 py-10 lg:py-20 after:h-full lg:after:bg-primary/5 lg:dark:after:bg-bg3 ltr:after:right-0 rtl:after:left-0 after:top-0">
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center px-5 md:px-10 xxl:px-20 xxxl:px-28">
        <div className="box w-full p-3 md:p-4 xl:p-6 items-center">
          <form className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8">
            <h3 className="h3 mb-4">Let&apos;s Get Started!</h3>
            <p className="md:mb-6 pb-4 mb-4 md:pb-6 bb-dashed text-sm md:text-base">
              Please Enter Your Details to Create an Account
            </p>

            <label
              htmlFor="fullName"
              className="md:text-lg font-medium block mb-4">
              Full Name
            </label>
            <input
              type="text"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-5"
              placeholder="Enter Your Full Name"
              id="fullName"
              required
            />

            <label
              htmlFor="email"
              className="md:text-lg font-medium block mb-4">
              Email Address
            </label>
            <input
              type="email"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-5"
              placeholder="Enter Your Email"
              id="email"
              required
            />

            <label
              htmlFor="password"
              className="md:text-lg font-medium block mb-4">
              Password
            </label>
            <input
              type="password"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-5"
              placeholder="Enter Your Password"
              id="password"
              required
            />

            <label
              htmlFor="confirmPassword"
              className="md:text-lg font-medium block mb-4">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-5"
              placeholder="Confirm Your Password"
              id="confirmPassword"
              required
            />
            <p>
              By clicking submit, you agree to{" "}
              <Link className="text-primary" href="#">
                Terms of Use
              </Link>
              ,{" "}
              <Link className="text-primary" href="#">
                Privacy Policy
              </Link>
              ,{" "}
              <Link className="text-primary" href="#">
                E-sign
              </Link>{" "}
              &{" "}
              <Link className="text-primary" href="#">
                Communication Authorization
              </Link>
              .
            </p>
            <div className="mt-8">
              <button className="btn px-5">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
        <Image
          src="/images/signup-1.png"
          className="relative z-[2] px-4"
          alt="img"
          width={696}
          height={547}
        />
      </div>
    </div>
  );
};

export default SignupContentOne;
