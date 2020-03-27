import React from "react";
import "./thermometerDisplay.css";
import PropTypes from "prop-types";

const ThermometerDisplay = ({ temperature }) => {
  return (
    <div className="thermometer" data-test="container">
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
