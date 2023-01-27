const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  city: { type: String, required: false },
});

module.exports = mongoose.model("User", UserSchema);
