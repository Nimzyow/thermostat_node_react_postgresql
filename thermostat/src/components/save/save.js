import React from "react";
import "./save.css";
import PropTypes from "prop-types";

const Save = ({ saveSwitch }) => {
  return (
    <div className="container" data-test="container" onClick={saveSwitch}>
      save
    </div>
  );
};

Save.propTypes = {
  saveSwitch: PropTypes.func.isRequired
};

export default Save;
