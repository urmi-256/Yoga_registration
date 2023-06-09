const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "user-data" }
);

const Model = mongoose.model("UserData", User);

module.exports = Model;
