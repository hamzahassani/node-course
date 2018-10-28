const express = require("express");
const hbs = require("hbs");

var app = express();

const port = process.env.PORT || 3000;

// var fs = require('fs');

// var partialsDir = __dirname + '/../views/partials';

// var filenames = fs.readdirSync(partialsDir);

// filenames.forEach(function (filename) {
//   var matches = /^([^.]+).hbs$/.exec(filename);
//   if (!matches) {
//     return;
//   }
//   var name = matches[1];
//   var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
//   hbs.registerPartial(name, template);
// });

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, res, next) => {
  res.render("maintenance.hbs");
});

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  //   res.send("<h1>Hello Express</h1>");
  res.render("home.hbs", {
    pageTitle: "Hello there",
    welcomeMessage: "first idea"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "Hello there"
  });
});

app.get("/bad", (req, res) => {
  res.send({ errorMessage: "Unable to handle request" });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
