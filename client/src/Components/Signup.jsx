import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div>
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699521091/ff_u43duh.jpg"
            alt="image"
            className="w-[500px] h-full hidden rounded-none md:block object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-4 md:p-14 ml-10">
          <span className="mb-2 text-4xl font-semibold">
            Create your Account
          </span>

          <span className="font-ligt text-gray-400"></span>
          <div className="py-4">
            <span className="mb-2 text-md">Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
            />
          </div>

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
            <span className="mb-2 text-md">Phone No:</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="phone"
              id="phone"
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
          <Link to='/verify'>
          <button className="w-full bg-black text-white p-2 rounded-lg mb-6">
            Sign Up
          </button>
          </Link>

          <div className="text-center text-gray-600">
            Already User?
            <Link to='/'>
            <button>
              <span className="font-bold text-black ml-2">Login</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
