const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, "Please add a name"],
    },
    lastname: {
      type: String,
      required: [true, "Please add a name"],
    },
    user_email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    confirmationCode: { 
      type: String, 
      unique: true 
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User', userSchema);
