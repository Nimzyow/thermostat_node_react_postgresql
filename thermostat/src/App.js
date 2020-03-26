import React, { useEffect, useState } from "react";
import "./App.css";
import ThermometerDisplay from "./components/thermometerDisplay/thermometerDisplay";
import UpDown from "./components/upDown/upDown";
import PowerSaving from "./components/powerSaving/powerSaving";
import OutsideTemp from "./components/outsideTemp/outsideTemp";
import Reset from "./components/reset/reset";
import Save from "./components/save/save";

function App() {
  const [temperature, setTemperature] = useState(20);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };
  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  return (
    <div className="outer-container">
      <ThermometerDisplay temperature={temperature} />
      <UpDown
        increaseTemp={increaseTemperature}
        decreaseTem={decreaseTemperature}
      />
      <PowerSaving />
      <OutsideTemp />
      <Reset />
      <Save />
    </div>
  );
}

export default App;
