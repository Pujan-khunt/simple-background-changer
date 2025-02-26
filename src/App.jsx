import React, { useState } from "react";

function App({}) {
  const [bgColor, setBgColor] = useState("bg-green-900");
  const [fontColor, setFontColor] = useState("text-white");

  function handleChange(bgColor, fontColor) {
    setBgColor(bgColor);
    setFontColor(fontColor);
  }

  return (
    <div className={`h-screen w-screen duration-300 ${bgColor}`}>
      <div className="w-full h-full flex justify-center items-center ">
        <h1 className={`text-6xl ${fontColor}`}>Background Changer 1.0</h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="border border-white shadow-lg fixed flex gap-4 justify-center bottom-20 bg-gray-500 py-5 px-4 rounded-4xl">
          <button
            onClick={() => handleChange("bg-red-500", "text-yellow-500")}
            className="shadow-lg h-10 w-16 rounded-4xl bg-red-500"
            >
            R
          </button>
          <button
            onClick={() => handleChange("bg-green-500", "text-black")}
            className="shadow-lg h-10 w-16 rounded-4xl bg-green-500"
            >
            G
          </button>
          <button
            onClick={() => handleChange("bg-blue-600", "text-white")}
            className="shadow-lg h-10 w-16 rounded-4xl bg-blue-600"
          >
            B
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
