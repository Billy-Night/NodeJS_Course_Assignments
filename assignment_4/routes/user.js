const express = require("express");
const router = express.Router();
const userData = require("./form");

router.get("/user", (req, res, next) => {
  const user = userData.users[0];
  res.render("user", {
    pageTitle: "user page",
    name: user.name,
    email: user.email,
  });
});

exports.routes = router;
