import bcrypt from 'bcrypt';
import Users from "../models/Users.js";
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
};

// CREATE A NEW USER
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the username or email already exists
    const existingUser = await Users.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({ username, email, password: hashedPassword });
    await newUser.save();

        // create a token
        const token = createToken(newUser._id)
        console.log(token)

    res.status(201).json({user: newUser, token});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// HANDLE LOGIN USER
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare hashed password with the provided password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = createToken(user._id)

    res.status(200).json({email: user.email, username: user.username, token, message: "Login successful"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
};

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
};
