const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Always running");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("hello from the user dummy info");
  res.send("<h2>This is the users dummy</h2>");
});

app.use("/", (req, res, next) => {
  console.log("hello from middleware 2");
  res.send("<h1>Hello from the second middleware in server</h1>");
});

app.listen(3000);
