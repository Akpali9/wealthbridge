const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/", (req, res) => {
  const { user_id, type, category, amount } = req.body;

  db.query(
    "INSERT INTO transactions (user_id,type,category,amount) VALUES (?,?,?,?)",
    [user_id, type, category, amount],
    (err) => {
      if (err) return res.json(err);
      res.json({ message: "Added" });
    }
  );
});

router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM transactions WHERE user_id=?",
    [req.params.id],
    (err, result) => res.json(result)
  );
});

module.exports = router;
