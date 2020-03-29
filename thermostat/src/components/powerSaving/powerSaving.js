import React from "react";
import "./powerSaving.css";
import PropTypes from "prop-types";

const PowerSaving = ({ powerSaveSwitch, powerSave }) => {
  return (
    <div
      className="powerSaving-container"
      data-test="container"
      onClick={powerSaveSwitch}
    >
      power saving {powerSave ? "on" : "off"}
    </div>
  );
};

PowerSaving.propTypes = {
  powerSave: PropTypes.bool.isRequired,
  powerSaveSwitch: PropTypes.func.isRequired
};

export default PowerSaving;
