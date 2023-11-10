import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Income = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex-1">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699608648/check-mark-white-tick-yellow-circle-sign-valid-seal-icon-vector-illustration-white-background-check-mark-white-tick-149985746_f6zy82.jpg"
                alt=""
                className="w-20"
              />
              <h2 className="text-2xl font-bold">Income</h2>
            </div>
            <form className="space-y-4 mb-3">
              <div className="flex flex-wrap justify-items-center">
                <div className="w-full max-w-xs mr-4 mb-5">
                  <label
                    htmlFor="resortname"
                    className="block font-semibold mb-1"
                  >
                    Employment Status
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Employ at a company
                    </option>
                    <option>Self-emplpoyed</option>
                    <option>Retired</option>
                  </select>
                </div>
                <div className="w-full max-w-xs mr-4  mb-5">
                  <label
                    htmlFor="emiratesid"
                    className="block font-semibold mb-1"
                  >
                    Job title
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
                    htmlFor="emiratesid"
                    className="block font-semibold mb-1"
                  >
                    Date Of Joining
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
                    htmlFor="emiratesid"
                    className="block font-semibold mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="emiratesid"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="w-full max-w-xs mr-4 mb-5">
                  <label
                    htmlFor="resortname"
                    className="block font-semibold mb-1"
                  >
                    Industry
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      ERP Solutions
                    </option>
                    <option>Self-emplpoyed</option>
                    <option>Retired</option>
                  </select>
                </div>
                
              </div>
              <div>
                  <p className="block font-bold text-2xl mb-11">Civil Status</p>
                  <div className="flex">
                    <div className="w-full max-w-xs mr-4 mb-5">
                      <label
                        htmlFor="martialStatus"
                        className="block font-semibold mb-1"
                      >
                        Martial Status
                      </label>
                      <select
                        id="martialStatus"
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option disabled selected>
                          Select Status
                        </option>
                        <option>Single</option>
                        <option>Married</option>
                      </select>
                    </div>
                    <div className="w-full max-w-xs mr-4 mb-5">
                      <label
                        htmlFor="spouseName"
                        className="block font-semibold mb-1"
                      >
                        Spouse Name
                      </label>
                      <input
                        type="text"
                        id="spouseName"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="w-full max-w-xs mr-4 mb-5">
                      <label
                        htmlFor="dependents"
                        className="block font-semibold mb-1"
                      >
                        Number of dependents
                      </label>
                      <select
                        id="dependents"
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option disabled selected>
                          0
                        </option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="block font-bold text-2xl mb-11">Income</p>
                   
                  <div className="flex">
                    <div className="w-full max-w-xs mr-4 mb-5">
                      <label
                        htmlFor="martialStatus"
                        className="block font-semibold mb-1"
                      >
                        Fixed Monthly Income
                      </label>
                      <input
                        type="text"
                        id="spouseName"
                        placeholder="AED"
                        className="input input-bordered w-full max-w-xs"
                      />
                      
                    </div>
                    <div className="w-full max-w-xs mr-4 mb-5">
                      <label
                        htmlFor="spouseName"
                        className="block font-semibold mb-1"
                      >
                        Expense
                      </label>
                      <input
                        type="text"
                        id="spouseName"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="w-full max-w-xs mr-4 mb-5">
                      <label
                        htmlFor="dependents"
                        className="block font-semibold mb-1"
                      >
                        Additional Income
                      </label>
                      <input
                        type="text"
                        id="spouseName"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                </div>

              <h2 className="font-semibold text-2xl mb-8">
                Beneficiary Details
              </h2>
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
                    Job title
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
                    Trade License
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
                    Trade Expiry Date
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
                    Email
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
                    htmlFor="firstname"
                    className="block font-semibold mb-1"
                  >
                    Last Name
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
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  className="mr-2 mb-7"
                />
                <span className="text-md">
                  I agree to the
                  <span className="text-yellow-500 ml-3">
                    terms and conditions
                    <br />
                  </span>{" "}
                </span>
              </div>
              <div style={{ display: "flex", gap: "65rem" }}>
                <Link to="/idverify">
                  <button className="btn btn-error">Previous</button>
                </Link>
                <Link to="/loan">
                  <button className="btn btn-success text-center">
                    Submit & Next
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Income;
