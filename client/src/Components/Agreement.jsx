import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Agreement = () => {
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
              <h2 className="text-2xl font-bold">Agreement</h2>
            </div>
            <form className="space-y-4 mb-3">
              <div className="flex flex-wrap justify-items-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit. Facilisius.Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit. Facilisi morbbus morbi.
                  Sed <br />
                  sit eget est lacus.Lorem ipsum dolor iscing elit. Facilisi{" "}
                  <br />
                  morbi sit{" "}
                </p>
                
              </div>
               
              <button className="btn btn-info">Master agreement</button>

              <div>
                <p>Signature <span className="text-red-600">*</span></p>

                <textarea placeholder="Sign here" className="textarea textarea-bordered textarea-lg w-full max-w-2xl mb-5" ></textarea>

                <p>
                If you are experience any issues with digital signature, you may download PDF file. <br/>put your signature and upload it back or send via email.
                </p>
              </div>

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
                  <button className="btn btn-info">Add</button>

                  <div style={{ display: "flex", gap: "65rem" }}>
                <Link to="/loan">
                  <button className="btn btn-error">Previous</button>
                </Link>
                <Link to="/service">
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

export default Agreement;
