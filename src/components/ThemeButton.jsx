import React from "react";

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

export default ThemeButton;
