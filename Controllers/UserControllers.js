const User = require("../Model/UserModel");

// Read Users
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
  return res.status(200).json({ message: "Get all user Details", users });
};

// Create User
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
  return res.status(200).json({ message: "User account Created", users });
};

// Get by Id
const getById = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  //   Don't available user
  if (!user) {
    return res.status(404).json({ messages: "User not found" });
  }
  return res.status(200).json({ message: "Get user by Id", user });
};

// Update user details
const updateUser = async (req, res, next) => {
  const id = req.params.id;

  const { name, gmail, age, address } = req.body;

  let user;

  try {
    user = await User.findByIdAndUpdate(id, { name, gmail, age, address });
    user = await user.save();
  } catch (err) {
    console.log(err);
  }
  //   Don't available user
  if (!user) {
    return res.status(404).json({ messages: "Unable to Update user details" });
  }
  return res.status(200).json({ message: "User details Updated", user });
};

// Delete user by Id
const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  //   Don't available user
  if (!user) {
    return res.status(404).json({ messages: "Unable to delete" });
  }
  return res.status(200).json({ message: "User account Deleted", user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
