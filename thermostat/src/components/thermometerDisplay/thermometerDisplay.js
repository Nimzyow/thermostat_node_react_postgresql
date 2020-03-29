import React, { useState, useEffect } from "react";
import "./thermometerDisplay.css";
import PropTypes from "prop-types";

const ThermometerDisplay = ({ temperature }) => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    if (temperature < 18) {
      setColor("blue");
    } else if (temperature < 25) {
      setColor("green");
    } else setColor("red");
  }, [temperature]);

  return (
    <div className={`thermometer ${color}`} data-test="container">
      <p className="header" data-test="text">
        {temperature}
      </p>
    </div>
  );
};

ThermometerDisplay.propTypes = {
  temperature: PropTypes.number.isRequired
};

export default ThermometerDisplay;
