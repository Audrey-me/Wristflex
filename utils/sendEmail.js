const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports.sendConfirmationEmail = (firstname, email, confirmationCode) => {
  transport
    .sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${firstname}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:5000/api/wristflex/confirm/${confirmationCode}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
};
