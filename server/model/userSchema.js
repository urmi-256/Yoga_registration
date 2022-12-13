const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
});

const UserDetail = mongoose.model("details", userSchema);

module.exports = UserDetail;
