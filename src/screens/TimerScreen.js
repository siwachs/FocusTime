import React from "react";
import Timer from "../features/Timer";
import PropTypes from "prop-types";

const TimerScreen = ({ focusSubject, onTimerEnd, clearSubject }) => {
  return (
    <Timer
      focusSubject={focusSubject}
      onTimerEnd={onTimerEnd}
      clearSubject={clearSubject}
    />
  );
};

TimerScreen.propTypes = {
  focusSubject: PropTypes.string.isRequired,
  onTimerEnd: PropTypes.func.isRequired,
  clearSubject: PropTypes.func.isRequired,
};

export default TimerScreen;
