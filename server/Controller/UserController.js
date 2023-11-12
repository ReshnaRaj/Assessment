const UserModel = require("../Model/Users");
const accountSid = "AC4d5cc5ba276e1e2efd3263b450a8f4c7";
const authToken = "8ad116a375615e50d6119da8da8258ad";
const verifySid = "VA2e5bc3c0b989ba54c3f481a0b9ace855";
const client = require("twilio")(accountSid, authToken);

let sendPhoneOTP = (phone) => {
  return client.verify.v2.services(verifySid).verifications.create({
    to: `+91${phone}`,
    channel: "sms",
  });
};

let verifyPhoneOTP = async (phone, otpPhone) => {
  return client.verify.v2
    .services(service_sid)
    .verificationChecks.create({
      to: `+91${phone}`,
      code: otpPhone,
    })
    .then((verification_check) => {
      if (verification_check.status === "approved") {
        return Promise.resolve({ phoneStatus: "success" });
      } else {
        return Promise.reject({ phoneStatus: "error" });
      }
    })
    .catch((error) => {
      return Promise.reject({ phoneStatus: "error" });
    });
};
const handleError = (err) => {
  if (err.code === 11000) {
    let errors = "Student with same email is there";
    return errors;
  } else {
    let errors = "Internal server error";
    return errors;
  }
};
module.exports.getOtp = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body, "data of the user");

    const user = await UserModel.findOne({ email });
    if (!user) {
      signupData = {
        name,
        email,
        phone,
        password,
      };

      const otpEmail = Math.floor(1000 + Math.random() * 9000);
      otp = otpEmail;

      let phoneOtp = await sendPhoneOTP(phone);

      if (phoneOtp.status === "pending") {
        res.status(200).json({
          message: "OTP is sent to given phone number",
          otpSend: true,
        });
      } else {
        res.status(200).json({
          message: "Error while sending otp,please try again",
          otpSend: false,
        });
      }
    } else {
      res.status(200).json({
        message: "There is already a user with same email",
        otpSend: false,
      });
    }
  } catch (error) {
    console.log(error);
    const errors = handleError(error);
    res.status(400).json({ errors, otpSend: false });
  }
};
module.exports.signup = async (req, res, next) => {

    console.log("verified successfully")
    try {
        console.log(req.body,"data")
      const { name, email, phone, password} = signupData;
      const { otpPhone } = req.body;
      
  
      let phoneVerify = await verifyPhoneOTP(phone, otpPhone)
  
  
      if (phoneVerify.phoneStatus === "success") {
        const user = await UserModel.create({
          name,
          email,
          phone,
          password,
        });
  
        res
          .status(200)
          .json({ message: "Successfully registered", created: true });
  
      } else {
  
        res.status(400).json({ message: "Incorrect OTP", created: false });
      }
  
    } catch (error) {
      console.log(error, "er")
      if (error.phoneStatus === 'error') {
        res.status(400).json({ errors: "Entered OTP is incorrect", created: false });
      } else {
        let errors = handleError(error);
        res.status(400).json({ errors, created: false });
      }
    }
  };
