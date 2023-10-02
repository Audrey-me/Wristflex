const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
    clientId: process.env.EMAIL_CLIENTID,
    clientSecret: process.env.EMAIL_CLIENTSECRET
  },
});

module.exports.sendConfirmationEmail = (user_name, user_email, confirmationCode) => {
  transport
    .sendMail({
      from: process.env.EMAIL_USER,
      to: user_email,
      subject: "Welcome to Wristflex",
      html: `<h1>We are delighted to have you</h1>
        <h2>Hello ${user_name}</h2>
        <p>Thank you for subscribing.</p>
        </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendResetPasswordEmail = (email, subject, text) => {
  transport.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  })
  .catch((err) => console.log(err), "email not sent");

  
}
