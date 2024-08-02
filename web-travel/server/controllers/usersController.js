import Users from "../models/Users.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET SINGLE USER
export const getUser = async (req, res) => {
  const { id } = req.params; // Menggunakan parameter `id` untuk ID MongoDB
  try {
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// CREATE A NEW USER
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new Users({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// DELETE A USER
export const deleteUser = async (req, res) => {
  const { id } = req.params; // Menggunakan parameter `id` untuk ID MongoDB
  try {
    const deletedUser = await Users.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// UPDATE A USER
export const updateUser = async (req, res) => {
  const { id } = req.params; // Menggunakan parameter `id` untuk ID MongoDB
  const { username, email, password } = req.body;
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { username, email, password },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
