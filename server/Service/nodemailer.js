const nodemailer=require('nodemailer')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});
// 
let sendmailOtp = (email,otpEmail) => {
  const mailOptions = {
    from:process.env.EMAIL,
    to: email,
    subject: "Otp for registration is: ",
    html:
      "<h3>OTP for email verification is </h3>" +
      "<h1 style='font-weight:bold;'>" +
      otpEmail +
      "</h1>", // html body
  };
  return transporter.sendMail(mailOptions);
   
};
module.exports={sendmailOtp}