import express from "express";
import Users from "../models/Users.js";

const router = express.Router();

// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a Single User
router.get("/:id_user", async (req, res) => {
  const { id_user } = req.params;
  try {
    const user = await Users.findOne({ id_user });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new user
router.post("/", async (req, res) => {
  const { id_user, username, email, password } = req.body;
  try {
    const newUser = new Users({ id_user, username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE user
router.delete("/:id_user", async (req, res) => {
  const { id_user } = req.params;
  try {
    const deletedUser = await Users.findOneAndDelete({ id_user });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE user
router.patch("/:id_user", async (req, res) => {
  const { id_user } = req.params;
  const { username, email, password } = req.body;
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { id_user },
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
});

export default router;
