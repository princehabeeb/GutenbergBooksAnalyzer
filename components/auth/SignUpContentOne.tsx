"use client";

const SignupContentOne = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-5 relative py-10 lg:py-20 lg:after:absolute lg:after:w-1/2 after:h-full lg:after:bg-gradient-to-r from-primary/10 to-primary/5 ltr:after:right-0 rtl:after:left-0 after:top-0 dark:lg:after:bg-gradient-to-r dark:lg:after:from-bg3 dark:lg:after:to-bg3/10">
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center px-5 md:px-10 xxl:px-20 xxxl:px-28">
        <div className="box w-full p-4 md:p-6 xl:p-8 rounded-lg shadow-lg bg-white dark:bg-bg4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-2">
              Welcome!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Please enter your details to create an account.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Your Full Name"
                className="w-full text-sm focus:outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full text-sm focus:outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full text-sm focus:outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Your Password"
                className="w-full text-sm focus:outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-6 py-3 w-full text-sm font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-primary/90 focus:ring-4 focus:ring-primary/50 transition duration-300">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupContentOne;
