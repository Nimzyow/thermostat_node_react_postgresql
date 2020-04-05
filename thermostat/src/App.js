import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ThermometerDisplay from "./components/thermometerDisplay/thermometerDisplay";
import UpDown from "./components/upDown/upDown";
import PowerSaving from "./components/powerSaving/powerSaving";
import OutsideTemp from "./components/outsideTemp/outsideTemp";
//import * as DATA from "./DATA/data";
import Reset from "./components/reset/reset";
import Save from "./components/save/save";
const dotenv = require("dotenv");
dotenv.config();

function App() {
  const MINIMUMTEMPERATURE = 10;
  const MAXTEMPERATUREPOWERON = 25;
  const MAXTEMPERATUREPOWEROFF = 35;
  const [temperature, setTemperature] = useState(20);
  const [outTemp, setOutTemp] = useState(null);
  const [powerSave, setPowerSave] = useState(true);
  const [city, setCity] = useState("London,uk");
  const [save, setSave] = useState(false);

  useEffect(() => {
    loadFromDB();
    loadFromWeatherAPI(city);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSave(false);
    }, 3000);
  }, [save]);

  const loadFromDB = async () => {
    try {
      await axios.get("http://localhost:4000/load").then((res) => {
        console.log(res.data.msg.rows[0].temperature);
        const gotCity = res.data.msg.rows[0].city;
        setCity(gotCity);
        console.log(city);
        const gotTemp = res.data.msg.rows[0].temperature;
        setTemperature(parseFloat(gotTemp));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadFromWeatherAPI = async (city) => {
    try {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APIKEY}&units=metric`
        )
        .then((res) => {
          setOutTemp(res.data.main.temp);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const changeCity = (city) => {
    setCity(city);
    loadFromWeatherAPI(city);
  };

  const increaseTemperature = () => {
    if (temperatureIncreaseCheck()) {
      setTemperature(temperature + 1);
    }
  };

  const decreaseTemperature = () => {
    if (temperature > MINIMUMTEMPERATURE) {
      setTemperature(temperature - 1);
    }
  };

  const temperatureIncreaseCheck = () => {
    if (powerSave) {
      return temperature < MAXTEMPERATUREPOWERON;
    } else {
      return temperature < MAXTEMPERATUREPOWEROFF;
    }
  };

  const powerSaveSwitch = () => {
    setPowerSave(!powerSave);
  };

  const resetSwitch = () => {
    setTemperature(20);
    setPowerSave(true);
  };

  const saveSwitch = async () => {
    if (!save) {
      const toSave = {
        temperature: temperature,
        city: city,
      };
      const toSaveJSON = JSON.stringify(toSave);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        await axios.post("http://localhost:4000/save", toSaveJSON, config);
        console.log("post successful");
        setSave(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="place-center">
      <div className="outer-container" data-test="outer-container">
        <ThermometerDisplay temperature={temperature} />
        <UpDown
          increaseTemp={() => increaseTemperature()}
          decreaseTem={() => decreaseTemperature()}
        />
        <PowerSaving
          powerSaveSwitch={() => powerSaveSwitch()}
          powerSave={powerSave}
        />
        <OutsideTemp
          changeCity={(e) => changeCity(e)}
          city={city}
          outsideTemperature={outTemp}
        />
        <Reset
          resetSwitch={() => {
            resetSwitch();
          }}
        />
        <Save saveSwitch={() => saveSwitch()} save={save} />
      </div>
    </div>
  );
}

export default App;
