import React, { useState } from "react";
import ThemeButton from "./components/ThemeButton";

const themes = [
  { key: 1, bgColor: "bg-red-500", textColor: "text-yellow-500", label: "R" },
  { key: 2, bgColor: "bg-green-500", textColor: "text-black", label: "G" },
  { key: 3, bgColor: "bg-blue-600", textColor: "text-white", label: "B" },
];

function App() {
  const [theme, setTheme] = useState({
    bgColor: "bg-green-900",
    textColor: "text-white",
  });

  return (
    <div className={`h-screen w-screen duration-300 ${theme.bgColor}`}>
      <div className="w-full h-full flex justify-center items-center ">
        <h1 className={`text-9xl ${theme.textColor}`}>
          Background Changer 1.0
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="border border-white shadow-lg fixed flex gap-4 justify-center bottom-20 bg-gray-500 py-5 px-4 rounded-4xl">
          {themes.map((theme) => {
            return (
              <ThemeButton
                key={theme.key}
                bgColor={theme.bgColor}
                textColor={theme.textColor}
                setTheme={setTheme}
                label={theme.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
