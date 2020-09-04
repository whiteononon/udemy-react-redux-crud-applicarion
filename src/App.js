import React from "react";

// function App() {
//   return (
//     <>
//       <label htmlFor="bar">Bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log("hi");
//         }}
//       />
//     </>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>mewo</div>;
};

export default App;
