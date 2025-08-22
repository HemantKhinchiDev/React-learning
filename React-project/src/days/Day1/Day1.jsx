import React from "react";
import { CounterButton } from "./CounterButton";
import { MirrorInput } from "./MirrorInput";
import { FruitList } from "./FruitList";
import { Todo } from "./Day1-practice/Todo";
export const Day1 = (props) => {
    const fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango"];
    return (
        <>
            <div className="">
                Day 1 Learning Component 
                <CounterButton/>
                <MirrorInput/>
                <FruitList fruits={fruits}/>
            </div>
            <div className="">
                Day 1 Preactice Component  Todo
                <Todo/> 
            </div>
            
        </>
    );
}
