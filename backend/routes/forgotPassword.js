const express = require("express");
const {sendResetPasswordEmail} = require("../utils/sendEmail");
const bcrypt = require('bcryptjs')
const crypto = require("crypto");
const User = require("../models/userModel");
const Token = require("../models/tokenModel");
const Joi = require("joi");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const schema = Joi.object({ user_email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ user_email: req.body.user_email });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    sendResetPasswordEmail(user.user_email, "Password reset", link);

    res.status(200).json({message:user.user_email});
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.post("/:userId/:token", async (req, res) => {
  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).send("invalid link or expired");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    const {password } =  req.body

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

     user.password = hashedPassword;
    
    await user.save();
    await token.delete();

    res.send(`password reset sucessfully.`);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

module.exports = router;
