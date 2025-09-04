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
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8 md:p-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          Vite + React Learning
        </h1>
        <p className="text-xl text-gray-600">
          A journey of coding, one day at a time.
        </p>
      </header>

      <nav className="flex flex-wrap justify-center gap-2 mb-12 p-4 bg-white rounded-lg shadow-md">
        <a
          href="#day1"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-1
        </a>
        <a
          href="#day2"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-2
        </a>
        <a
          href="#day3"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-3
        </a>
        <a
          href="#day4"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-4
        </a>
        <a
          href="#day5"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-5
        </a>
        <a
          href="#day6"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-6
        </a>
        <a
          href="#day7"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-7
        </a>
        <a
          href="#day8"
          className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Day-8
        </a>
      </nav>

      <main className="space-y-12">
        <section
          id="day1"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Day-1 Learning Component
          </h2>
          <Day1 />
        </section>

        <section
          id="day2"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Day-2 Registration Form
          </h2>
          <Day2 />
        </section>

        <section
          id="day3"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Day-3 Project Ideas
          </h2>
          <Day3 />
        </section>

        <section
          id="day4"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Day-4 Something Different
          </h2>
          <Day4 />
        </section>

        <section
          id="day5"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Day-5 UseRef
          </h2>
          <Day5 />
        </section>

        <section
          id="day6"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Day-6 Weather App
          </h2>
          <Day6 />
        </section>

        <section
          id="day7"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            My Shopping List App
          </h2>
          <Day7 />
        </section>

        <section
          id="day8"
          className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700">My Form App</h2>
          <Day8 />
        </section>
      </main>
    </div>
  );
}

export default App;
