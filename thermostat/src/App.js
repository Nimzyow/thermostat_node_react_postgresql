import React, { useEffect, useState } from "react";
import "./App.css";
import ThermometerDisplay from "./components/thermometerDisplay/thermometerDisplay";
import UpDown from "./components/upDown/upDown";
import PowerSaving from "./components/powerSaving/powerSaving";
import OutsideTemp from "./components/outsideTemp/outsideTemp";
import Reset from "./components/reset/reset";
import Save from "./components/save/save";

function App() {
  const MINIMUMTEMPERATURE = 10;
  const MAXTEMPERATUREPOWERON = 25;
  const MAXTEMPERATUREPOWEROFF = 35;
  const [temperature, setTemperature] = useState(20);
  const [powerSave, setPowerSave] = useState(true);

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

  return (
    <div className="outer-container">
      <ThermometerDisplay temperature={temperature} />
      <UpDown
        increaseTemp={() => increaseTemperature()}
        decreaseTem={() => decreaseTemperature()}
      />
      <PowerSaving
        powerSaveSwitch={() => powerSaveSwitch()}
        powerSave={powerSave}
      />
      <OutsideTemp />
      <Reset />
      <Save />
    </div>
  );
}

export default App;
