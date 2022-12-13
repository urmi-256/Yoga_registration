const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database/connection");
const User = require("./model/user.model");
const userSchema = require("./model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

//to secure connection we are using dotenv

dotenv.config({ path: "./config.env" });

//connecting to database
require("./database/connection")();

//PORT running

const PORT = process.env.PORT;

var corsOptions = {
  origin: "*",
  // optionsSuccessStatus:200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(require("./router/userDetail"));
app.post("/register", async (req, res) => {
  console.log(req.body);
  const newPassword = await bcrypt.hash(req.body.password, 10);
  console.log(newPassword);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: newPassword,
  });
  user
    .save()
    .then((detail) => {
      res.json(detail);
      history("/login");
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});
app.post("/userdata", async (req, res) => {
  const user = await userSchema.findOne({
    email: req.body.email,
  });
  return res.send(user);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
