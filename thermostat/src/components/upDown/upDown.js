import React from "react";
import "./upDown.css";
import PropTypes from "prop-types";

const UpDown = ({ increaseTemp, decreaseTem }) => {
  return (
    <div className="component" data-test="upDownContainer">
      <div data-test="up" className="border" onClick={() => increaseTemp()}>
        <h1>+</h1>
      </div>
      <div data-test="down" className="border" onClick={() => decreaseTem()}>
        <h1>-</h1>
      </div>
    </div>
  );
};

UpDown.propTypes = {
  increaseTemp: PropTypes.func.isRequired,
  decreaseTem: PropTypes.func.isRequired
};

export default UpDown;
