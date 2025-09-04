import { Day1 } from "./days/Day1/Day1";
import { Day2 } from "./days/Day2/Day2";
import { Day3 } from "./days/Day3/Day3";
import { Day4 } from "./days/Day4/Day4";
import { Day5 } from "./days/Day5/Day5";
import { Day6 } from "./days/Day6/Day6";
import { Day7 } from "./days/Day7/Day7";
import { Day8 } from "./days/Day8/Day8";
function App() {
  return (
    <div className="p-0">
      <h1 className="text-3xl font-bold mb-6">Vite + React Learning</h1>

      <nav className="mb-6 space-x-4">
        <a href="#day1" className="text-blue-600 hover:underline">
          Day-1
        </a>
        <a href="#day2" className="text-blue-600 hover:underline">
          Day-2
        </a>
        <a href="#day3" className="text-blue-600 hover:underline">
          Day-3
        </a>
        <a href="#day4" className="text-blue-600 hover:underline">
          Day-4
        </a>
        <a href="#day5" className="text-blue-600 hover:underline">
          Day-5
        </a>
        <a href="#day6" className="text-blue-600 hover:underline">
          Day-6
        </a>
        <a href="#day7" className="text-blue-600 hover:underline">
          Day-7
        </a>
        <a href="#day8" className="text-blue-600 hover:underline">
          Day-8
        </a>
      </nav>

      <section id="day1" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Day-1 Learning Component</h2>
        <Day1 />
      </section>

      <section id="day2" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Day-2 Registration Form</h2>
        <Day2 />
      </section>

      <section id="day3" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Day-3 Project Ideas</h2>
        <Day3 />
      </section>

      <section id="day4" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Day-4 Something Different
        </h2>
        <Day4 />
      </section>
      <section id="day5" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Day-5 UseRef</h2>
        <Day5 />
      </section>
      <section id="day6" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Day-6 Weather App</h2>
        <Day6 />
      </section>
      <section id="day7" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Shopping List App</h2>
        <Day7 />
      </section>
      <section id="day8" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Form App</h2>
        <Day8 />
      </section>
    </div>
  );
}

export default App;
