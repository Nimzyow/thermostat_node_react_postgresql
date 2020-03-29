import React from "react";
import "./outsideTemp.css";
import PropTypes from "prop-types";

const OutsideTemp = ({ city, outsideTemperature, changeCity }) => {
  return (
    <div className="outsideTemp-container" data-test="container">
      <p>outside temperature in</p>
      <h1>{city}</h1>
      <h2>{outsideTemperature} degrees</h2>
      <p>Tap on city below for city selection</p>
      <select
        className="citySelection"
        value={city}
        onChange={event => changeCity(event.target.value)}
      >
        <option value="London,uk">London</option>
        <option value="Tokyo,jp">Tokyo</option>
        <option value="Kyoto,jp">Kyoto</option>
        <option value="Paris,fr">Paris</option>
      </select>
    </div>
  );
};

OutsideTemp.propTypes = {
  city: PropTypes.string.isRequired,
  outsideTemperature: PropTypes.number,
  changeCity: PropTypes.func.isRequired
};

export default OutsideTemp;
