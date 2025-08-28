import { Day1 } from "./days/Day1/Day1";
import { Day2 } from "./days/Day2/Day2";
import { Day3 } from "./days/Day3/Day3";
import { Day4 } from "./days/Day4/Day4";
import { Day5 } from "./days/Day5/Day5";

function App() {
  return (
    <div className="p-6">
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
    </div>
  );
}

export default App;
