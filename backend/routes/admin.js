const express = require("express");
const db = require("../db");

const router = express.Router();

// Get all users with summary
router.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, users) => {
    res.json(users);
  });
});

module.exports = router;
