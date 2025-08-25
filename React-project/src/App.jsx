import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Day1 } from "./days/Day1/Day1";
import { Day2 } from "./days/Day2/Day2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React Learning</h1>
      <Day1 />
      <Day2 />
    </>
  );
}

export default App;
