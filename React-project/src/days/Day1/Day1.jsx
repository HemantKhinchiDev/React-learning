import React from "react";
import { CounterButton } from "./CounterButton";
import { MirrorInput } from "./MirrorInput";
import { FruitList } from "./FruitList";
export const Day1 = (props) => {
    const fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango"];
    return (
        <>
            <div className="">
                Day 1 Component 
            </div>
            <CounterButton/>
            <MirrorInput/>
            <FruitList fruits={fruits}/>
        </>
    );
}
