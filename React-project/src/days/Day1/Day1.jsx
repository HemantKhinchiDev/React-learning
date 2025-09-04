import React from "react";
import { CounterButton } from "./CounterButton";
import { MirrorInput } from "./MirrorInput";
import { FruitList } from "./FruitList";
import { Todo } from "./Day1-practice/Todo";

export const Day1 = (props) => {
  const fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango"];
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Day 1 Learning Component
        </h2>
        <div className="space-y-4">
          <CounterButton />
          <MirrorInput />
          <FruitList fruits={fruits} />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Day 1 Practice Component: Todo
        </h2>
        <Todo />
      </div>
    </>
  );
};
