import React from "react";
import "./outsideTemp.css";
import PropTypes from "prop-types";

const OutsideTemp = ({ city, outsideTemperature }) => {
  return (
    <div className="container" data-test="container">
      <p>outside temperature in</p>
      <h1>{city}</h1>
      <h2>{outsideTemperature} degrees</h2>
      <p>Tap on city below for city selection</p>
      <p>London</p>
    </div>
  );
};

OutsideTemp.propTypes = {
  city: PropTypes.string.isRequired,
  outsideTemperature: PropTypes.number
};

export default OutsideTemp;
