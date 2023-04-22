var express = require("express");
var router = express.Router();

router.post("/register", (req, res) => {
  return res.status(200).json(req.body);
});

router.post("/login");

module.exports = router;
