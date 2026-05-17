const express = require("express");
const db = require("../db");

const router = express.Router();

// Create lesson (admin)
router.post("/", (req, res) => {
  const { title, content, admin_id } = req.body;

  db.query(
    "INSERT INTO lessons (title,content,admin_id) VALUES (?,?,?)",
    [title, content, admin_id],
    (err) => {
      if (err) return res.json(err);
      res.json({ message: "Lesson created" });
    }
  );
});

// Get lessons
router.get("/", (req, res) => {
  db.query("SELECT * FROM lessons", (err, result) => {
    res.json(result);
  });
});

module.exports = router;
