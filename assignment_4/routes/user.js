const express = require("express");
const router = express.Router();
const userData = require("./form");

router.get("/user", (req, res, next) => {
  const users = userData.users;
  res.render("user", {
    pageTitle: "user page",
    users: users,
    // name: user.name,
    // email: user.email,
  });
});

exports.routes = router;
