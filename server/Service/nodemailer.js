const nodemailer=require('nodemailer')
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'kathleen.nolan@ethereal.email',
      pass: 'hafdwv8ZUPhjEM29Mx'
  }
});