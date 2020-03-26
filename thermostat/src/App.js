import React from "react";
import "./App.css";
import ThermometerDisplay from "./components/thermometerDisplay/thermometerDisplay";
import UpDown from "./components/upDown/upDown";
import PowerSaving from "./components/powerSaving/powerSaving";
import OutsideTemp from "./components/outsideTemp/outsideTemp";
import Reset from "./components/reset/reset";
import Save from "./components/save/save";

function App() {
  return (
    <div className="outer-container">
      <ThermometerDisplay />
      <UpDown />
      <PowerSaving />
      <OutsideTemp />
      <Reset />
      <Save />
    </div>
  );
}

export default App;
