const express = require("express");
const cors = require("cors");
const Pool = require("./db");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
//body parser middleware to see whats inside the body of the post request
app.use(bodyParser());

app.get("/", (req, res) => {
  res.json({ msg: "hello world!" });
});

app.post("/save", async (req, res) => {
  await Pool.query("DELETE FROM thermo;", (error, results) => {
    if (error) {
      throw error;
    }
    Pool.query(
      `INSERT INTO thermo (temperature, city) VALUES ('${req.body.temperature}', '${req.body.city}');`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.json({
          msg: `Inserted tempertaure of ${req.body.temperature} and city of ${req.body.city} into thermo table`,
        });
      }
    );
  });
});

app.get("/load", async (req, res) => {
  //try {
  //const client = await Pool.connect();
  await Pool.query("SELECT * FROM thermo;", (error, results) => {
    if (error) {
      throw error;
    }
    res.json({ msg: results });
  });
  //   const results = { results: result ? result.rows : null };
  //   res.json({ msg: results });
  //   //
  // } catch (error) {
  //   console.error(error);
  //   res.send("Error" + error);
  // }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("thermostat/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "thermostat", "build", "index.html"))
  );
}

module.exports = app;
