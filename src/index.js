const path = require("path");
const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const handlebars = require("express-handlebars").engine;
var methodOverride = require('method-override')

const app = express();
const port = 3000;
const db = require("./config/db");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

// Connect to DB
db.connect();

// ROutes init
route(app);

// HTTP logger
// app.use(morgan("dev"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b
    },
  })
);
// app.engine('handlebars', engine());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
