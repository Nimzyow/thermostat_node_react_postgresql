import React, { Fragment } from "react";
import "./thermometerDisplay.css";
import PropTypes from "prop-types";

const ThermometerDisplay = ({ temperature }) => {
  return (
    <div className="thermometer">
      <p className="header">{temperature}</p>
    </div>
  );
};

ThermometerDisplay.propTypes = {
  temperature: PropTypes.number.isRequired
};

export default ThermometerDisplay;
