import React from "react";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div>
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699521091/ff_u43duh.jpg"
            alt=""
            className="w-[500px] h-full hidden rounded-none md:block object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-4 md:p-8">
          <span className="mb-2 text-4xl font-semibold">Verify Steps</span>
          <Link to='/otp'><button className="bg-orange-300 mt-9 rounded-md p-3 w-96">Verify with Mobile-OTP</button></Link>
          <Link to='/emailotp'><button className="bg-orange-300 mt-9 rounded-md p-3 w-96">Verify with Email-OTP</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Verify;
