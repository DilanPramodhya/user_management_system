const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

// Middleware configuration
app.use(express.json());
app.use(cors());
app.use("/users", router);

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
