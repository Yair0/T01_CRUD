let express = require("express");
let app = express();

let webRoutes = require("./routes/web");

let appConfigs = require("./configs/app");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

let methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use("/", webRoutes);

let exphbs = require("express-handlebars");
const appConfig = require("./configs/app");
const extNameHbs = "hbs";
let hbs = exphbs.create({ extname: extNameHbs });
app.engine(extNameHbs, hbs.engine);
app.set("view engine", extNameHbs);

app.listen(appConfigs.express_port, function () {
  console.log("The app is running on port " + appConfigs.express_port);
});
