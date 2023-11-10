import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const LoanDetails = () => {
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
              <h2 className="text-2xl font-bold">Loan</h2>
            </div>
            <form className="space-y-4 mb-3">
              <div className="flex flex-wrap justify-items-center">
                <div className="w-full max-w-xs mr-4 mb-5">
                  <label
                    htmlFor="resortname"
                    className="block font-semibold mb-1"
                  >
                    What product do you apply for?
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Mortgage EMI sleeping period
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
                    Sleeping Period Duration
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      11 Months
                    </option>
                    <option>Self-emplpoyed</option>
                    <option>Retired</option>
                  </select>
                </div>
              </div>
              <div>
                <p className="block font-bold text-2xl mb-11">
                  Current Loan & Mortgage Details
                </p>
                <div className="flex">
                  <div className="w-full max-w-xs mr-4 mb-5">
                    <label
                      htmlFor="martialStatus"
                      className="block font-semibold mb-1"
                    >
                      Purchase Price
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
                      Mortgage Amount
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
                      Duration of Loan (in months)
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
                <div className="flex flex-wrap justify-items-center">
                  <div className="w-full max-w-xs mr-4 mb-5">
                    <label
                      htmlFor="dependents"
                      className="block font-semibold mb-1"
                    >
                      Loan Amount
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
                      Loan Paid Till Date
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
              <div>
                <p className="block font-bold text-2xl mb-11">
                  Loan & Mortgage Amount
                </p>
                <div className="flex flex-wrap justify-items-center">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Upload Document 1</h2>
                      <p> Drag & Drop files or Browse</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                          Upload Files
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Upload Document 2</h2>
                      <p>Drag & Drop files or Browse</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                          Upload Files
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Upload Document 3</h2>
                      <p>Drag & Drop files or Browse</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                          Upload Files
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success">Add</button>

               

              
              <div style={{ display: "flex", gap: "65rem" }}>
                <Link to="/income">
                  <button className="btn btn-error">Previous</button>
                </Link>
                <Link to="/agreement">
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

export default LoanDetails;
