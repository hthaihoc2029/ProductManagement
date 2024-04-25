const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const route = require("./routes/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug");

//Router
route(app);

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
