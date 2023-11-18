const UserModel = require("../Model/Users");
require("dotenv").config();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const {sendmailOtp} = require("../Service/nodemailer");
// const accountSid=process.env.TWILIO_ACCOUNT_SID;
// const authToken=process.env.TWILIO_AUTH_TOKEN;
// const verifySid=process.env.TWILIO_VERIFY_SID;

// const client=require("twilio")(accountSid, authToken);

// function sentOtp(phone) {
//   console.log(phone, "hhhh");
//   return client.verify.v2
//     .services(verifySid)
//     .verifications.create({ to: `+91${phone}`, channel: "sms" });
// }

// function verifyOtpp(otp, phone) {
//   console.log(otp, phone, "ppppp");
//   return new Promise((resolve, reject) => {
//     client.verify.v2
//       .services(verifySid)
//       .verificationChecks.create({ to: `+91${phone}`, code: otp })
//       .then((verification_check) => {
//         console.log(verification_check.status);
//         resolve(verification_check);
//       });
//   }).catch((verification_check) => {
//     console.log(verification_check.status);
//     resolve(verification_check);
//   });
// }
 
let emailOtp 
module.exports.register = async (req, res) => {
  try {
    console.log(req.body,"requeestingg");
    const { name, email, phone, password } = req.body;
    const existemail = await UserModel.findOne({ email });
    const existphone = await UserModel.findOne({ phone });
    if (existemail||existphone) {
      res.json({ error: "Data is already registered", created: false });
    } else {
      const otp = Math.floor(100000 + Math.random() * 900000);
      console.log(otp,"otp data..")
      emailOtp=otp
      sendmailOtp(email,otp)
      .then((info) => {
        console.log(`Message sent: ${info.messageId}`);
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
      })
      .catch((error) => {
        throw error;
      });
      res.status(200).json({
        message: "OTP is send to given email ",
        otpSend: true,
      });
    }
  } catch (error) {
    console.log(error)
  }
};
module.exports.verifyOtp=async(req,res)=>{
  try {
    console.log(req.body,"otp request body consoling..")
    const {otp}=req.body
    let {name,email,phone,password}=userData
    if(otp==emailOtp){
      let hashpassword = await bcrypt.hash(password, 10);
      let userdetails = await UserModel.create({
        name,
        email,
        mobile,
        password: hashpassword,
      });
      res.status(200).json({
        success: true,
        message: "Successfully registered",
        userdetails,
        created: true,
      });
    }
    else {
      res.status(400).json({
        success: false,
        message: "Entered OTP from email is incorrect",
        created: false,
      });

    }
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};

