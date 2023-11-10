import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div>
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699521091/ff_u43duh.jpg"
            alt="image"
            className="w-[500px] h-full hidden rounded-none md:block object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-4 md:p-14 ml-10">
          <span className="mb-2 text-3xl font-semibold">
            Login Into your Account
          </span>
          <span className="mb-3">See What is going on with your business</span>
          <span className="font-ligt text-gray-400 mb-3"></span>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6">
            <img
              src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699504998/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1_xuxzmz.png"
              alt="img"
              className="w-6 h-6 inline mr-2 "
            />
            Continue with Google
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6">
            <img
              src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699513294/fb-logo_cskggn.jpg"
              alt="img"
              className="h-6 inline"
            />
            Continue with facebook
          </button>
          <span className="text-gray-700 text-center">
            --------Or Sign In with Email--------
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember Me</span>
            </div>
            <Link to='/forgotpass'>
            <span className="font-bold text-md">Forgot Password</span>
            </Link>
          </div>
          <Link to='/idverify'>
          <button className="w-full bg-black text-white p-2 rounded-lg mb-6">
            Sign In
          </button>
          </Link>

          <div className="text-center text-gray-600">
            Not Registered Yet?
            <Link to='/signup'>
            <button>
              <span className="font-bold text-black ml-4 ">
                Create an account
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
