import React from "react";

function App() {
  return (
    <>
      <label htmlFor="bar">Bar</label>
      <input
        type="text"
        onChange={() => {
          console.log("hi");
        }}
      />
    </>
  );
}

export default App;
