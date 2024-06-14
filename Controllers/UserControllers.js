const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
  let Users;

  //   Get all users
  try {
    Users = await User.find();
  } catch (err) {
    console.log(err);
  }

  //   Not found users
  if (!Users) {
    return res.status(404).json({ message: "User not found" });
  }

  //   Display all users
  return res.status(200).json({ Users });
};

exports.getAllUsers = getAllUsers;
