import React from "react";

// import Accordion from "./Accordion";
// import Search from "./Search";
import Dropdown from "./Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a JS framework",
//   },
//   {
//     title: "What are benefits of React?",
//     content: "React is a JS framework",
//   },
//   {
//     title: "What is React so popular?",
//     content: "React is a JS framework",
//   },
// ];

const options = [
  {
    label: "The Fiery Red",
    value: "red",
  },
  {
    label: "The Color Yellow",
    value: "yellow",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default App;