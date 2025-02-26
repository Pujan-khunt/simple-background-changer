import React from "react";
import PropTypes from "prop-types";

function ThemeButton({ bgColor, textColor, setTheme, label }) {
  return (
    <button
      onClick={() => setTheme({ bgColor, textColor })}
      className={`shadow-lg h-10 w-16 rounded-4xl ${bgColor}`}
    >
      {label}
    </button>
  );
}

ThemeButton.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default ThemeButton;
