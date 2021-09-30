var express = require("express");
var router = express.Router();
var registerInitailCheck = require("../middlewares/registerChecks");
var register = require("../controllers/register");
/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "ayush";
  res.render("index", { title: "Express" });
});
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/register", registerInitailCheck, register);
module.exports = router;
