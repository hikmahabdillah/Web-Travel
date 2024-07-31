// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import router from "./routes/users.js";
import mongoose from "mongoose";

dotenv.config();
const usersRoutes = router;

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", usersRoutes);
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const port = process.env.PORT || 4001;
    // listen for request
    app.listen(port, () => {
      console.log(`Connected to DB & listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // exit the process if connection fails
  });
