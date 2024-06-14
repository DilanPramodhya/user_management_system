const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware configuration
app.use("/", (req, res, next) => {
  res.send("It is working ....");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.z8wx2aw.mongodb.net/user_management_db"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
