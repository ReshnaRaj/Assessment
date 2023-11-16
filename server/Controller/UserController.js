const UserModel =require("../Model/Users");
require('dotenv').config();
const bcrypt=require("bcrypt");
const accountSid=process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid, "Accoundhdb");
const authToken=process.env.TWILIO_AUTH_TOKEN;
const verifySid=process.env.TWILIO_VERIFY_SID;
console.log(verifySid, "id");
const client=require("twilio")(accountSid, authToken);

function sentOtp(phone) {
  console.log(phone, "hhhh");
  return client.verify.v2
    .services(verifySid)
    .verifications.create({ to: `+91${phone}`, channel: "sms" });
}

function verifyOtpp(otp, phone) {
  console.log(otp, phone, "ppppp");
  return new Promise((resolve, reject) => {
    client.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: `+91${phone}`, code: otp })
      .then((verification_check) => {
        console.log(verification_check.status);
        resolve(verification_check);
      });
  }).catch((verification_check) => {
    console.log(verification_check.status);
    resolve(verification_check);
  });
}

const handleError = (err) => {
  if (err.code === 11000) {
    let errors = "Student with same email is there";
    return errors;
  } else {
    let errors = "Internal server error";
    return errors;
  }
};
let userData;
//Mechanic Register using OTP
module.exports.register = async (req, res, next) => {
  try {
    let { name, email, phone, password } = req.body;
    console.log(req.body, "user data");
    console.log("user entered");
    userData = { name: name, email: email, phone: phone, password: password };
    console.log(userData, "hiiiiii");
    const user = await UserModel.findOne({ email });
    console.log(user, "user dataaaa");
    const phoneno = await UserModel.findOne({ phone });
    console.log(phoneno, "phonenumber");
    if (user || phoneno) {
      res
        .status(401)
        .json({ status: "failed", message: "Data already exists Login now" });
    } else {
      console.log("hii sent otp");
      let data = await sentOtp(phone);
      console.log(data, "ffff");
      res
        .status(201)
        .json({ status: "success", message: "otp sending successful" });
    }
  } catch (error) {
    console.log(error,"iii")
    res.status(401).json({ status: "failed", message: error.message });
  }
  console.log("end");
};
module.exports.verifyOtp = async (req, res, next) => {
  try {
    console.log("verify otp entered");
    console.log(req.body, "requesting...");
    const { otp } = req.body;
    console.log(otp);
    let { name, email, phone, password } = userData;
    console.log(userData, " registeration user ");
    let userDetails = await verifyOtpp(otp, phone);
    console.log(userDetails, "user details printed");
    if (userDetails.status === "approved") {
      let hashpassword = await bcrypt.hash(password, 10);
      let userdetails = await UserModel.create({
        name,
        email,
        phone,
        password: hashpassword,
      });
      console.log(userdetails, "userdetails");
      res.status(200).json({
        success: true,
        userdetails,
        message: "succesfully created new user",
      });
    } else {
      res.json({ success: false, message: "incorrect OTP" });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
