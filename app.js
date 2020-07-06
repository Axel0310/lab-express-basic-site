const express = require("express");
const hbs = require("hbs");
const app = express();
require("dotenv").config();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    res.render("home", {homeDisplayed: true});
});

app.get("/carousel", (req, res) => {
    res.render("carousel", {homeDisplayed: false});
});

app.get("/about", (req, res) => {
    res.render("about", {homeDisplayed: false});
});

app.listen(process.env.PORT, () => {
    console.log(`App rolling @ http://localhost:${process.env.PORT}`);
});