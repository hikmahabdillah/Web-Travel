import express from "express";
const usersRouter = express.Router();
import {createUser, getAllUsers, getUser, deleteUser, updateUser, loginUser} from "../controllers/usersController.js"

// GET ALL USERS
usersRouter.get("/", getAllUsers);

// GET a Single User
usersRouter.get("/:id", getUser);

// POST a new user
usersRouter.post("/", createUser);

// LOGIN user
usersRouter.post('/login', loginUser);

// DELETE user
usersRouter.delete("/:id", deleteUser);

// UPDATE user
usersRouter.patch("/:id", updateUser);

export default usersRouter;
