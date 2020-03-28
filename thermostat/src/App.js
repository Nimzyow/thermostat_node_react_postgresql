import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ThermometerDisplay from "./components/thermometerDisplay/thermometerDisplay";
import UpDown from "./components/upDown/upDown";
import PowerSaving from "./components/powerSaving/powerSaving";
import OutsideTemp from "./components/outsideTemp/outsideTemp";
import * as DATA from "./DATA/data";
import Reset from "./components/reset/reset";
import Save from "./components/save/save";

function App() {
  const MINIMUMTEMPERATURE = 10;
  const MAXTEMPERATUREPOWERON = 25;
  const MAXTEMPERATUREPOWEROFF = 35;
  const [temperature, setTemperature] = useState(20);
  const [outTemp, setOutTemp] = useState(null);
  const [powerSave, setPowerSave] = useState(true);
  const [city, setCity] = useState("London");

  useEffect(() => {
    loadFromDB();
    load();
  }, []);

  const loadFromDB = async () => {
    try {
      await axios.get("http://localhost:4000/load").then(res => {
        const gotCity = res.data.msg[0].city;
        setCity(gotCity);
        const gotTemp = res.data.msg[0].temperature;
        setOutTemp(parseFloat(gotTemp));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const load = async () => {
    try {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${DATA.APIKEY}&units=metric`
        )
        .then(res => {
          setCity(res.data.name);
          setOutTemp(res.data.main.temp);
        });
    } catch (error) {
      console.error(error);
    }
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
    const toSave = {
      temperature: temperature,
      city: city
    };
    const toSaveJSON = JSON.stringify(toSave);
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      await axios.post("http://localhost:4000/save", toSaveJSON, config);
      console.log("post successful");
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
      <OutsideTemp city={city} outsideTemperature={outTemp} />
      <Reset
        resetSwitch={() => {
          resetSwitch();
        }}
      />
      <Save saveSwitch={() => saveSwitch()} />
    </div>
  );
}

export default App;
