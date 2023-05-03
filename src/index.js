const path = require("path");
const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan("dev"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
// app.engine('handlebars', engine());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// ROutes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
