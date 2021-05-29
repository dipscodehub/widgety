import React, { useState } from "react";

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
  const [selected, setSelected] = useState(options[0]);
  const [showDrodown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDrodown)}>
        Toggle Dropdown
      </button>
      {showDrodown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
