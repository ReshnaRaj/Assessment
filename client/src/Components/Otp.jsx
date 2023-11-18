import React, { useState } from "react";

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../Firebase/firebaseconfig";
import { RecaptchaVerifier, } from "firebase/auth";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state.phone || "";

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  const onSignup = async () => {
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + 91 + phone;
    try {
      signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          alert("OTP sended successfully!");
        })
        .catch((error) => {
          console.log("hdbsjhfbs");
          console.log(error);
          alert("some error occur..!");
        });
    } catch (error) {}
  };

  const sendOTP = async () => {
    try {
      const otpString = otp.join("");
      console.log(otpString, "ppp");
      if (otp.length < 6 || otp === "") {
        alert("invalid entry");
      } else {
        const response = await axios.post("http://localhost:4000/verify-otp", {
          otp: otpString,
        });
        alert("Sending OTP:" + otpString);
        console.log(response, "response");
        if (response.data.success) {
          alert(response.data.message);
          navigate("/email");
        }
      }
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div>
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699521091/ff_u43duh.jpg"
            alt=""
            className="w-[400px] h-full hidden rounded-none md:block object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-2 text-2xl font-semibold">OTP Verification</span>
          <span>Enter the verification code we just sent to your {phone}</span>

          <div className="flex mt-4">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                className="w-12 h-12 p-2 border border-gray-300 rounded-md text-center mr-3"
                maxLength="1"
                value={value}
                onChange={(e) => {
                  const newOtp = [...otp];
                  newOtp[index] = e.target.value;
                  setOtp(newOtp);
                }}
              />
            ))}
          </div>

          <span className="mt-5 ml-3">
            Didn't receive code?{" "}
            <button className="text-gray-700 underline">Resend</button>
          </span>

          <button
            className="bg-orange-300 mt-9 rounded-md p-3 w-96"
            type="button"
            onClick={sendOTP}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
