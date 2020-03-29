import React from "react";
import "./save.css";
import PropTypes from "prop-types";

const Save = ({ saveSwitch, save }) => {
  return (
    <div className="save-container" data-test="container" onClick={saveSwitch}>
      {save ? "saved" : "save"}
    </div>
  );
};

Save.propTypes = {
  saveSwitch: PropTypes.func.isRequired,
  save: PropTypes.bool.isRequired
};

export default Save;
