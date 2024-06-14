const express = require("express");
const router = express.Router();
// Insert Model
const User = require("../Model/UserModel");
// Insert User Control
const UserController = require("../Controllers/UserControllers");

router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);

// Export
module.exports = router;
