const express = require("express");
const cors = require("cors");
const Sequelize = require("./db");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "hello world!" });
});

app.post("/save", (req, res) => {
  res.json({ msg: "I got to the post request" });
});

module.exports = app;
