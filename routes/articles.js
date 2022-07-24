const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("whats up");
});

module.exports = router;
