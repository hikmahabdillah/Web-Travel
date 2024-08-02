import mongoose from "mongoose";

// Define Schema
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Create Model
const Users = mongoose.model("Users", UserSchema);

export default Users;
