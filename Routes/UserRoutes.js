const express = require("express");
const router = express.Router();
// Insert Model
const User = require("../Model/UserModel");
// Insert User Control
const UserController = require("../Controllers/UserControllers");

router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);

// Export
module.exports = router;
