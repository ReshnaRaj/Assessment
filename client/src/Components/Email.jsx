import React from "react";
import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
      <div>
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699521091/ff_u43duh.jpg"
            alt=""
            className="w-[500px] h-full hidden rounded-none md:block object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-2 text-2xl font-semibold">
            Set-Up Two Factor Authentication
          </span>
          <span>
            Receive Information by email to set-up for 2-factor authentication
          </span>
        <Link to='/email'>
          <button className="bg-orange-300 mt-11 rounded-md p-3 w-96">
            Send Email
          </button>
          </Link>
          <Link to='/'>
          <button className="mt-9 rounded-md p-3 outline w-96">Cancel</button>
          </Link>
         
        </div>
         
      </div>
    </div>
  );
};

export default Email;
