import React from "react";

const Techstack = () => {
  const frontEnd = ["JavaScripts", "React", "TypeScript", "Vite"];

  return (
    <div className="max-w-xl mx-auto mt-2">
      <h1 className="text-2xl font-bold">TECHSTACKS</h1>
      <div className="m-2">
        <h1 className="font-semibold text-lg">frontend</h1>
        <div>
          <ul>
            {frontEnd.map((techList, index) => (
              <li key={index}>{techList}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
