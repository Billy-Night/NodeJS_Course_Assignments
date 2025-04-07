// Task 1 nodemon & express were installed
const express = require("express");
const path = require("path");

const mainRouters = require("./routes/index.js");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(mainRouters);

app.listen(3000);
