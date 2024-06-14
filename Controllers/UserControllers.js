const User = require("../Model/UserModel");

// Display data
const getAllUsers = async (req, res, next) => {
  let users;

  //   Get all users
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  //   Not found users
  if (!users) {
    return res.status(404).json({ message: "User not found" });
  }

  //   Display all users
  return res.status(200).json({ users });
};

// Data insert
const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;

  let users;

  try {
    users = new User({ name, gmail, age, address });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  //   Don't insert users
  if (!users) {
    return res.status(404).json({ messages: "Unable to add users" });
  }
  return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
