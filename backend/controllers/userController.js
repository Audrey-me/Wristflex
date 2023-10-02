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
  const { user_name, lastname, user_email, password } = req.body;

  if (!user_name || !lastname || !user_email || !password) {
    res.status(400).json({ message: "Please add all fields" });
  }

  const token = jwt.sign({ user_email: req.body.user_email }, secret);

  // Check if user exists
  const userExists = await User.findOne({ user_email });

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
    user_name,
    lastname,
    user_email,
    password,
    confirmationCode: token,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      user_name: user.user_name,
      lastname: user.lastname,
      user_email: user.email,
      confirmationCode: user.confirmationCode,
      token: generateToken(user._id),
      message: "User was registered successfully! Please check your email",
    });
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    
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
  const { user_email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ user_email });

  // if (user.status != "Active") {
  //   return res.status(401).send({
  //     message: "Pending Account. Please Verify Your Email!",
  //   });
  // }

  if (user && (await (password, user.password))) {
    res.json({
      _id: user.id,
      user_name: user.user_name,
      lastname: user.lastname,
      user_email: user.user_email,
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
  try {

    const { id } = req.query;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "An error occurred" });
  }

  const { _id, user_name, lastname, user_email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    user_name,
    lastname,
    user_email,
  });
});

// get oldUser id
const oldUser = asyncHandler(async (req, res) => {
  const { user_email } = req.body;
  const user = await User.findOne({ user_email });
  if (user) {
    res.json({
      _id: user.id,
      user_name: user.user_name,
      lastname: user.lastname,
      user_email: user.user_email,
      token: generateToken(user._id),
    });
  } else if (!user) {
    res.status(400).json({ message: "Email does not exist" });
  } else {
    res.status(500).json({ message: "Network error" });
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const { firstname,lastname, email } = req.body;
  try {
    
    const { id } = req.query;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    
    await user.save();

    return res.status(200).json({ message: "User updated", user });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

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
  updateUserProfile,
};
