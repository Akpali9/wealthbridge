const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "I can help you manage your money better.";

  if (msg.includes("save")) reply = "Save at least 20% of your income monthly.";
  if (msg.includes("budget")) reply = "Use 50/30/20 budgeting rule.";
  if (msg.includes("invest")) reply = "Start with low-risk investments first.";

  res.json({ reply });
});

module.exports = router;
