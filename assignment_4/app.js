const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const formRoute = require("./routes/form");
const userRoute = require("./routes/user");
const errorRoute = require("./routes/404");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(formRoute.routes);
app.use(userRoute.routes);
app.use(errorRoute.routes);

app.listen(3000);
