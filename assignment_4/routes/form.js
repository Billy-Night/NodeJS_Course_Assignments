const express = require("express");
const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("form", {
    pageTitle: "form page",
  });
});

router.post("/", (req, res, next) => {
  users.push(req.body);
  res.redirect("/user");
});

exports.users = users;
exports.routes = router;
