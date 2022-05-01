const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);
app.use("css", express.static("/public/css"));
app.use("js", express.static("/public/js"));
app.use("img", express.static("/public/imgs"));

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    extname: ".handlebars",
    partialsDir: "views/partials",
  })
);

app.get("/", (_req, res) => {
  res.render("index");
});
