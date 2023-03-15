const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add a name"],
    },
    lastname: {
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
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User', userSchema);
