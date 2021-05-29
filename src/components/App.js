import React, { useState } from "react";

// import Accordion from "./Accordion";
// import Search from "./Search";
// import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Header from "./Header";

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
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Translate />
    </div>
  );
};

export default App;
