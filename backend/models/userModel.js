const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add a name"],
    },
    lastName: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    fileName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("user", userSchema);
