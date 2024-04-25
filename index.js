const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug");

//Router
route(app);

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
