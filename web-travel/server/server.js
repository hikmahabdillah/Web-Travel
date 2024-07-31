// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import router from "./routes/users.js";

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

const port = process.env.PORT || 4001;
//  listen for request
app.listen(port, () => {
  console.log("listening on port", port);
});

// routes
app.use('/api/users', usersRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});
