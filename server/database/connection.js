const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const database = process.env.DATABASE;

module.exports = () => {
  try {
    mongoose.connect(database);
    console.log("Database connected");
  } catch (err) {
    console.log("Database not connected");
  }
};
