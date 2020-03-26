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
      <div className="slightly-bigger">
        <ThermometerDisplay />
      </div>
      <div className="even-split">
        <UpDown />
      </div>
      <div className="even-split">
        <PowerSaving />
      </div>
      <div className="even-split">
        <OutsideTemp />
      </div>
      <div className="even-split">
        <Reset />
      </div>
      <div className="even-split">
        <Save />
      </div>
    </div>
  );
}

export default App;
