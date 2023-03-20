const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const {sendConfirmationEmail} = require("../utils/sendEmail")
const User = require("../models/userModel");

const secret = "secret";

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    res.status(400).json({ message: "Please add all fields" });
  }

  const token = jwt.sign({ email: req.body.email }, secret);

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }

  //   // Generate a salt
  // const saltRounds = 10;
  // const salt = bcrypt.genSaltSync(saltRounds);

  // // Hash a password
  // const hashedPassword = bcrypt.hashSync(password, salt);

  // console.log(hashedPassword);

  // Create user
  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
    confirmationCode: token,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      confirmationCode: user.confirmationCode,
      token: generateToken(user._id),
      message: "User was registered successfully! Please check your email",
    });
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    
      sendConfirmationEmail(user.firstname, user.email, user.confirmationCode);
    });
    
  } else {
    res.status(400).json({ message: "Invalid User Data" });
  }

});


// const verifyUser = asyncHandler( async (req, res) => {
//   User.findOne({
//     confirmationCode: req.params.confirmationCode,
//   })
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       } 
//       user.status = "Active";
//       res.status(404).send({ message: "Login successful" });

//       user.save((err) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }
//       });
//     })
//     .catch((e) => console.log("error", e));
// });

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user.status != "Active") {
    return res.status(401).send({
      message: "Pending Account. Please Verify Your Email!",
    });
  }

  if (user && (await (password, user.password))) {
    res.json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, firstname, lastname, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    firstname,
    lastname,
    email,
  });
});

// get oldUser id
const oldUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token: generateToken(user._id),
    });
  } else if (!user) {
    res.status(400).json({ message: "Email does not exist" });
  } else {
    res.status(500).json({ message: "Network error" });
  }
});

// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.pic = req.body.pic || user.pic;
//     if (req.body.password) {
//       user.password = req.body.password;
//     }

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       pic: updatedUser.pic,
//       isAdmin: updatedUser.isAdmin,
//       token: generateToken(updatedUser._id),
//     });
//   } else {
//     res.status(404);
//     res.status(400).json({ message : 'User not Found'})
//   }
// });

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  oldUser,
  // verifyUser,
  // updateUserProfile,
};
