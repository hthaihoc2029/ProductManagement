const express = require("express");
const database = require("./config/database");

require("dotenv").config();

// connect database
database.connect();

//config router
const route = require("./routes/client/index.route");

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

//Router
route(app);

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
