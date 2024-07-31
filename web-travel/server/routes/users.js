import express from "express";

const router = express.Router();

// GET ALL USERS
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "john cena" },
    { id: 2, name: "rey mysterio" },
  ]);
});

// GET a Single User
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single user" });
});

// POST a new user
router.post("/", (req, res) => {
  res.json({ mssg: "POST single user" });
});

// DELETE user
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE user" });
});

// UPDATE user
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE user" });
});

export default router;
