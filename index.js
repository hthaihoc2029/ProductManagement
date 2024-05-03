const express = require("express");
const database = require("./config/database");
const systemConfig = require("./config/system");

require("dotenv").config();

// connect database
database.connect();

//config router
const routeClient = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

const app = express();
const port = process.env.PORT;

//App local Variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

//Router
routeClient(app);
routeAdmin(app);

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
