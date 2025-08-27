import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Day1 } from "./days/Day1/Day1";
import { Day2 } from "./days/Day2/Day2";
import { Day3 } from "./days/Day3/Day3";
import { Day4 } from "./days/Day4/Day4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React Learning</h1>
      <nav style={{ marginBottom: "20px" }}>
        <a href="#day1" style={{ marginRight: "10px" }}>
          Day-1
        </a>
        <a href="#day2" style={{ marginRight: "10px" }}>
          Day-2
        </a>
        <a href="#day3" style={{ marginRight: "10px" }}>
          Day-3
        </a>
        <a href="#day4" style={{ marginRight: "10px" }}>
          Day-4
        </a>
      </nav>
      <section id="day1">
        <h2>Day-1 Learning Component</h2>
        <Day1 />
      </section>
      {/* Day 2 Section */}
      <section id="day2">
        <h2>Day-2 Registration Form</h2>
        <Day2 />
      </section>
      <section id="day3">
        <h2>Day-3 Project Ideas (Lists & Keys)</h2>
        <Day3 />
      </section>
      <section id="day4">
        <h2>Day-4</h2>
        <Day4
          title={`useEffect (intro: run on mount) → Task: Fetch and show random
          quote from API`}
        />
      </section>
    </>
  );
}

export default App;
