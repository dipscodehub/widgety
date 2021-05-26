import React from "react";

// import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is React?",
    content: "React is a JS framework",
  },
  {
    title: "What are benefits of React?",
    content: "React is a JS framework",
  },
  {
    title: "What is React so popular?",
    content: "React is a JS framework",
  },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
