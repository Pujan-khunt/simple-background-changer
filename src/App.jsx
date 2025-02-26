import React, { useState } from "react";

function App({}) {
  const [bgColor, setBgColor] = useState('bg-green-900');

  return (
    <div className={`h-screen w-screen duration-200 ${bgColor}`}>
      <div className="w-full flex justify-center">
        <div className="border border-white shadow-lg fixed flex gap-4 justify-center bottom-20 bg-gray-500 py-5 px-4 rounded-4xl">
          <button onClick={() => setBgColor('bg-red-500')} className="shadow-lg h-10 w-16 rounded-4xl bg-red-500">R</button>
          <button onClick={() => setBgColor('bg-green-500')} className="shadow-lg h-10 w-16 rounded-4xl bg-green-500">G</button>
          <button onClick={() => setBgColor('bg-blue-600')} className="shadow-lg h-10 w-16 rounded-4xl bg-blue-600">B</button>
        </div>
      </div>
    </div>
  );
}

export default App;
