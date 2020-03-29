import React from "react";
import "./reset.css";
import PropTypes from "prop-types";

const Reset = ({ resetSwitch }) => {
  return (
    <div
      className="reset-container"
      data-test="container"
      onClick={resetSwitch}
    >
      reset
    </div>
  );
};

Reset.propTypes = {
  resetSwitch: PropTypes.func.isRequired
};

export default Reset;
