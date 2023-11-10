import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const IdVerification = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex-1">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699608648/check-mark-white-tick-yellow-circle-sign-valid-seal-icon-vector-illustration-white-background-check-mark-white-tick-149985746_f6zy82.jpg" alt=""
                className="w-20"
              />
              <h2 className="text-2xl font-bold">ID Verification</h2>
            </div>
            <form className="space-y-4 mb-3">
              <div className="flex flex-wrap justify-items-center">
                <div className="w-full max-w-xs mr-4 mb-5">
                  <label
                    htmlFor="resortname"
                    className="block font-semibold mb-1"
                  >
                    Residency Status
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Residency
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="emiratesid"
                    className="block font-semibold mb-1"
                  >
                    Emirates ID
                  </label>
                  <input
                    type="text"
                    id="emiratesid"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="emiratesidnumber"
                    className="block font-semibold mb-1"
                  >
                    Emirates ID Number
                  </label>
                  <input
                    type="text"
                    id="emiratesidnumber"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="firstname"
                    className="block font-semibold mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="lastname"
                    className="block font-semibold mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label htmlFor="email" className="block font-semibold mb-1">
                    Email ID
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="firstname"
                    className="block font-semibold mb-1"
                  >
                    Date
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="firstname"
                    className="block font-semibold mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="firstname"
                    className="block font-semibold mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="+91"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs   mr-4 mb-5">
                  <label
                    htmlFor="firstname"
                    className="block font-semibold mb-1"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="firstname"
                    className="block font-semibold mb-1"
                  >
                    Martial Status
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Select Status
                    </option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>
              </div>
              <div>
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">
                  By Continuing your accept our
                  <span className="text-yellow-500">
                    Terms of Service.
                    <br />
                  </span>{" "}
                  Also learn how we process your data in your data in our
                  <br />
                  <span className="text-yellow-500 underline">
                    {" "}
                    Privacy Policy{" "}
                  </span>
                  and
                  <span className="text-yellow-500 underline">
                    {" "}
                    Cookie Policy.
                  </span>
                </span>
              </div>
              
               
               <Link to="/income">
                  <button className="btn btn-success text-center">
                    Submit & Next
                  </button>
                </Link>
        
                
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdVerification;
