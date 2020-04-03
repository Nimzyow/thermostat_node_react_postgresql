const express = require("express");
const cors = require("cors");
const Sequelize = require("./db");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(cors());
//body parser middleware to see whats inside the body of the post request
app.use(bodyParser());

app.get("/", (req, res) => {
  res.json({ msg: "hello world!" });
});

app.post("/save", async (req, res) => {
  try {
    await Sequelize.query("DELETE FROM thermo;");
    await Sequelize.query(
      `INSERT INTO thermo (temperature, city) VALUES ('${req.body.temperature}', '${req.body.city}');`
    );
    res.json({
      msg: `Inserted tempertaure of ${req.body.temperature} and city of ${req.body.city} into thermo table`,
    });
  } catch (error) {
    console.error(error);
  }
});

app.get("/load", async (req, res) => {
  try {
    const [results, metadata] = await Sequelize.query(`SELECT * FROM thermo;`);
    res.json({ msg: results });
  } catch (error) {
    console.error(error);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("thermostat/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "thermostat", "build", "index.html"))
  );
}

module.exports = app;
